import React from 'react';
import styled from 'styled-components';
import './IngredientBox.css'

const Container = styled.div`
    width: 100px;
    height: 140px;
    border: 3px solid ${props => props.color};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    text-align: center;     
`;

const Date = styled.div`
    width: 50px;
    height: 20px;
    margin-top: 10px;
    background-color: ${props => props.color};
    border-radius: 10px;
    font-size: 15px;
    color: white;
`;

function IngredientBox({ icon, name, amount, date, color }) {
    return (
        <Container color={color}>
            <div className='ingredient_icon_container'>
                <img className='ingredient_icon' src={icon} alt='아이콘' />
            </div>
            <div className='ingredient_info'>
                <div className='ingredient_name'>{name}</div>
                <div className='ingredient_amount'>{amount}</div>
            </div>
            <Date color={color}>D{date}</Date>
        </Container>
    );
}

export default IngredientBox;