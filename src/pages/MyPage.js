import React from 'react';
import './MyPage.css';
import { useNavigate } from "react-router-dom";

function MyPage() {
    const navigate = useNavigate();
    return (
        <div className='MYPAGE'>
            <div className='MYPAGE_title'><p className='mypage_title'>MY PAGE</p>
                <div className='MYPAGE_container'>
                    <div className='info_container_1'>
                        <div className='MYPAGE_section4_img'>
                            <img className='recipe_image' alt='이미지' src='../assets/recipe1.png' />
                        </div>
                        <div className='info_container_2'>
                            
                            <div className='name'><p>name :</p>
                                <div className='User_name'><p>장승우</p></div>
                            </div>
                            <div className='Email'><p>Email :</p>
                                <div className='User_Email'><p>USER@example.com</p></div>
                            </div>
                            <button className='navigate_editMyinfo'>
                                <div className='navigate_editMyinfo_link' onClick={() => navigate("/EditMyInfo")}>Edit My info</div>
                            </button>
                            
                        </div>
                    </div>
                </div>
                
            <div className='MYPAGE_section4'>
                    <div className='MYPAGE_section4_intro'>
                        <p className='MYPAGE_section_txt'>MY SCRAP
                            <p className='MYPAGE_section_txt_sub'>나의 스크랩 잊지 마세요! :D</p>
                        </p>
                    </div>
                    <div className='MYPAGE_section4_img'>
                        <img className='recipe_image' alt='이미지' src='../assets/recipe1.png' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe2.png' />
                        <img className='recipe_image' alt='이미지' src='../assets/recipe3.png' />
                    </div>
                    <div className='MYPAGE_section4_intro_below'>
                       
                    </div>
                    <div className='MYPAGE_section4_intro_btn'>
                        <button className='MYPAGE_section4_btn_nengcipe'>
                            <div className='recipe_container' onClick={() => navigate("/Scrap")}>스크랩으로 이동하기</div>
                        </button>
                    </div>
                </div>       
            </div>
        </div>
    );
}



export default MyPage;