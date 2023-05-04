import React, { useState } from 'react';
import './SignUp.css'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
];

function SignUp() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [chkpassword, setChkPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
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
                if (result.code === 200) {
                    alert("회원가입이 완료되었습니다.")
                    navigate('/login');
                }; 
            });
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
                        <div className='status_container'>
                            <h1>맛 선호도</h1>
                            <div className='status'>
                                <Select
                                    className='select_status'
                                    defaultValue={selectedOption}
                                    placeholder='단맛'
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                                <Select
                                    className='select_status'
                                    defaultValue={selectedOption}
                                    placeholder='신맛'
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                                <Select
                                    className='select_status'
                                    defaultValue={selectedOption}
                                    placeholder='짠맛'
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                                <Select
                                    className='select_status'
                                    defaultValue={selectedOption}
                                    placeholder='기름진맛'
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                                <Select
                                    className='select_status'
                                    defaultValue={selectedOption}
                                    placeholder='매운맛'
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                            </div>
                        </div>
                        <div>
                            <button onClick={signUp} className='btn_signup'>가입하기</button>
                        </div>
                        <p>계정이 있으신가요 <a className='txt_gologin' href='/login'>로그인</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;