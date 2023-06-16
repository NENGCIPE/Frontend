import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Nengjanggo from "./pages/Nengjanggo";
import Recipe from "./pages/Recipe";
import Recommend from "./pages/Recommend";
import Scrap from "./pages/Scrap";
import MyPage from "./pages/MyPage";
import EditMyInfo from "./pages/EditMyInfo";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
// import HeaderWhite from "./components/Header_white";
import KakaoRedirect from "./pages/KakaoRedirect";
import UserGuide from "./pages/UserGuide";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><Header/><Home/><Footer/></div>}/>
      <Route path="/login" element={<div><LogIn/></div>}/>
      <Route path="/signup" element={<div><SignUp/></div>}/>
      <Route path="/nengjanggo" element={<div><Header/><Nengjanggo/><Footer/></div>}/>
      <Route path="/recipe/:recipeID" element={<div><Header/><Recipe/><Footer/></div>}/>
      <Route path="/recommend" element={<div><Header/><Recommend/><Footer/></div>}/>
      <Route path="/scrap" element={<div><Header/><Scrap/><Footer/></div>}/>
      <Route path="/mypage" element={<div><Header/><MyPage/></div>}/>
      <Route path="/editmyinfo" element={<div><EditMyInfo/></div>}/>
      <Route path="/UserGuide" element={<div><Header/><UserGuide/><Footer/></div>}/>
      <Route path="/oauth2" element={<KakaoRedirect/>}/>
    </Routes>
  );
}

export default App;