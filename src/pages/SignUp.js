import React, { useState } from 'react';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [chkpassword, setChkPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        if (email === "" || password === "" || chkpassword === "" || name === "") {
            alert("모든 정보를 입력해주세요");
        }
        else if (password !== chkpassword) {
            alert("비밀번호가 동일하지 않습니다");
        }
        else {
            
            fetch("https://nengcipe-server.store/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    memberName: name,
                    memberId: email,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.code === 201) {
                        alert("회원가입이 완료되었습니다.")
                        navigate('/login');
                    };
                });
        }
    }

    return (
        <div className='background'>
            <div className='signup_container'>
                <div className='signup_box'>
                    <h1 className='txt_signup'>회원가입</h1>
                    <form className='signup_form'>
                        <div>
                            <input className='signup_input' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='이메일' />
                        </div>
                        <div>
                            <input className='signup_input' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='비밀번호' />
                        </div>
                        <div>
                            <input className='signup_input' value={chkpassword} onChange={(e) => setChkPassword(e.target.value)} type='password' placeholder='비밀번호 확인' />
                        </div>
                        <div>
                            <input className='signup_input' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='닉네임' />
                        </div>
                        <div>
                            <button onClick={signUp} className='btn_signup'>가입하기</button>
                        </div>
                        <p>계정이 있으신가요? <a className='txt_gologin' href='/login'>로그인</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;