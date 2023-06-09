import React, { useEffect, useRef, useState } from 'react';
import './Nengjanggo.css'
import { FaAngleDown } from "react-icons/fa";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import IngredientBox from '../components/IngredientBox';
import Card from '../components/Card';
import Webcam from 'react-webcam';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ItemList from '../components/ItemList';
// import CartList from '../components/CartList';

function Nengjanggo() {
        useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);
    // const [ingredModal, setIngredModal] = useState(false);
    // const [checkedList, setCheckedList] = useState([]);
    // const handleCheck = (e) => {
    //     const { value, checked } = e.target
    //     if (checked) {
    //         setCheckedList(pre => [...pre, value])
    //     }
    //     else {
    //         setCheckedList(pre => {
    //             return [...pre.filter(item => item !== value)]
    //         })
    //     }
    // }
    const [recipeList, setRecipeList] = useState([]);
    const [fridgeList, setFridgeList] = useState([]);
    const [itemlist, setItemList] = useState([]);
    const navigate = useNavigate();
    const [camModal, setCamModal] = useState(false);
    const [itemModal, setItemModal] = useState(false);

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
            })
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

        const getRecipe = async () => {
            const { data } = await axios.get("https://nengcipe-server.store/api/recipes/all", {
                headers: {
                    Authorization: sessionStorage.getItem('jwt')
                }
            })
            console.log(data.result);
            return data.result;
        }
        getRecipe().then(result => setRecipeList(result));
    }, [])

    return (
        <div className='Nengjanggo'>
            <div className='page_name_container'>
                <div className='page_name'>
                    <img className='nengjanggo_logo' alt='이미지' src='../assets/nengcipe_logo_white.png' />
                </div>
                <div className='menu_container'>
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
                    
                </div>
            </div>
            <div className='fridge'>
                <h3 className='nengjanggo_title'><CgSmartHomeRefrigerator /> 냉장고</h3>
                <div className='fridge_container'>
                    <div className='fridge_box'>
                        {fridgeList.map((item, index) => (
                            <IngredientBox icon={item.category.categoryName} id={item.id} name={item.ingredName} amount={item.quantity} date={"-7"} color={"green"} />
                        ))}
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
                                <button className='btn_submit' onClick={submit}>다음</button>
                                <button className='btn_close' onClick={() => setCamModal(false)} >취소</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={itemModal ? 'modal' : 'modal_hidden'}>
                    <div className='modal_overlay'></div>
                    <div className='item_modal_content'>
                        <h1 className='item_modal_title'>재료 추가</h1>
                        <button className='btn_additemlist' onClick={onCreate}>+</button>
                        <div className='item_modal_list'>
                            {itemlist.map((item, index) => (
                                <ItemList key={item.ingredName} name={item.ingredName} count={item.quantity} onRemove={onRemove}
                                    onUpdateName={(value) => onUpdateItem(index, 'ingredName', value)}
                                    onUpdateCount={(value) => onUpdateItem(index, 'quantity', value)}
                                    onUpdateCategory={(value) => onUpdateItem(index, 'categoryName', value)} />
                            ))}
                        </div>
                        <button className='btn_addItemtoFridge' onClick={addIngred}>추가</button>
                        <button className='btn_addItemclose' onClick={closeItemModal}>취소</button>
                    </div>
                </div>
            </div>
            <div className='search_recipe'>
                <h3 className='nengjanggo_title'><BsSearch /> 내 재료로 할 수 있는 레시피 </h3>
                {/* <div className='select_ingredients'>
                    재료 선택 :
                    <button className='btn_addfood' onClick={() => setIngredModal(true)}>+</button>
                    <div className={ingredModal ? 'modal' : 'modal_hidden'}>
                        <div className='modal_overlay'></div>
                        <div className='ingred_modal_content'>
                            <h1 className='ingred_modal_title'>재료 선택</h1>
                            <div className='ingred_modal_list_container'>
                                <div className='ingred_modal_list'>
                                    {fridgeList.map((item, index) => (
                                        <CartList name={item.ingredName} count={item.quantity} handleCheck={handleCheck} />
                                    ))}
                                </div>
                                <div className='ingred_selected_list_container'>
                                    <p>선택된 재료</p>
                                    <div className='ingred_selected_list'>
                                        {checkedList.map((item, index) => (
                                            <div className='selected_item' key={index}>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className='btn_close' onClick={() => setIngredModal(false)}>닫기</button>
                        </div>
                    </div>
                </div> */}
                <div className='recipe_list'>
                    {recipeList.map((item, index) => (
                        <div className='recipelist_container' onClick={() => navigate(`/recipe/${item.recipeId}`)}>
                            <Card img={item.imgUrl} title={item.recipeName}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Nengjanggo;
