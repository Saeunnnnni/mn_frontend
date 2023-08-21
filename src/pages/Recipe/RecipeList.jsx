import React from 'react';
import RecipeCardList from '../../component/CardList/RecipeCardList';
import './Recipe.css';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    return (
        <div className='recipe-list container'>
            <div className='recipe-list-top'>
                <p className='list-total-count'>전체 개 </p>
                <Link className='write-go'>글작성</Link>
            </div>
            <RecipeCardList />
        </div>
    );
};

export default RecipeList;