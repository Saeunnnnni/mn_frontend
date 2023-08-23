import React, { useState } from 'react';
import './CardList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';


const Card = ({ card }) => {
    
        //레시피를 like버튼을 누르면 서버에 전송
    //const [likes, setLikes] = useState(item.likes);  
        
    //아이콘 like를 눌렀을때
    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(prevIsLiked => !prevIsLiked);
    };

    
    return (
        <div className="card">            
            <img className="card-img" src={card.main_image_url} alt={card.title} />

            <div className='card-title-box'>
                <h2 className="cardList-title">{card.title}</h2>
                <div className='like-box'>
                    <button className='heart-btn' >
                        <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} style={{ color: isLiked ? '#ff6a10' : 'black' }}onClick={handleToggleLike} />
                    </button>
           
                    {/* <p>{likes}</p> */}
                </div>
            </div>
           
        </div>
    );
};
export default Card;