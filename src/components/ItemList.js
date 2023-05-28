import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './ItemList.css'
import DatePicker from "react-datepicker"
import { ko } from 'date-fns/esm/locale';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function ItemList({name, count, onRemove, onUpdateName, onUpdateCount, onUpdateCategory}) {
    const itemLocation = ["냉장실", "냉동실"]
    const mainCategory = ["육류", "채소류", "해물류", "유제품", "가공식품류", "건어물류", "과일류", "견과류", "곡류", "기타"]
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [detailCategory, setDetailCategory] = useState('');
    const [title, setTitle] = useState(name);
    const [amount, setAmount] = useState(count);
    const [inputDate, setInputDate] = useState(new Date());
    const [expiryDate, setExpiryDate] = useState(new Date());

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleCategoryChange = (e) => {
        onUpdateCategory(`${category}/${detailCategory}`)
    };

    const handleTitleChange = (e) => {
        onUpdateName(title)
    }

    const handleAmount = (type) => {
        if (type === "plus") {
          setAmount(amount + 1);
          onUpdateCount(amount + 1);
        } else {
          if (amount === 1) return;
          setAmount(amount - 1);
          onUpdateCount(amount - 1);
        }
    };  

    return (
        <div className='item_list'>
            <div className='list_container'>
                <div className='input_container'>
                    <select className='select_location' value={location} onChange={handleLocationChange}>
                        <option value="" disabled hidden>위치</option>
                        {itemLocation.map((option) => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='input_container'>
                    <select className='select_category' value={category} onChange={(e) => setCategory(e.target.value)} onBlur={handleCategoryChange}>
                        <option value="" disabled hidden>대분류</option>
                        {mainCategory.map((option) => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='input_container'>
                    <input className='input_detail' placeholder='소분류 예) 우유' type="text" value={detailCategory} onChange={(e) => setDetailCategory(e.target.value)} onBlur={handleCategoryChange} />
                </div>
                <div className='input_container'>
                    <input className='input_title' placeholder='재료명' type="text" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={handleTitleChange} />
                </div>
                <div className='input_count'>
                    <AiOutlineMinusCircle className='btn_amount' onClick={() => { handleAmount("minus") }} />
                    <span className='item_amount'>{amount}</span>
                    <AiOutlinePlusCircle className='btn_amount' onClick={() => { handleAmount("plus") }} />
                </div>
                <div className='input_container'>
                    <span>보관날짜</span>
                    <DatePicker
                        className='input_date'
                        dateFormat="yyyy년 MM월 dd일"
                        selected={inputDate}
                        onChange={(date) => { setInputDate(date) }}
                        selectsStart
                        startDate={inputDate}
                        endDate={expiryDate}
                        locale={ko}
                    />
                </div>
                <div className='input_container'>
                    <span>소비기한</span>
                    <DatePicker
                        className='input_date'
                        dateFormat="yyyy년 MM월 dd일"
                        selected={expiryDate}
                        onChange={(date) => { setExpiryDate(date) }}
                        selectsEnd
                        endDate={expiryDate}
                        minDate={inputDate}
                        locale={ko}
                    />
                </div>
                <div className='input_container'>
                <img onClick={() => onRemove(name)} className='ingredient_icon_remove' src={'../assets/icon_remove.png'} alt='delete'/>
                </div>

            </div>
        </div>
    );
}

export default ItemList;