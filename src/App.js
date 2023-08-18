import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.js';
import Header from './component/Layout/Header/Header.js';
import Footer from './component/Layout/Footer/Footer.js';
import RecipeBoard from './pages/RecipeBoard.js';
import RecipeDetail from './pages/Recipe/RecipeDetail.js'

function App() {
  return (
    <BrowserRouter>
      <RecipeBoard/>
    </BrowserRouter>
  );
}

export default App;