import React, { useState,useEffect } from 'react';
import SearchBar from '../component/SearchBar/SearchBar';
import ImageCategory from '../component/ImageCategory/ImageCategory';
import CardList from '../component/CardList/CardList';
import axios from 'axios';
import Slider from 'react-slick'; //슬라이더 라이브러리
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


 /*json이 저장된 주소를 불러온다 */
const categoriesUrl="http://localhost:5000/categories"
 

const RecipeBoard = () => {
    const [cards, setCards] = useState([]);
  /*게시판 카테고리 목록을 저장하는 상태 */
    const [categories, setCategories] = useState({ recipeBoardCategory: [], chefBoardCategory: [] });

/*각각 목록을 axios로 불러오기 */
useEffect(() => { 
axios.get(categoriesUrl)
    .then((Response) => {
        console.log(Response.data)
        setCategories(Response.data)
        //console.log(Response.data)
    })
    .catch((error) => {        
    });    
}, [])
    
/* 슬라이더 사용을 위한 코드 */
    
const [currentSlide, setCurrentSlide] = useState(0);
/* 슬라이더 설정 코드 */
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
};

const handlePrevSlide = () => {
  if (currentSlide > 0) {
    setCurrentSlide(currentSlide - 1);
  }
};

const handleNextSlide = () => {
  if (currentSlide < categories.chefBoardCategory.length - 1) {
    setCurrentSlide(currentSlide + 1);
  }
    };
    
    return (
        <div className='container'style={container}>
           <div className='RecipeBoard-mainImg'>
                {/* json에 저장된 레시피의 순위 중 베스트 1번째의 이미지가 들어와야할 부분 */}
                <img src="" alt="" />
            </div>
                       
            <SearchBar />
            <ImageCategory categories={categories.recipeBoardCategory} />
            
            <p style={titleStyle} className='board-title'>화제의 TOP 레시피</p>
            
            <div>
            <CardList cards={cards.slice(0, 4)} showTitle={true} />
             
            </div>
           

            <div style={sliderContainer} className="slider-container">
                <div className="slider-arrow" onClick={handlePrevSlide} />
                    <Slider {...settings} initialSlide={currentSlide}>
                    {categories.chefBoardCategory.map((category, index) => (
                        <div key={index}>
                        <ImageCategory categories={[category]} />
                        </div>
                    ))}
                    </Slider>
                <div className="slider-arrow" onClick={handleNextSlide} />
            </div>


            <p style={titleStyle} className='board-title'>이런 레시피를 찾고 있나요?</p>

            <CardList cards={cards.slice(4, 8)} showTitle={false}/>
    </div>
    );
};

const titleStyle = {
    fontSize:'28px',
    margin:'30px 0 27px 0',
    borderRadius: '5px',
    fontWeight:'bold'
};

const container = {
    maxWidth:'1280px',
    margin: '0 auto'
};

const sliderContainer = {
    width: '1200px'
}

export default RecipeBoard;