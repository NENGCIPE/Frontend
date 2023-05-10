import React, { useState } from 'react';
import './LogIn.css'
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logIn = (e) => {
        e.preventDefault();
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

return (
    <div className='background'>
        <div className='login_container'>
            <div className='login_box'>
                <h1 className='txt_login'>로그인</h1>
                <form className='login_form'>
                    <div>
                        <input className='login_input' value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='이메일' />
                    </div>
                    <div>
                        <input className='login_input' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='비밀번호' />
                    </div>
                    <div>
                        <button onClick={logIn} className='btn_login'>로그인</button>
                    </div>
                    <p>회원이 아니신가요? <a className='txt_gosignup' href='/signup'>회원가입</a></p>
                    <div>
                        <img className='btn_kakao' src='../assets/kakao_login.png' alt='카카오로그인' />
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default LogIn;