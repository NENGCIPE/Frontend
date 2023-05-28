import React, { useEffect, useState } from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const chkAuth = () => {
        if (isLogin === true) {
            navigate('/mypage')
        }
        else {
            alert("로그인이 필요한 기능입니다.");
            navigate('/login');
        }
    }

    const logOut = () => {
        if (isLogin) {
            sessionStorage.clear();
            setIsLogin(false);
            alert("로그아웃되었습니다.")
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('jwt') != null) {
            setIsLogin(true);
        }
        else {
            setIsLogin(false);
        }
    }, [])

    return (
        <div className='header'>
            <div className='header_container'>
                <div className='header_logo'>
                    <div><a href='/'><img className='header_logo_icon' alt='logo' src='../assets/nengcipe_logo.jpg' /></a></div>
                </div>
                <div className='header_menu'>
                    <div><a href='/'>Home</a></div>
                    <div><a href={isLogin ? '/nengjanggo' : '/login'}>Nengcipe</a></div>
                    <div><a href='/recommend'>Recommend</a></div>
                    <div><a href={isLogin ? '/scrap' : '/login'}>Scrap</a></div>
                </div>
                <div className='header_nav'>
                    <div className='header_option'>
                        <Link to={!isLogin && '/login'} className='header_login'>
                            <span onClick={logOut}><button className='header_btn1'>{isLogin ? '로그아웃' : '로그인'}</button></span>
                        </Link>
                    </div>
                    <div className='header_option'>
                        <span ><button onClick={chkAuth} className='header_btn2'>마이페이지</button></span>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Header;