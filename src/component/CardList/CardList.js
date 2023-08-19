import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardList.css';
import Card from './Card';


const CardList = ({ cards }) => {   
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card key={index} data={card} />
            ))}
        </div>
    );
};

export default CardList;





