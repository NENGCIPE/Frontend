import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <div className='home_section1'>
                    <div className='home_intro'>
                        <div className='nengcipe_info'>
                            <h1>Find</h1>
                            <h1>Food recipe</h1>
                            <h1>in refrigerator</h1>
                            <button className='btn_nengcipe'>냉시피 시작하기</button>
                        </div>
                    </div>
                </div>
                <div className='home_section2'>
                    <div className='home_section2_img'>
                        <img className='home_image' alt='이미지' src='../assets/home_image1.jpg' />
                    </div>
                    <div className='home_section2_intro'>
                        <p className='home_section_txt'>냉장고에 재료는 많은데<br /> 무슨 음식을 할 수 있을까?</p>
                    </div>
                </div>
                <div className='home_section3'>
                    <div className='home_section3_intro'>
                        <p className='home_section_txt'>냉장고에 재료는 많은데<br /> 무슨 음식을 할 수 있을까?</p>
                    </div>
                </div>
                <div className='home_section4'>
                    <div className='home_section4_intro'>
                        <p className='home_section_txt'>RECIPES</p>
                    </div>
                    <div className='home_section4_img'>
                        <img className='recipe_image' alt='이미지' src='../assets/recipe_image1.jpg' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe_image2.jpg' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe_image3.jpg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;