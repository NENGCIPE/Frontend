import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import './Recipe.css';


function Recipe() {
    const { id } = useParams();
    
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isHeartFull, setIsHeartFull] = useState(false);
    const [heartCount, setHeartCount] = useState(0);

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
                <div className="dish_detail">
                    <img src={`${process.env.PUBLIC_URL}/tteokgalbi.png`} alt="떡갈비" />
                    <h2>떡갈비</h2>
                    <div className="buttons">
                        <button onClick={toggleAccordion}>
                            <img src={`${process.env.PUBLIC_URL}/share.png`} alt="공유" />
                        </button>
                        {isAccordionOpen && (
                            <div className="accordion">
                                <img src={`${process.env.PUBLIC_URL}/link.png`} alt="링크" />
                                <img src={`${process.env.PUBLIC_URL}/kakao.png`} alt="카카오" />
                            </div>
                        )}
                        <button onClick={toggleHeart}>
                            <img src={`${process.env.PUBLIC_URL}/${ isHeartFull ? 'heart_full' : 'heart_empty'}.png`} alt="하트"/>
                            <span className="heart-count">{heartCount}</span>
                        </button>
                    </div>
                    <p>재료</p>
                    <h3>레시피 설명</h3>
                    <ul>
                    {description.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Recipe;