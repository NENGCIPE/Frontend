import React, { useEffect, useState } from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';
// import './animation.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    useEffect(()=> {
        AOS.init({duration: 1200
        });
    }, []);

    return (
        <div className='home'>
            <div className='home_container'>
            
                <div className='home_section1'>
                    <div className='video_background'>
                        <video muted autoPlay loop className='background_video'>
                        <source src="../assets/back_main.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className='home_intro' data-aos="fade-right">
                        <div className='nengcipe_info'>
                            <div className='nengcipe_info_script'>
                                {/* <h1>Find<br />Recipe<br />In refrigerator</h1> */}
                                <img className='findyourrecipe_logo' alt='이미지' src='../assets/findyourrecipe.png' data-aos="fade-right" data-aos-delay="200"/>
                                <p className='nengcipe_info_context' data-aos="fade-right" data-aos-delay="200">냉시피로 여러분의 냉장고를 건강하게 관리해보세요</p>
                                {/* <img className='home_logo' alt='이미지' src='../assets/nengcipe_logo_black.png' data-aos="fade-right" data-aos-delay="200"/>   */}
                            </div>

                            <div className='nengcipe_info_btn' >
                                <button onClick={chkAuth} className='btn_nengcipe_1'  data-aos="fade-up" data-aos-delay="600"> nengcipe start now</button>
                                <button onClick={chkAuth_2} className='btn_nengcipe_2'  data-aos="fade-up" data-aos-delay="600">nengcipe user guide</button>
                                {/* <img className='arrow' alt='이미지' src='../arrow.png' style={{ width: '25px', height: '25px' }} /> */}
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className='home_section2' data-aos="fade-right">
                    {/* <div className={`home_section2_intro ${inView1 ? 'animate1' : ''}`} ref={ref1}> */}
                    <div className="home_section2_intro">
                        <div className='home_section2_intro_context' data-aos="fade-left">
                            <p className='home_section_2_txt'>혼자사는 자취인들에게<br /> 잊혀지기 쉬운 냉장고 관리!</p>
                        </div>
                    </div>
                </div>
                <div className='home_section3' data-aos="fade-left">
                    <div className="home_section3_intro">
                        <div className='home_section3_intro_context'>
                            {/* <p className={`home_section3_text ${inView2 ? 'animate2' : ''}`} ref={ref2}> */}
                                <p className='home_section3_text' data-aos="fade-right">
                                무슨 요리를 할지 생각하기엔<br /> 너무나 바쁜 현대인을 위한 서비스</p>
                        </div>
                    </div>
                </div>
                <div className='home_section4'>
                    <div className='home_section4_intro'>
                        {/* <p className='home_section_txt'>RECIPES</p> */}
                        <img className='home_logo_2' alt='이미지' src='../assets/nengcipe_logo.png' />
                    </div>
                    <div className='home_section4_img'>
                        <img className='recipe_image' alt='이미지' src='../assets/recipe1.png' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe2.png' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe3.png' />
                    </div>
                    <div className='home_section4_intro_below'>
                        <p className='home_section_txt'data-aos="fade-up">지금부터 냉시피와 함께 해보세요!</p>
                    </div>
                    <div className='home_section4_intro_btn'>
                        {/* <button className='home_section4_btn_nengcipe' onClick={chkAuth}>냉시피 시작하기</button> */}
                        <button onClick={chkAuth} className='btn_nengcipe_1' data-aos="fade-up" > nengcipe start now</button>
                        <button onClick={chkAuth_2} className='btn_nengcipe_2' data-aos="fade-up">nengcipe user guide</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;