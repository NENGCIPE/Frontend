import React, { useState, useEffect } from 'react';
// import React, { useState} from 'react';
import { useParams } from "react-router-dom";
// import React from 'react';
//import { useParams } from 'react-router-dom';
import './Recipe.css';
import axios from 'axios';

function Recipe() {



    const { recipeID } = useParams();

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isHeartFull, setIsHeartFull] = useState(false);
    //const [is_scraped, setscraped] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [recipe, setRecipe] = useState('[]');

    useEffect(() => {


        const getRecipe = async () => {

            const { data } = await axios.get(`https://nengcipe-server.store/api/recipes/${recipeID}`, {
                headers: {
                    Authorization: sessionStorage.getItem('jwt')
                }
            });
            return data.result;


        }; getRecipe().then(result => setRecipe(result));
    }, [recipeID]);


    const toggleAccordion = () => {//공유하기 복사기능
        setIsAccordionOpen(!isAccordionOpen);
        setShowMessage(true);
        console.log('Accordion')
        const recipeLink = `https://nengcipe.com/api/recipes/${recipeID}`;

        navigator.clipboard.writeText(recipeLink)

            .then(() => {

                setTimeout(() => {
                    setShowMessage(false);
                }, 2000);
                alert("클립보드에 복사되었습니다.");
            })
            .catch((error) => {
                console.error("텍스트 복사 중 오류가 발생했습니다.", error);
            });

    };
    const handleScrap = async () => {
        const request = {
            recipeId: recipeID
        }
        await axios.post("https://nengcipe-server.store/api/recipes/scrap", request, {
            headers: {
                Authorization: sessionStorage.getItem('jwt')
            }
        }).then(
            console.log("scrap!!"),
            alert("스크랩 되었습니다.")
        )
            .catch(error => {
                if (error.response.status === 409) {
                    alert("이미 스크랩된 레시피입니다.");

                    //setscraped(true);
                    //setIsHeartFull(true);
                    console.log("이미 스크랩된 레시피")
                }
            })


    };
    const delete_handleScrap = async () => {
        const request = {
            data: {
                recipeId: recipeID
            },
            headers: {
                Authorization: sessionStorage.getItem('jwt')
            }
        };

        try {
            await axios.delete("https://nengcipe-server.store/api/recipes/scrapOut", request);
            console.log("Scrap OUT!!");
            alert("스크랩이 취소되었습니다.");
        } catch (error) {
            if (error.response && error.response.status === 500) {
                alert("이미 삭제된 레시피입니다.");
            }
        }


    };

    const toggleHeart = () => {//스크랩하기 기능 -> 이번주 해결하기
        setIsHeartFull(!isHeartFull);
        //setHeartCount(isHeartFull ? heartCount - 1 : heartCount + 1);
        if (isHeartFull === false) {
            handleScrap();
        }
        else {
            delete_handleScrap();
        }
    };

    const renderIngredients = () => {
        if (recipe && recipe.recipeIngredName && recipe.recipeIngredAmount) {
            const names = recipe.recipeIngredName.split(',');
            const amounts = recipe.recipeIngredAmount.split(',');

            const renderedIngredients = names.map((name, index) => (
                <li className='ingredients_text' key={index}>{name.trim()}: {amounts[index].trim()}</li>
            ));

            return <ul>{renderedIngredients}</ul>;
        }

        return null;
    };
    const renderSentences = () => {
        if (recipe && recipe.recipeDetail) {
            const detail = recipe.recipeDetail.split('.');

            const renderSentences = detail.map((name, index) => (
                <li className='ingredients_text' key={index}>{name.trim()}</li>
            ));

            return <ul>{renderSentences}</ul>;
        }

        return null;
    };





    return (
    <div className='Recipe_container'>
        <div className='info_top'>
            <div className='Recipe_title'>
                <div className='dish_name'>
                    <h1>{recipe.recipeName}</h1>
                </div>
            </div>
            <div className='recipe_line'></div>
                <div className='Recipe'>
                {/* <div className='dish_name'>
                    <h1>{recipe.recipeName}</h1>
                </div> */}
                    <div className='info_left'>
                        <div className='ingredients'>
                            <h1>재료</h1>
                            <p1>{renderIngredients()}</p1><br />
                        </div>
                    </div>
                    <div className='info_right'>
                        <div className="image-container"><div >
                        <img className='food_img' src={recipe.imgUrl} alt="음식 이미지" />
                    </div>

                    <div className="dish_detail">
                        <div className='button_container'>
                            <div>
                                <button className='share_btn' onClick={toggleAccordion}>
                                    <img src={`${process.env.PUBLIC_URL}/share.png`} alt="공유" style={{ width: '30px', height: '30px' }} />
                                </button>
                                {isAccordionOpen && (
                                    <div>
                                        {showMessage && (
                                            <div className="accordion-content">
                                                {/* 복사 완료 */}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <button className='heart_btn' onClick={toggleHeart}>
                                <img src={`${process.env.PUBLIC_URL}/${isHeartFull ? 'heart_full' : 'heart_empty'}.png`} alt="하트" style={{ width: '30px', height: '30px' }} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='recipe-description'>
                    <h1 >레시피 설명</h1>
                    <p1>{renderSentences()}</p1>
                </div>
            </div>
        </div >
        </div>
        </div>
    );
} export default Recipe;
