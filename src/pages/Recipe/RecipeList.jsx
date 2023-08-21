import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCardList from '../../component/CardList/RecipeCardList';
import './RecipeList.css';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const [cards, setCards] = useState([]);
    const [totalRecipeCount, setTotalRecipeCount] = useState(0); // 추가

    useEffect(() => {
        axios.get('http://localhost:5000/recipe')
        .then(response => {
            setCards(response.data);
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
                <Link className='write-go'>글작성</Link>
            </div>
            <RecipeCardList />
        </div>
    );
};

export default RecipeList;