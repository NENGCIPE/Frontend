import React from 'react';
import './CartList.css'
// import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function CartList({name, count, handleCheck}) {
    return (
        <div className='item_list'>
            <div className='cart_container'>
                <div className='checkbox_container'>
                    <input className='btn_chkbox' value={name} type='checkbox' onChange={handleCheck}/>
                </div>
                <div className='cartname_container'>
                    <p>{name}</p>
                </div>
                {/* <div className='input_count'>
                    <AiOutlineMinusCircle className='btn_amount'/>
                    <span className='item_amount'>{count}</span>
                    <AiOutlinePlusCircle className='btn_amount'/>
                </div> */}
            </div>
        </div>
    );
}

export default CartList;