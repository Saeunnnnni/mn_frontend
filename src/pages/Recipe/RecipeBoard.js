import React, { useState,useEffect } from 'react';
import SearchBar from '../../component/SearchBar/SearchBar';
import ImageCategory from '../../component/ImageCategory/ImageCategory';
import CardList from '../../component/CardList/CardList';
import MainImg from '../../component/MainImg/MainImg';
import axios from 'axios';
import SlickSlider from '../../lib/slickSlide'; 
import { Arrow } from '../../lib/arrow'; 


 /*json이 저장된 주소를 불러와서 변수에 담기 */
  const categoriesUrl="http://localhost:5000/categories"
  

  const RecipeBoard = () => {
    const [cards, setCards] = useState([]);
    console.log(cards)
    console.log(CardList)

    /*게시판 카테고리 목록을 저장하고 각각의 배열에 담기게 초기값 설정 */
      const [categories, setCategories] = useState({ recipeBoardCategory: [], chefBoardCategory: [] });

  /*각각 카테고리목록을 axios로 불러오기 */
  useEffect(() => { 
  axios.get(categoriesUrl)
      .then((Response) => {
          setCategories(Response.data)
          //console.log(Response.data)
      })
      .catch((error) => {        
      });    
  }, [])
    
    
  const cardSettings = {
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

    console.log(SlickSlider)
    
  return (
    <div>
     
        <div className='container'>
           <div className='RecipeBoard-mainImg'>
            <MainImg/>
            </div>
                       
            <SearchBar />
        
            <ImageCategory categories={categories.recipeBoardCategory} />
            
            <p className='board-title'>화제의 TOP 레시피</p>
            
            {/* TOP 10 카드 리스트 */}
          {/* <SlickSlider items={cards.map((card, index) => (
                <CardList key={index} cards={card} showTitle={true} />
            ))} settings={cardSettings} />
 
         */}
        
        <p  className='board-title'>쉐프 소개</p>
            {/* chef list  + slider 적용 */}
            <SlickSlider items={categories.chefBoardCategory.map((category, index) => (
              <ImageCategory key={index} categories={[category]} />
            ))} settings={chefSettings} />
                      
          


            <p className='board-title'>이런 레시피를 찾고 있나요?</p>
            <p style={title2Style} className='board-title'>좋아하실만한 레시피를 추천드려요!</p>
            
        
            {/* 오늘의 레시피 추천 리스트 */}
            <CardList cards={cards.slice(4, 8)} showTitle={false}/>
      </div>
     
      </div>
    );
};


//스타일 변수


const title2Style = {
  fontSize:'20px',
  margin:'0 0 27px 0',
  fontWeight:'200'
};

const cardStyle = {
  border:'1px solid red'
};



export default RecipeBoard;