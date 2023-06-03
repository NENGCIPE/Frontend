import React, { useState } from 'react';
//import { useParams } from "react-router-dom";
import './Recipe.css';


function Recipe() {

    //const { id } = useParams();

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isHeartFull, setIsHeartFull] = useState(false);
    const [heartCount, setHeartCount] = useState(0);

    //const axios = require('axios');
    //const apiKey = 'YOUR_API_KEY';
    const apiEndpoint = 'https://nengcipe-server.store/api/recipes/recipe_id=';

    fetch(apiEndpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem('jwt'),
        },
        
    })
    .then((response) => response.json())
    .then((result) => {
        if (result.code === 200) {
            const ingredients = result.ingredients;
            if (ingredients.length > 0) {
                const recipe = ingredients[0];
                console.log('Recipe ID:', recipe.recipes_id);
                console.log('Recipe Name:', recipe.recipes_name);
                console.log('Recipe Detail:', recipe.recipes_detail);
                console.log('Recipe Ingredients:');
                recipe.Recipe.forEach((ingredient) => {
                    console.log('Member Ingredient ID:', ingredient.member_ingred_id);
                    console.log('Quantity:', ingredient.quantity);
                });
            } else {
                console.log('No recipe found.');
            }
        } else if (result.code === 404) {
            alert('Please recheck your ID or password.');
        } else if (result.code === 401) {
            alert('Please log in first')
        }

    })
    .catch((error) => {
        console.error(error);
    });
    



    // const recipe_name = [];
    // const ingredients = [];
    const description = [
        "다진소고기는 키친타월에 핏물을 빼줍니다.",
        "다진 돼지고기 역시 키친타월에 핏물을 빼주세요.",
        "파는 곱게 다지세요.",
        "양념장을 만들고 파를 섞어주세요.",
        "고기는 서로 잘 섞어주세요.",
        "섞은 고기에 양념장을 넣고 치댑니다.",
        "(치대는것은 골고루 섞어서 반죽하듯이 하는것을 뜻해요-간이 잘배고 고기도 맛있어져요.)",
        "고기는 먹기좋은 크기로 너무 두껍지 않게 만들어주세요. 가운데를 약간 옴폭파면 구울때 좋아요.",
        "기름을 두르고 구우실때 센불로 하지마시고 중약불로 노릇하게 구워주세요.",
        "다 구워지면 분량의 유장을 조금씩 위에 덧발라 약간 센불에서 윤기나게 구워주세요."
    ];
    


    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
        console.log('Accordion')
    };

    const toggleHeart = () => {
        setIsHeartFull(!isHeartFull);
        setHeartCount(isHeartFull ? heartCount - 1 : heartCount + 1);
    };


    return (
        <div className='Recipe'>
            <div className='title'>
                <div className='page_name'>
                    <h1>Recipe</h1>
                </div>
                <div className='dish_name'>
                    <h1>떡갈비</h1>
                </div>
            </div>

            <div className="image-container">
                <div className='food_img'>
                    <img className='food_img' src={`${process.env.PUBLIC_URL}/tteokgalbi.png`} alt="떡갈비" />
                </div>
                
                <div className="dish_detail">
                    <div className='button_container'>
                        
                    <div className='recipe_name'>
                            <h2>떡갈비</h2>
                    </div>
                            <button className='share_btn' onClick={toggleAccordion}>
                                <img src={`${process.env.PUBLIC_URL}/share.png`} alt="공유" style={{ width: '30px', height: '30px' }} />
                            </button>
                            {isAccordionOpen && (
                                <div className="accordion-content">
                                    <p>공유하기</p>
                                </div>
                            )}
                            <button className='heart_btn' onClick={toggleHeart}>
                                <img src={`${process.env.PUBLIC_URL}/${isHeartFull ? 'heart_full' : 'heart_empty'}.png`} alt="하트" style={{ width: '30px', height: '30px' }} />
                                <span className="heart-count">{heartCount}</span>
                            </button>
                        
                        
                    </div>
                    


                    <div className='ingredients'>
                        <p>재료</p>
                    </div>

                    <div className='recipe-description'>
                        <h3 >레시피 설명</h3>
                        <ul>
                            {description.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
}


export default Recipe;