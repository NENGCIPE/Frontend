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
            <div className='page_name'>
                <h1>Scrap</h1>
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
