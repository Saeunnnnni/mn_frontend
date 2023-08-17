import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.js';
import Header from './component/Layout/Header/Header.js';
import Footer from './component/Layout/Footer/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainPage/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;