import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserGuide.css';

function UserGuide() {
    const navigate = useNavigate();
    const chkAuth = () => {
        
        navigate('/');
    
}
    const [showContainer, setShowContainer] = useState(1);

    const handleButton1Click = () => {
        if (showContainer < 3) { setShowContainer(showContainer + 1); }
    };
    const handleButton2Click = () => {
        if (showContainer > 1) { setShowContainer(showContainer - 1); }
    };
    // const handleButton3Click = () => {
    //     setShowContainer(3);
    // };

    return (
        <div className='container_guide'>
            <div className='back'>
                <div className='title_logo_Userguide'>
                    {/* <h1 className='title_Userguide'>User guide</h1> */}
                    <img className='guide_logo' alt='이미지' src='../assets/nengcipe_logo.png' />  
                    <p className='sub_title_Userguide'>아래 버튼을 눌러 유저가이드를 살펴보세요!</p>
                    {/* <a href="https://kr.freepik.com/free-photo/frying-pan-with-vegetables_10095814.htm#query=%EC%9A%94%EB%A6%AC&position=9&from_view=search&track=sph">작가 Racool_studio</a> 출처 Freepik */}
                    <div className='btn_container'>
                        <button className="btn"onClick={handleButton2Click}> PREV </button>
                        <button className="btn" onClick={handleButton1Click}> NEXT </button>
                    </div>
                    
                    <p className='sub_title_Userguide'><button onClick={chkAuth} className='btn_HOME' >Back to HOME</button></p>
                            
                </div>
                
                <div className='guide_container'>
                    <div className="user-guide">
                        <div className={`container ${showContainer ? `transformed${showContainer}` : ''}`}>
                            <div className="inner">
                                <img alt="language" src="../assets/Userguide_1.png" style={{ width: '800px', height: 'auto' }} />
                            </div>
                            <div className="inner">
                                <img alt="language" src="../assets/Userguide_2.png" style={{ width: '800px', height: 'auto' }} />
                            </div>
                            <div className="inner">
                                <img alt="language" src="../assets/Userguide_3.png" style={{ width: '800px', height: 'auto' }} />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default UserGuide;