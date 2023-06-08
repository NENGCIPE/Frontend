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
    const chkAuth_2 = () => {
        
            navigate('/UserGuide');
        
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
                    <div className='video_background'>
                        <video muted autoPlay loop className='background_video'>
                        <source src="../assets/back_main.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className='home_intro'>
                        <div className='nengcipe_info'>
                            <div className='nengcipe_info_script'>
                                <h1>Find<br />Recipe<br />In refrigerator</h1>
                                <p className='nengcipe_info_context'>냉시피로 여러분의 냉장고를 건강하게 관리해보세요</p>
                            </div>

                            <div className='nengcipe_info_btn'>
                                <button onClick={chkAuth} className='btn_nengcipe_1' > nengcipe start now</button>
                                <button onClick={chkAuth_2} className='btn_nengcipe_2' >nengcipe user guide</button>
                                {/* <img className='arrow' alt='이미지' src='../arrow.png' style={{ width: '25px', height: '25px' }} /> */}
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className='home_section2'>
                    <div className='home_section2_intro'>
                        <div className='home_section2_intro_context'>
                            <p className='home_section_2_txt'>혼자사는 자취인들에게<br /> 잊혀지기 쉬운 냉장고 관리!</p>
                        </div>
                    </div>
                </div>
                <div className='home_section3'>
                    <div className='home_section3_intro'>
                        <div className='home_section3_intro_context'>
                            <p className='home_section_txt'>가진 재료들로 어떤 요리를 할지<br /> 생각하기에는 너무나 바쁜 현대인!</p>
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
                        <p className='home_section_txt'>지금부터 냉시피와 함께 해보세요!</p>
                    </div>
                    <div className='home_section4_intro_btn'>
                        {/* <button className='home_section4_btn_nengcipe' onClick={chkAuth}>냉시피 시작하기</button> */}
                        <button onClick={chkAuth} className='btn_nengcipe' > nengcipe start now</button>
                        <button onClick={chkAuth_2} className='btn_nengcipe_2' >nengcipe user guide</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
