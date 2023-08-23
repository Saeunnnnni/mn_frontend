import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.js';
import Header from './component/Layout/Header/Header.js';
import Footer from './component/Layout/Footer/Footer.js';
import RecipeDetail from './pages/Recipe/RecipeDetail.js';
import PartyDetail from './pages/Party/PartyDetail.js';
import NoticeDetail from './pages/Notice/NoticeDetail.js';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RecipeDetail />
      <PartyDetail />
      <NoticeDetail />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;