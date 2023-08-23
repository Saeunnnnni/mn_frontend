import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoardRecipeCardList from '../../component/CardList/BoardRecipeCardList';
import './RecipeList.css';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const [totalRecipeCount, setTotalRecipeCount] = useState(0); // 추가

    useEffect(() => {
           //         const request_headers = new Headers();
        //         const api_key = null;
        //         request_headers.append("Authorization", `Bearer ${api_key}`);
        //         request_headers.append("Content-Type", "application/json");

        //         const request_options = {
        //             method: "GET",
        //             headers: request_headers
        //         };
        axios.get('http://localhost:5000/recipe')
        .then(response => {
            setTotalRecipeCount(response.data.length); // 레시피 개수 설정
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div className='recipe-list container'>
            <div className='recipe-list-top'>
                <p className='list-total-count'>전체 {totalRecipeCount} 개 </p>
                <Link className='write-go'>글쓰기</Link>
            </div>
            <BoardRecipeCardList />
        
        </div>
    );
};

export default RecipeList;