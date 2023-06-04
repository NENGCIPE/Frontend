import React, { useState, useEffect } from 'react';
// import React, { useState} from 'react';
// import { useParams } from "react-router-dom";
import './Recipe.css';
import axios from 'axios';

function Recipe() {

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isHeartFull, setIsHeartFull] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [recipe, setRecipe] = useState('[]');

    const recipeID = 1;
    useEffect(() => {
        const response_local = {
            "code": 200,
            "message": "레시피 상세 정보 로드 성공.",
            "result": {
                "recipeName": "가지볶음 밑반찬 가지나물 가지 반찬 봄나물 가지반찬",
                "recipeDetail": "가지는 한입크기로 썰어주어요. 말린 목이버섯 한개를 물에 불렸더니 엄청 커져서 한줌되요. 목이버섯은 가지보다 작게 썰어주어요.\n목이버섯한줌과 가지 2개를 식용유 1.5큰술넣고 볶다가 다진마늘 한큰술, 진간장 4큰술, 꿀 1큰술 넣고 볶아요.\n가지가 익으면 가스불을끄고 들기름과 깨를 한큰술씩 넣고 섞어주어요.\n",
                "recipeIngredName": "가지,다진마늘,식용유,목이버섯,진간장,꿀,들기름,깨",
                "recipeIngredAmount": "2개,1큰술,1.5큰술,1줌,4큰술,1큰술,1큰술,1큰술",
                "imgUrl": "https://recipe1.ezmember.co.kr/cache/recipe/2023/03/15/e1c5cb344e24d7c24f69b010a3f8f29a1.jpg"
            }
        }

        const getRecipe = async () => {
            try {
                //const response = await axios.get(`https://nengcipe-server.store/api/recipes/${recipeID}`);
                //const result = response.result;
                const result = response_local.result;
                setRecipe(result);

            } catch (error) {
                console.error(error);
            }

        };

        getRecipe();
    }, []);


    //const [heartCount, setHeartCount] = useState(0);
    
    //const [IsScrapped, setIsScrapped] = useState(false);

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
            })
            .catch((error) => {
                console.error("텍스트 복사 중 오류가 발생했습니다.", error);
            });

    };

    const toggleHeart = () => {//스크랩하기 기능 -> 이번주 해결하기
        setIsHeartFull(!isHeartFull);
        //setHeartCount(isHeartFull ? heartCount - 1 : heartCount + 1);
        if (isHeartFull === false) {
                const handleScrap = async () => {
            
                const requestBody = {
                    recipeId: "1"
                };
                
                const response = await axios.post('https://nengcipe-server.store/api/recipes/scrap', requestBody);
                console.log(response.data);  
                console.log("scrap!!")
            
        };
        handleScrap();
    }
    };

    const renderIngredients = () => {
        if (recipe && recipe.recipeIngredName && recipe.recipeIngredAmount) {
            const names = recipe.recipeIngredName.split(',');
            const amounts = recipe.recipeIngredAmount.split(',');

            const renderedIngredients = names.map((name, index) => (
                <li key={index}>{name.trim()}: {amounts[index].trim()}</li>
            ));

            return <ul>{renderedIngredients}</ul>;
        }

        return null;
    };




    return (
        <div className='Recipe'>
            <div className='title'>
                <div className='page_name'>
                    <h1>Recipe</h1>
                </div>
                <div className='dish_name'>
                    <h1>{recipe.recipeName}</h1>

                </div>
            </div>

            <div className="image-container">
                <div >
                    <img className='food_img' src={recipe.imgUrl} alt="음식 이미지" />
                </div>

                <div className="dish_detail">
                    <div className='button_container'>


                        <div>
                            <button className='share_btn' onClick={toggleAccordion}>
                                <img src={`${process.env.PUBLIC_URL}/share.png`} alt="공유" style={{ width: '50px', height: '50px' }} />
                            </button>
                            {isAccordionOpen && (
                                <div>
                                    {showMessage && (
                                        <div className="accordion-content">
                                            복사 완료
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>

                        <button className='heart_btn' onClick={toggleHeart}>
                            <img src={`${process.env.PUBLIC_URL}/${isHeartFull ? 'heart_full' : 'heart_empty'}.png`} alt="하트" style={{ width: '50px', height: '50px' }} />
                            {/* <span className="heart-count">{heartCount}</span> */}
                        </button>
                    </div>

                    <div className='recipe_name'>
                        <h1>{recipe.recipeName}</h1><br />
                    </div>
                    <div className='ingredients'>
                        <h1>재료</h1>
                        {/* {recipe.recipeIngredName}{recipe.recipeIngredAmount}<br /> */}
                        <div>{renderIngredients()}</div><br />
                    </div>

                    <div className='recipe-description'>
                        <h1 >레시피 설명</h1>
                        <p>
                            {recipe.recipeDetail}
                        </p>
                    </div>

                </div>
            </div>
        </div >
    );
} export default Recipe;
