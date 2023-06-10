import React, { useEffect, useState } from 'react';
import './Scrap.css'
import Card from '../components/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Scrap() {
    const navigate = useNavigate();
    const [scrapList, setScrapList] = useState([]);

    useEffect(() => {
        const getScrap = async () => {
            const { data } = await axios.get("https://nengcipe-server.store/api/recipes/scrapList", {
                headers: {
                    Authorization: sessionStorage.getItem('jwt')
                }
            })
            return data.result;
        }
        getScrap().then(result => setScrapList(result));
    }, [])

    return (
        <div className='Scrap'>
            <div className='Scrap_page_name'>
                {/* <h1 className='page_name_1'>Remember ME :D</h1><br /> */}
                <img className='rememberme' alt='이미지' src='../assets/rememberme.png' />
                <div className="title_p">스크랩한 레시피를 잊지마세요!</div>
                <div className='scrap_title_box'>SCRAP!</div>
            </div>
            
            <div className='scrap_list'>
                {scrapList.map((item, index) => (
                    <div className='scrap_container' onClick={() => navigate(`/recipe/${item.recipe.id}`)}>
                        <Card img={item.recipe.imgUrl} title={item.recipe.recipeName} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Scrap;
