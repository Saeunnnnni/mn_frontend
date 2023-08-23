
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.js";
import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import RecipeDetail from "./pages/Recipe/RecipeDetail.js";
import Notice from "./pages/Notice/NoticeBoard.js";
import Recipe from "./pages/Recipe/RecipeBoard.js";
import Party from "./pages/Party/PartyDetail.js";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import ResetPwd from "./pages/ResetPwd/ResetPwd.js";
import MyPage from "./pages/Mypage/Mypage.js";
import RecipeList from "./pages/Recipe/RecipeList.jsx";
import PartyList from "./pages/Party/PartyList.jsx";

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
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/partyList" element={<PartyList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
