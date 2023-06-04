import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function KakaoRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = new URL(window.location.href).searchParams.get("accessToken");
        sessionStorage.setItem('jwt', "Bearer " + token);
        navigate("/");
    }, [navigate])
    return (
        <div>
        </div>
    );
}

export default KakaoRedirect;