import React, { useEffect, useState } from 'react';

import './UserGuide.css';

function UserGuide() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    const [showContainer, setShowContainer] = useState(1);

    const handleButton1Click = () => {
        // 장수에 맞게 수정 3장인경우 3
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
                {/* <div className='title_logo_Userguide'>
                    
                    <img className='guide_logo' alt='이미지' src='../assets/nengcipe_logo.png' />  
                    <p className='sub_title_Userguide'>아래 버튼을 눌러 유저가이드를 살펴보세요!</p>
                    
                    <div className='btn_container'>
                        <button className="btn"onClick={handleButton2Click}> PREV </button>
                        <button className="btn" onClick={handleButton1Click}> NEXT </button>
                    </div>
                    
                    <p className='sub_title_Userguide'><button onClick={chkAuth} className='btn_HOME' >Back to HOME</button></p>
                            
                </div> */}
                
                <div className='guide_container'>


                    <button className="btn_P" onClick={handleButton2Click}>
                        <img alt='이미지' src='../assets/arrow_left.png' style={{ width: '50px', height: '80px' }} />
                    </button>
                    
                    <div className="user-guide">
                        <div className={`container ${showContainer ? `transformed${showContainer}` : ''}`}>
                            {/* 장수에 맞게 추가 */}
                            <div className="inner">
                                <img alt="language" src="../assets/Userguide_1.png" style={{ width: '1300px', height: 'auto' }} />
                            </div>
                            <div className="inner">
                                <img alt="language" src="../assets/Userguide_2.png" style={{ width: '1300px', height: 'auto' }} />
                            </div>
                            <div className="inner">
                                <img alt="language" src="../assets/Userguide_3.png" style={{ width: '1300px', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                    <button className="btn_N" onClick={handleButton1Click}>
                        <img alt='이미지' src='../assets/arrow_right.png' style={{ width: '50px', height: '80px' }} />
                    </button>
                </div>


            </div>
        </div>
    );
}

export default UserGuide;