import React from 'react';
import './PartyList.css';
import { Link } from 'react-router-dom';
import BoardPartyCardList from '../../component/CardList/BoardPartyCardList';

const RecipeList = () => {
    return (
        <div className='recipe-list container'>
            <div className='recipe-list-top'>
                <p className='list-total-count'>전체 개 </p>
                <Link className='write-go'>글작성</Link>
            </div>
            <BoardPartyCardList />
        </div>
    );
};

export default RecipeList;