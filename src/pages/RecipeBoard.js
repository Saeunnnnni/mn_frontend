import React, { useEffect, useState } from 'react';
import SearchBar from '../component/SearchBar/SearchBar';
import ImageCategory from '../component/ImageCategory/ImageCategory';
import CardList from '../component/CardList/CardList';
import axios from 'axios';


 {/*json이 저장된 주소를 불러온다 */}
const recipeBoardCategoryUrl = 'http://localhost:5000/recipe-board-category';
const chefCategoryUrl = 'http://localhost:5000/chef-board-category';
 

  {/*게시판 카테고리 목록을 저장하는 상태 */}
const [recipeCategory, setRecipeCategory] = useState({});
    {/*쉐프 카테고리 목록을 저장하는 상태 */}
const [chefCategory, setChefCategory] = useState({});

 {/*각각 목록을 axios로 불러오기 */}
useEffect(() => { 
    axios.get(recipeBoardCategoryUrl)
        .then((Response) => {
            setRecipeCategory(Response.data)
        })
        .catch((error) => {
            alert.error("데이터를 가져올 수 없습니다.")
        });
    
        axios.get(chefCategoryUrl)
        .then((Response) => { 
            setChefCategory(Response.data)
        })
        .catch((error) => { 
            alert.error("데이터를 가져올 수 없습니다.")
        })
})

const RecipeBoard = () => {
    return (
        <div className='container'>
            {/*header들어갈 부분 */}
            
            <div className='RecipeBoard-mainImg'>
                {/* json에 저장된 레시피의 순위 중 베스트 1번째의 이미지가 들어와야할 부분 */}
                <img src="" alt="" />
            </div>
                       
            <SearchBar />
            <ImageCategory categories={recipeCategory} />
            <p>화제의 TOP 레시피</p>

            <CardList />

            <ImageCategory categories={chefCategory} />
        </div>
    );
};

export default RecipeBoard;