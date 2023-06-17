import React from 'react';
import styled from 'styled-components';
import './IngredientBox.css'
import axios from 'axios';

const Container = styled.div`
    width: 100px;
    height: 150px;
    background-color: white;
    border: 3px solid ${props => props.color};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    text-align: center;
    box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.2); 
`;

const Datebox = styled.div`
    width: 50px;
    height: 20px;
    margin-top: 10px;
    background-color: ${props => props.color};
    border-radius: 10px;
    font-size: 15px;
    color: white;
`;

function IngredientBox({ icon, id, name, amount, date}) {
    const removeIngred = (id) => {
        axios.delete(`https://nengcipe-server.store/api/users/fridge?id=${id}`, { headers: {Authorization: sessionStorage.getItem('jwt')} })
            .then(response => {
                if(response.status === 200) {
                    // alert("냉장고 재료 삭제 성공")
                    window.location.reload();
                }
            })
    }
    const setDdate = (date) => {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var Exyear = parseInt(date.substring(0, 4));
        var Exmonth = parseInt(date.substring(5, 7));
        var Exday = parseInt(date.substring(8, 10));

        var stDate = new Date(year, month, day);
        var endDate = new Date(Exyear, Exmonth, Exday);
        const btMs = endDate.getTime() - stDate.getTime();
        var btDay = btMs / (1000 * 60 * 60 * 24);
        return(btDay)
    }
    const setColor = (date) => {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var Exyear = parseInt(date.substring(0, 4));
        var Exmonth = parseInt(date.substring(5, 7));
        var Exday = parseInt(date.substring(8, 10));

        var stDate = new Date(year, month, day);
        var endDate = new Date(Exyear, Exmonth, Exday);
        const btMs = endDate.getTime() - stDate.getTime();
        var btDay = btMs / (1000 * 60 * 60 * 24);

        if (btDay < 0) {
            return 'black';
        }
        else if (btDay < 2) {
            return 'rgb(255, 0, 0)';
        }
        else if (btDay < 4) {
            return 'orange';
        }
        else {
            return 'green';
        }

    }
    const setIcon = (icon) => {
        if (icon.startsWith("육류")) {
            return `../assets/icon_meat.png`
        }
        else if (icon.startsWith("채소류")) {
            return `../assets/icon_vegetable.png`
        }
        else if (icon.startsWith("해물류")) {
            return `../assets/icon_seafood.png`
        }
        else if (icon.startsWith("유제품")) {
            return `../assets/icon_diary.png`
        }
        else if (icon.startsWith("가공식품류")) {
            return `../assets/icon_processedfood.png`
        }
        else if (icon.startsWith("건어물류")) {
            return `../assets/icon_driedfish.png`
        }
        else if (icon.startsWith("과일류")) {
            return `../assets/icon_fruits.png`
        }
        else if (icon.startsWith("견과류")) {
            return `../assets/icon_nuts.png`
        }
        else if (icon.startsWith("곡류")) {
            return `../assets/icon_grain.png`
        }
        else {
            return `../assets/icon_ingredient.png`
        }
    }
    return (
        <Container color={setColor(date)}>
            <div className='ingredient_remove'>
                <img onClick={() => removeIngred(id)} className='ingredient_icon_remove' src={'../assets/icon_remove.png'} alt='삭제'/>
            </div>
            <div className='ingredient_icon_container'>
                <img className='ingredient_icon' src={setIcon(icon)} alt='아이콘' />
            </div>
            <div className='ingredient_info'>
                <div className='ingredient_name'>{name}</div>
                <div className='ingredient_amount'>{amount}</div>
            </div>
            <Datebox color={setColor(date)}>{setDdate(date) < 0 ? '만료' : `D-${setDdate(date)}`}</Datebox>
        </Container>
    );
}

export default IngredientBox;