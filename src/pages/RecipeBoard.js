import React, { useState,useEffect } from 'react';
import SearchBar from '../component/SearchBar/SearchBar';
import ImageCategory from '../component/ImageCategory/ImageCategory';
import CardList from '../component/CardList/CardList';
import axios from 'axios';


const categoriesUrl="http://localhost:5000/categories"
 

function RecipeBoard(){

    const [categories, setCategories] = useState({ recipeBoardCategory: [], chefBoardCategory: [] });


    useEffect(() => { 
    axios.get(categoriesUrl)
        .then((Response) => {
            console.log(Response.data)
            setCategories(Response.data)
            //console.log(Response.data)
        })
        .catch((error) => {

        });


    },[])
    
    return (
        <div className='container'>
           <div className='RecipeBoard-mainImg'>
                {/* json에 저장된 레시피의 순위 중 베스트 1번째의 이미지가 들어와야할 부분 */}
                <img src="" alt="" />
            </div>

            <SearchBar />
            <ImageCategory categories={categories.recipeBoardCategory} />

            <p>화제의 TOP 레시피</p>
            <CardList />

            <ImageCategory categories={categories.chefBoardCategory} />
        </div>
    );
};

export default RecipeBoard;