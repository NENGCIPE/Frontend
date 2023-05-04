import React, { useState } from 'react';
import './Nengjanggo.css'
import { FaAngleDown } from "react-icons/fa";
import { BsWind } from "react-icons/bs";
import { GiIceCube } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import IngredientBox from '../components/IngredientBox';
import Card from '../components/Card';
import Webcam from 'react-webcam';

function Nengjanggo() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className='Nengjanggo'>
            <div className='page_name'>
                <h1>NENG_JANGGO</h1>
            </div>
            <div className='expiry_menu'>
                <div className="imminent_container">
                    <input id="dropdown1" type="checkbox" />
                    <label className="dropdownLabel1" for="dropdown1">
                        <div>소비기한 임박 (3)</div>
                        <FaAngleDown className="caretIcon" />
                    </label>
                    <div className="content">
                        <ul>
                            <li>우유 500ml (D-1) / 냉장실</li>
                            <li>소고기 300g (D-1) / 냉장실</li>
                            <li>계란 3알 (D-2) / 냉장실</li>
                        </ul>
                    </div>
                </div>
                <div className="expire_container">
                    <input id="dropdown2" type="checkbox" />
                    <label className="dropdownLabel2" for="dropdown2">
                        <div>소비기한 만료 (2)</div>
                        <FaAngleDown className="caretIcon" />
                    </label>
                    <div className="content">
                        <ul>
                            <li>요플레 / 냉장실</li>
                            <li>닭가슴살 / 냉동실</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='fridge'>
                <h3><BsWind /> 냉장실</h3>
                <div className='fridge_container'>
                    <div className='fridge_box'>
                    <IngredientBox icon={'yogurt.png'} name={"요플레"} amount={"1개"} date={"+3"} color={"red"} />
                        <IngredientBox icon={'milk.png'} name={"우유"} amount={"500ml"} date={"-1"} color={"red"} />
                        <IngredientBox icon={'beef.png'} name={"소고기"} amount={"300g"} date={"-1"} color={"red"} />
                        <IngredientBox icon={'egg.png'} name={"계란"} amount={"3알"} date={"-2"} color={"red"} />
                        <IngredientBox icon={'carrot.png'} name={"당근"} amount={"2개"} date={"-3"} color={"orange"} />
                        <IngredientBox icon={'cheese.png'} name={"치즈"} amount={"500ml"} date={"-4"} color={"orange"} />
                        <IngredientBox icon={'lettuce.png'} name={"양배추"} amount={"1개"} date={"-5"} color={"green"} />
                        <IngredientBox icon={'ingredient.png'} name={"애호박"} amount={"3개"} date={"-7"} color={"green"} />
                        <IngredientBox icon={'pineapple.png'} name={"파인애플"} amount={"500ml"} date={"-7"} color={"green"} />
                    </div>
                </div>
            </div>
            <div className='freezer'>
                <h3><GiIceCube /> 냉동실</h3>
                <div className='freezer_container'>
                    <div className='fridge_box'>
                    <IngredientBox icon={'beef.png'} name={"닭가슴살"} amount={"2개"} date={"+7"} color={"red"} />
                    <IngredientBox icon={'bread.png'} name={"식빵"} amount={"4장"} date={"-2"} color={"red"} />
                    <IngredientBox icon={'dumpling.png'} name={"만두"} amount={"8개"} date={"-3"} color={"orange"} />
                    <IngredientBox icon={'ingredient.png'} name={"소떡소떡"} amount={"2개"} date={"-5"} color={"green"} /> 
                    <IngredientBox icon={'ingredient.png'} name={"김치볶음밥"} amount={"2봉지"} date={"-7"} color={"green"} />
                    <IngredientBox icon={'ice-cream.png'} name={"아이스크림"} amount={"3개"} date={"-100"} color={"green"} />   
                    </div>
                </div>
            </div>
            <div className='add_item'>
                <button className='btn_addItem' onClick={() => setModalVisible(true)}>재료 추가</button>
                <div className= {modalVisible ? 'modal' : 'modal_hidden'}>
                    <div className='modal_overlay'></div>
                    <div className='modal_content'>
                        <h1 className='webcam_info'>영수증이 화면에 잘 보이게</h1>
                        <h1 className='webcam_info'>촬영해주세요</h1>
                        <Webcam className='webcam'/>
                        <button className='btn_capture'>사진 촬영</button>
                        <button className='btn_close' onClick={() => setModalVisible(false)} >닫기</button>
                    </div>
                </div>
            </div>
            <div className='search_recipe'>
                <h3><BsSearch /> 레시피 검색</h3>
                <div className='select_ingredients'>
                    선택된 재료 :
                    <button className='btn_addfood'>+</button>
                </div>
                <div className='recipe_list'>
                    <div className='recipe_container'>
                        <Card title={"떡갈비"} scrap={"13"} />
                        <div className='recipe_descript'>
                            <div className='recipe_title'>재료</div>
                            <div className='recipe_ingredients'>
                                소고기 돼지고기 양파 대파 당근 부추 다진마늘 계란
                            </div>
                        </div>
                    </div>
                    <div className='recipe_container'>
                        <Card title={"떡갈비"} scrap={"13"} />
                        <div className='recipe_descript'>
                            <div className='recipe_title'>재료</div>
                            <div className='recipe_ingredients'>
                                소고기 돼지고기 양파 대파 당근 부추 다진마늘 계란
                            </div>
                        </div>
                    </div>
                    <div className='recipe_container'>
                        <Card title={"떡갈비"} scrap={"13"} />
                        <div className='recipe_descript'>
                            <div className='recipe_title'>재료</div>
                            <div className='recipe_ingredients'>
                                소고기 돼지고기 양파 대파 당근 부추 다진마늘 계란
                            </div>
                        </div>
                    </div>
                    <div className='recipe_container'>
                        <Card title={"떡갈비"} scrap={"13"} />
                        <div className='recipe_descript'>
                            <div className='recipe_title'>재료</div>
                            <div className='recipe_ingredients'>
                                소고기 돼지고기 양파 대파 당근 부추 다진마늘 계란
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Nengjanggo;