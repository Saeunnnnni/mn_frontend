import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.js';
import Header from './component/Header/Header.js';
import Footer from './component/Footer/Footer.js';
import RecipeDetail from './pages/Recipe/RecipeDetail.jsx';
import Notice from './pages/Notice/NoticeBoard.js';
import Recipe from './pages/Recipe/RecipeBoard.jsx';
import Party from './pages/Party/PartyList.jsx';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import ResetPwd from './pages/ResetPwd/ResetPwd.js';
import Mypage from "./pages/Mypage/Mypage.js";
import RecipeList from './pages/Recipe/RecipeList.jsx';
import PartyList from './pages/Party/PartyList.jsx';
import NoticeBoard from "./pages/Notice/NoticeBoard.js";
import NoticeDetail from "./pages/Notice/NoticeDetail.js";
/* import CategoryList from "./pages/Recipe/CategoryList.jsx"; */

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/party" element={<Party />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPwd" element={<ResetPwd />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recipeDetail" element={<RecipeDetail />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/partyList" element={<PartyList/>}/>
        <Route path="/notice" element={<NoticeBoard />}></Route>
        <Route path="/noticeDetail" element={<NoticeDetail/>}></Route>
         {/*  <Route path="/recipes/:categoryName"  element={<CategoryList recipes={recipes}/>} /> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
