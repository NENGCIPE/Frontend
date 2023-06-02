import React, { useState, useEffect } from 'react';
// import React, { useState} from 'react';
// import { useParams } from "react-router-dom";
import './Recipe.css';
import axios from 'axios';
//사진 api로 받아와야함
// ### Response

// ingredients (array of objects): 냉장고에 저장된 재료 목록

// - recipes_id (integer): 레시피 고유 ID
// - recipes_name (string): 레시피의 이름
// - member_ingred_id (integer) : 재료 id
// - quantity (integer): 재료의 수량
// - recipes_detail(string) : 레시피 설명

// **<Success>**
// json
// {
//  "ingredients": [{
//      "recipes_id": 1,
//      "recipes_name": "onion",
// 		"Recipe" :  [{"member_ingred_id" : 1, "quantity" : 1}
// 					 {"member_ingred_id" : 2, "quantity" : 5}],
// 		"recipes_detail" : "dddddddd varchar~"
// 	}]}


function Recipe() {
    //const apiEndpoint = 'https://nengcipe-server.store/api/recipes/recipe_id=';
    const apiEndpoint = 'https://7d628e24-c60b-47c4-b882-a6a67df36e39.mock.pstmn.io';



    const [recipes_id, setRecipes_id] = useState('');
    const [recipes_name, setRecipes_name] = useState('');
    const [recipes_detail, setRecipes_detail] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const json =
        {
            "ingredients": [{
                "recipes_id": 1,
                "recipes_name": "onion",
                "Recipe": [{ "member_ingred_id": 1, "quantity": 1 },
                { "member_ingred_id": 2, "quantity": 5 }],
                "recipes_detail": "dddddddd varchar~"
            }]
        }
    const recipe = json.ingredients[0];//여기는 추후에 수정해야함

    const headers = {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('jwt'),
    };

    const getRecipe = () => {

        axios
            .get(apiEndpoint, { headers })
            .then((respone) => {//respone로 바꿔야 함
                //const recipe = respone.ingredients[0];
                setRecipes_id(recipe.recipes_id);
                setRecipes_name(recipe.recipes_name);
                setRecipes_detail(recipe.recipes_detail);
                setIngredients(recipe.Recipe);

            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        getRecipe();
    });

    const [heartCount, setHeartCount] = useState(0);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isHeartFull, setIsHeartFull] = useState(false);





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
                    <h1>레시피 이름 : {recipes_name}</h1>
                </div>
            </div>

            <div className="image-container">
                <div className='food_img'>
                    <img className='food_img' src={`${process.env.PUBLIC_URL}/tteokgalbi.png`} alt="떡갈비" />
                </div>

                <div className="dish_detail">
                    <div className='button_container'>

                        <div className='recipe_name'>
                            <h2>레시피 이름 : {recipes_name}</h2><br /> 
                            <h2>레시피 id : {recipes_id}</h2>
                        </div>
                        <div>
                            <button className='share_btn' onClick={toggleAccordion}>
                                <img src={`${process.env.PUBLIC_URL}/share.png`} alt="공유" style={{ width: '30px', height: '30px' }} />
                            </button>


                            {isAccordionOpen && (
                                <div>
                                    <p>Share</p>
                                    {/* Additional content */}
                                </div>
                            )}

                        </div>


                        <button className='heart_btn' onClick={toggleHeart}>
                            <img src={`${process.env.PUBLIC_URL}/${isHeartFull ? 'heart_full' : 'heart_empty'}.png`} alt="하트" style={{ width: '30px', height: '30px' }} />
                            <span className="heart-count">{heartCount}</span>
                        </button>
                    </div>
                    <div className='ingredients'>
                        <p>재료</p>
                        <h>{ingredients.map((ingredient) => (
                            <span key={ingredient.member_ingred_id}>
                                member_ingred_id: {ingredient.member_ingred_id} quantity: {ingredient.quantity}<br />
                            </span>
                        ))}</h><br />
                </div>

                <div className='recipe-description'>
                    <h3 >레시피 설명</h3>
                    <h>
                        {recipes_detail}
                    </h>
                </div>

            </div>
        </div>
        </div >
    );
} export default Recipe;
