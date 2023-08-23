import React, { useState, useEffect} from 'react';
import './CardList.css';
import Card from './Card';
import axios from 'axios';



const RecipeCardList = () => {


    const [cards, setCards] = useState([]);
     //초기값을 빈 배열로 설정
    useEffect(() => { 
        axios.get('http://localhost:5000/recipe')
        .then(response => {
            setCards(response.data);
        
        })
        .catch(error => {
           //console.error('Error fetching data:', error);
        });
}, [])
    

        
    return (
        <div className="card-list">
            {Array.isArray(cards) && cards.map((card, index) => (
                <Card key={index.id} card={card} />
            ))}
        </div>
        
    );
};

export default RecipeCardList;





