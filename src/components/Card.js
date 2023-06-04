import React from 'react';
import './Card.css';
import { FiHeart } from "react-icons/fi";

function Card({img, title, scrap}) {
    return (
        <div className='card_container'>
            <div>
                <img className='card_img' src={img} alt='이미지'/>
            </div>
            <div className='card_info'>
                <div className='card_title'>{title}</div>
                <div className='scrap_icon'><FiHeart/></div>
                <div className='card_count'>{scrap}</div>
            </div>
        </div>
    );
}

export default Card;