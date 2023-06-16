import React from 'react';
import './Card.css';

function Card({img, title}) {
    return (
        <div className='card_container'>
            <div>
                <img className='card_img' src={img} alt='이미지'/>
            </div>
            <div className='card_info'>
                <div className='card_title'>{title}</div>
            </div>
        </div>
    );
}

export default Card;