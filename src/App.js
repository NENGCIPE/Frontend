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

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><Header/><Home/></div>}/>
      <Route path="/login" element={<div><LogIn/></div>}/>
      <Route path="/signup" element={<div><SignUp/></div>}/>
      <Route path="/nengjanggo" element={<div><Header/><Nengjanggo/></div>}/>
      <Route path="/recipe/:id" element={<div><Header/><Recipe/></div>}/>
      <Route path="/recommend" element={<div><Header/><Recommend/></div>}/>
      <Route path="/scrap" element={<div><Header/><Scrap/></div>}/>
      <Route path="/mypage" element={<div><Header/><MyPage/></div>}/>
      <Route path="/editmyinfo" element={<div><EditMyInfo/></div>}/>
    </Routes>
  );
}

export default App;
