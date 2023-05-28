import React, { useState } from 'react';
import './LogIn.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logIn = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("이메일과 비밀번호가 입력되었는지 확인해주세요")
        }
        else {
            const userBody = {
                memberId: email,
                password: password,
            }
            axios.post(`https://nengcipe-server.store/api/users/login`, userBody)
                .then(data => {
                    if (data.status === 200) {
                        const userToken = data.data.result.jwt;
                        sessionStorage.setItem('jwt', userToken);
                        navigate('/');
                    }
                }).catch(response => {
                    if (response.response.status === 404) {
                        alert("아이디나 비밀번호를 다시 확인해주세요.");
                    }
                })
                
        }
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