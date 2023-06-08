
import { useNavigate } from 'react-router-dom';
import './UserGuide.css'

function UserGuide() {
    const navigate = useNavigate();
    const chkAuth = () => {
        navigate('/');
}
    return(
        <div className="UserGuide_info_container">
            <img className='UserGuide_image' alt='이미지' src='../assets/userguide_1.png' />
            <img className='UserGuide_image' alt='이미지' src='../assets/userguide_2.png' />
            <img className='UserGuide_image' alt='이미지' src='../assets/userguide_3.png' />
            <button className='home_btn' onClick={chkAuth}>홈으로</button>
        
        </div>

    )

}
export default UserGuide;