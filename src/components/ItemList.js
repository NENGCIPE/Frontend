import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './ItemList.css'
import DatePicker from "react-datepicker"
import { ko } from 'date-fns/esm/locale';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function ItemList({ name, count, onRemove, onUpdateName, onUpdateCount, onUpdateCategory, onUpdateDate }) {
    const mainCategory = ["육류", "채소류", "해물류", "유제품", "가공식품류", "건어물류", "과일류", "견과류", "곡류", "기타"]
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState(name);
    const [amount, setAmount] = useState(count);
    const [expiryDate, setExpiryDate] = useState(new Date());

    const handleDateChange = (date) => {
        setExpiryDate(date)
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const dateStr = `${year}-${month}-${day}`;
        onUpdateDate(dateStr)
    }

    const handleCategoryChange = () => {
        onUpdateCategory(`${category}`)
    };

    const handleTitleChange = () => {
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
                <div className='input_box'>
                    <select className='select_category' value={category} onChange={(e) => setCategory(e.target.value)} onBlur={handleCategoryChange}>
                        <option value="" disabled hidden>대분류</option>
                        {mainCategory.map((option) => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='input_box'>
                    <input className='input_title' placeholder='재료명' type="text" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={handleTitleChange} />
                </div>
                <div className='input_count'>
                    <AiOutlineMinusCircle className='btn_amount' onClick={() => { handleAmount("minus") }} />
                    <span className='item_amount'>{amount}</span>
                    <AiOutlinePlusCircle className='btn_amount' onClick={() => { handleAmount("plus") }} />
                </div>
                <div className='input_box'>
                    <span>소비기한</span>
                    <DatePicker
                        className='input_date'
                        dateFormat="yyyy년 MM월 dd일"
                        selected={expiryDate}
                        onChange={(date) => { handleDateChange(date) }}
                        selectsEnd
                        endDate={expiryDate}
                        minDate={new Date()}
                        locale={ko}
                    />
                </div>
                <div className='input_box'>
                    <img onClick={() => onRemove(name)} className='ingredient_icon_remove' src={'../assets/icon_remove.png'} alt='delete' />
                </div>
            </div>
        </div>
    );
}

export default ItemList;