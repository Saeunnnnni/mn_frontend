import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../../component/SearchBar/SearchBar';
import ImageCategory from '../../component/ImageCategory/ImageCategory';
import MainImg from '../../component/MainImg/MainImg';
import axios from 'axios';
import SlickSlider from '../../lib/slickSlide'; 
import { Arrow } from '../../lib/arrow'; 
import RecipeCardList from '../../component/CardList/RecipeCardList';
import PartyCardList from '../../component/CardList/PartyCardList';
  

const RecipeBoard = () => {
     /*json이 저장된 주소를 불러와서 변수에 담기 */
 const categoriesUrl = "http://localhost:5000/categories";  
  
 const recipeUrl = "http://localhost:5000/recipe";  
  
   const [cards, setCards] = useState([]); 
    /*게시판 카테고리 목록을 저장하고 각각의 배열에 담기게 초기값 설정 */
  const [categories, setCategories] = useState({ recipeBoardCategory: [], chefBoardCategory: [] });
  
  
    
    /*각각 카테고리목록을 axios로 불러오기 */
     useEffect(() => { 
    axios.get(categoriesUrl)
        .then((Response) => {
            setCategories(Response.data)
            console.log(Response.data)
        }) 
        axios.get(recipeUrl)
        .then((Response) => {
          setCards(Response.data)
            console.log(Response.data)
        })
        .catch((error) => {        
          console.error('Error fetching data:', error);
        });
    }, []) 
    
    const CardSettings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />
    };


    const chefSettings = {
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />
    };

      
      
    return (
 
      
          <div className='container'>
            <div className='RecipeBoard-mainImg'>
              <MainImg/>
              </div>
                        
              <SearchBar />

        <div className='recipe-btn'>
          <Link to="/recipeList" className='recipe-list-Go'>더 많은 레시피 보러가기</Link>
          </div>
          
               <ImageCategory categories={categories.recipeBoardCategory} /> 
              
              <p className='board-title'>화제의 TOP 레시피</p>
      
            {/* card list  + slider 적용 */}
             <SlickSlider items={cards.map((card, index) => (
                <RecipeCardList key={index} cards={[card]} />
            ))} settings={CardSettings} /> 
        
  
        
          
             <p  className='board-title'>쉐프 소개</p> 
              {/* chef list  + slider 적용 */}
              <SlickSlider items={categories.chefBoardCategory.map((category, index) => (
                <ImageCategory key={index} categories={[category]} />
              ))} settings={chefSettings} /> 
                        
            


              <p className='board-title'>이런 레시피를 찾고 있나요?</p>
              <p style={title2Style} className='board-title'>좋아하실만한 레시피를 추천드려요!</p>
          
              {/* 오늘의 레시피 추천 리스트 */}
              {/*   <CardList cards={cards.slice(4, 8)} showTitle={false}/> */}
              <SlickSlider items={cards.map((card, index) => (
                      <PartyCardList key={index} cards={[card]} />
                  ))} settings={CardSettings} /> 
              </div>
      
        
      );
  };


  //스타일 변수


  const title2Style = {
    fontSize:'20px',
    margin:'0 0 27px 0',
    fontWeight:'200'
  };





export default RecipeBoard;