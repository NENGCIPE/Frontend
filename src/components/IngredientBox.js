import React from 'react';
import styled from 'styled-components';
import './IngredientBox.css'
import axios from 'axios';

const Container = styled.div`
    width: 100px;
    height: 150px;
    border: 3px solid ${props => props.color};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    text-align: center;
    box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.2); 
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

function IngredientBox({ icon, id, name, amount, date, color }) {
    const removeIngred = (id) => {
        axios.delete(`https://nengcipe-server.store/api/users/fridge?id=${id}`, { headers: {Authorization: sessionStorage.getItem('jwt')} })
            .then(response => {
                console.log(response)
            })
    }

    return (
        <Container color={color}>
            <div className='ingredient_remove'>
                <img onClick={() => removeIngred(id)} className='ingredient_icon_remove' src={'../assets/icon_remove.png'} alt='삭제'/>
            </div>
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