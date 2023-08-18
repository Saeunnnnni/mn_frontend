import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardList.css';
import Card from './Card';


const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recipe')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (

        
        <div className="card-list">
            {cards.slice(0, 4).map((card, index) => (
                <Card key={index} recipe={card} />
            ))}
        </div>
    );
};

export default CardList;






