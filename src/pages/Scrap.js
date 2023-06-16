import React, { useEffect, useState } from 'react';
import './Scrap.css'
import Card from '../components/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    useEffect(()=> {
        AOS.init({duration: 1000
        });
    }, []);
    return (
        <div className='Scrap'>
            {/* <div className='background_SCRAP'></div> */}
            <div className='Scrap_page_name' data-aos="fade-up">
                <p1 className='page_name_1'  >스크랩한 레시피를 잊지으신건 아니시죠?</p1><br />
                {/* <img className='rememberme' alt='이미지' src='../assets/rememberme.png' /> */}
                {/* <div className="title_p">스크랩한 레시피를 잊지마세요!</div> */}
                {/* <div className='scrap_title_box'>SCRAP!</div> */}
            </div>
            <div className='background_SCRAP'></div>
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
