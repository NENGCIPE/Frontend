import React, { useEffect, useRef, useState } from 'react';
import './Nengjanggo.css'
import { FaAngleDown } from "react-icons/fa";
import { BsWind } from "react-icons/bs";
import { GiIceCube } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import IngredientBox from '../components/IngredientBox';
import Card from '../components/Card';
import Webcam from 'react-webcam';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ItemList from '../components/ItemList';
import CartList from '../components/CartList';

function Nengjanggo() {
    const [checkedList, setCheckedList] = useState([]);
    const handleCheck = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setCheckedList(pre => [...pre, value])
        }
        else {
            setCheckedList(pre => {
                return [...pre.filter(item => item !== value)]
            })
        }
    }


    const [fridgeList, setFridgeList] = useState([]);
    const [itemlist, setItemList] = useState([]);
    const navigate = useNavigate();
    const [camModal, setCamModal] = useState(false);
    const [itemModal, setItemModal] = useState(false);
    const [ingredModal, setIngredModal] = useState(false);
    const [image, setImage] = useState("");
    const webcamRef = useRef(null);
    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
    }
    const base64toFile = (base_data, filename) => {
        var arr = base_data.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    const submit = async () => {
        const formData = new FormData();
        const file = base64toFile(image, 'image_file.png');
        formData.append("uploadFile", file);
        await axios.post("https://nengcipe-server.store/api/clovaOCR", formData, {
            headers: {
                Authorization: sessionStorage.getItem('jwt')
            }
        }).then(data => {
            (data.data.result).forEach((item) => {
                itemlist.push({ ingredName: item[0], quantity: parseInt(item[1]) })
            })
        })
        setItemModal(true)
    }

    const closeItemModal = () => {
        setItemModal(false)
        setItemList([])
    }

    const onRemove = (removeName) => {
        setItemList(itemlist.filter((item) => item.ingredName !== removeName));
    };

    const onCreate = () => {
        const newItem = {
            ingredName: `재료 ${itemlist.length + 1}`, quantity: 1
        }
        setItemList([...itemlist, newItem]);
    }

    const onUpdateItem = (index, field, value) => {
        const updatedList = [...itemlist];
        updatedList[index][field] = value;
        setItemList(updatedList);
    };

    const addIngred = () => {
        itemlist.forEach((item) => {
            axios.post("https://nengcipe-server.store/api/users/fridge", item, {
                headers: {
                    Authorization: sessionStorage.getItem('jwt')
                }
            }).then((data) => {
                console.log(data)
            });
        });
        alert("냉장고에 재료추가가 완료되었습니다.");
        setItemModal(false);
        setCamModal(false);
        setItemList([]);
    };

    useEffect(() => {
        const getIngred = async () => {
            const { data } = await axios.get("https://nengcipe-server.store/api/users/fridge", {
                headers: {
                    Authorization: sessionStorage.getItem('jwt')
                }
            })
            return data.result;
        }
        getIngred().then(result => setFridgeList(result));
    })

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
                        {fridgeList.map((item, index) => (
                            <IngredientBox icon={`../assets/icon_diary.png`} id={item.id} name={item.ingredName} amount={item.quantity} date={"-7"} color={"green"} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='freezer'>
                <h3><GiIceCube /> 냉동실</h3>
                <div className='freezer_container'>
                    <div className='fridge_box'>
                        <IngredientBox icon={`../assets/icon_meat.png`} name={"닭가슴살"} amount={"2개"} date={"+7"} color={"red"} />
                        <IngredientBox icon={`../assets/icon_frozen.png`} name={"만두"} amount={"8개"} date={"-3"} color={"orange"} />
                        <IngredientBox icon={`../assets/icon_frozen.png`} name={"소떡소떡"} amount={"2개"} date={"-5"} color={"green"} />
                        <IngredientBox icon={`../assets/icon_frozen.png`} name={"김치볶음밥"} amount={"2봉지"} date={"-7"} color={"green"} />
                        <IngredientBox icon={`../assets/icon_diary.png`} name={"아이스크림"} amount={"3개"} date={"-100"} color={"green"} />
                    </div>
                </div>
            </div>
            <div className='add_item'>
                <button className='btn_addItem' onClick={() => setCamModal(true)}>재료 추가</button>
                <div className={camModal ? 'modal' : 'modal_hidden'}>
                    <div className='modal_overlay'></div>
                    <div className='modal_content'>
                        <h1 className='webcam_info'>영수증이 화면에 잘 보이게</h1>
                        <h1 className='webcam_info'>촬영해주세요</h1>
                        {image === '' ? <Webcam
                            audio={false}
                            width={600}
                            height={600}
                            ref={webcamRef}
                            screenshotFormat='image/jpeg'
                            imageSmoothing={true} /> : <img className='img_preview' src={image} alt='screenshot' />}
                        <div>
                            {image !== '' ?
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setImage('')
                                }}
                                    className="btn_capture">
                                    다시 찍기</button> :
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    capture();
                                }}
                                    className="btn_capture">캡처하기</button>
                            }
                            <div className='section_btn'>
                                <button className='btn_submit' onClick={submit}>추가</button>
                                <button className='btn_close' onClick={() => setCamModal(false)} >취소</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={itemModal ? 'modal' : 'modal_hidden'}>
                    <div className='modal_overlay'></div>
                    <div className='item_modal_content'>
                        <h1 className='item_modal_title'>재료</h1>
                        <button onClick={onCreate}>리스트 추가</button>
                        <div className='item_modal_list'>
                            {itemlist.map((item, index) => (
                                <ItemList key={item.ingredName} name={item.ingredName} count={item.quantity} onRemove={onRemove}
                                    onUpdateName={(value) => onUpdateItem(index, 'ingredName', value)}
                                    onUpdateCount={(value) => onUpdateItem(index, 'quantity', value)}
                                    onUpdateCategory={(value) => onUpdateItem(index, 'categoryName', value)} />
                            ))}
                        </div>
                        <button onClick={addIngred}>냉장고에 추가</button>
                        <button onClick={closeItemModal}>닫기</button>
                    </div>
                </div>
            </div>
            <div className='search_recipe'>
                <h3><BsSearch /> 레시피 검색</h3>
                <div className='select_ingredients'>
                    재료 선택 :
                    <button className='btn_addfood' onClick={() => setIngredModal(true)}>+</button>
                    <div className={ingredModal ? 'modal' : 'modal_hidden'}>
                        <div className='modal_overlay'></div>
                        <div className='ingred_modal_content'>
                            <h1 className='ingred_modal_title'>재료 선택</h1>
                            <div className='ingred_modal_list'>
                                {fridgeList.map((item, index) => (
                                    <CartList name={item.ingredName} count={item.quantity} handleCheck={handleCheck} />
                                ))}
                            </div>
                            <div>
                                <p>선택된 재료: </p>
                                {checkedList.map((item, index) => (
                                    <div key={index}>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => setIngredModal(false)}>닫기</button>
                        </div>
                    </div>
                </div>
                <div className='recipe_list'>
                    <div className='recipe_container' onClick={() => navigate("/recipe")}>
                        <Card title={"떡갈비"} scrap={"13"} />
                        <div className='recipe_descript'>
                            <div className='recipe_title'>재료</div>
                            <div className='recipe_ingredients'>
                                소고기 돼지고기 양파 대파 당근 부추 다진마늘 계란
                            </div>
                        </div>
                    </div>
                    <div className='recipe_container' onClick={() => navigate("/recipe")}>
                        <Card title={"떡갈비"} scrap={"13"} />
                        <div className='recipe_descript'>
                            <div className='recipe_title'>재료</div>
                            <div className='recipe_ingredients'>
                                소고기 돼지고기 양파 대파 당근 부추 다진마늘 계란
                            </div>
                        </div>
                    </div>
                    <div className='recipe_container' onClick={() => navigate("/recipe")}>
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