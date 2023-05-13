import React, { useEffect, useState } from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const chkAuth = () => {
        if (isLogin === true) {
            navigate('/nengjanggo')
        }
        else {
            alert("로그인이 필요한 기능입니다.");
            navigate('/login');
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('jwt') != null) {
            setIsLogin(true);
        }
        else {
            setIsLogin(false);
        }
    }, [])
    return (
        <div className='home'>
            <div className='home_container'>
                <div className='home_section1'>
                    <div className='home_intro'>
                        <div className='nengcipe_info'>
                            <div className='nengcipe_info_script'>
                                <h1>Find<br />Recipe<br />In refrigerator</h1>
                                <p className='nengcipe_info_context'>냉시피를 사용하여 다양한 음식 레시피를 찾아보세요</p>
                            </div>

                            <div className='nengcipe_info_btn'>
                                <button onClick={chkAuth} className='btn_nengcipe'>냉시피 시작하기</button>
                            </div>

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
                        <div className='home_section3_intro_context'>
                            <p className='home_section_txt'>내가 가진 재료들로<br />어떤 요리를 할 수 있는지<br /> 알려줄 수 있는 웹사이트 없을까?</p>
                        </div>
                    </div>
                </div>
                <div className='home_section4'>
                    <div className='home_section4_intro'>
                        <p className='home_section_txt'>RECIPES</p>
                    </div>
                    <div className='home_section4_img'>
                        <img className='recipe_image' alt='이미지' src='../assets/recipe1.png' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe2.png' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe3.png' />
                    </div>
                    <div className='home_section4_intro_below'>
                        <p className='home_section_txt'>냉시피로 지금 만들 수 있는 음식을 찾아보세요</p>
                    </div>
                    <div className='home_section4_intro_btn'>
                        <button className='home_section4_btn_nengcipe' onClick={chkAuth}>냉시피 시작하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;