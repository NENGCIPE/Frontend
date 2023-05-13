import React, { useState } from 'react';
import './EditMyInfo.css';
import { useNavigate } from "react-router-dom";

function EditMyInfo() {
    //const navigate = useNavigate();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const edit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("이메일과 비밀번호가 입력되었는지 확인해주세요")
        }
        else {
            
            fetch("https://nengcipe-server.store/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    memberId: email,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.code === 200) {
                        const userToken = result.result.jwt;
                        sessionStorage.setItem('jwt', userToken);
                        navigate('/');
                    };
                });
        }
    }
    
    return (
        <div className='edit_background'>
            <div className='edit_container'>
                <div className='edit_box'>
                    <h1 className='txt_edit'>회원 정보 수정</h1>
                    <form className='edit_form'>
                        <p className='explain'>이메일을 입력해주세요</p>
                        <input className='edit_input' value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='이메일' />
                        <p className='explain'>비밀번호를 입력해주세요</p>
                            <input className='edit_input' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='비밀번호' />
                        <p className='explain'>비밀번도를 다시 입력해주세요</p>
                            <input className='edit_input' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='비밀번호 확인' />
                        <button onClick={edit} className='btn_edit'>수정</button>
                        <button onClick={edit} className='btn_edit'>확인</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default EditMyInfo;
