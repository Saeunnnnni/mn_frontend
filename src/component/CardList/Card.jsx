import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';




const Card = ({ recipe,  showTitle}) => {
    //레시피를 like버튼을 누르면 서버에 전송
    const [likes, setLikes] = useState(recipe.likes);    

    const handleLike = () => {
        axios.post('http://localhost:5000/recipe', { cardId: recipe.num })
            .then(response => {
                const updatedLikes = response.data.updatedLikes;
                setLikes(updatedLikes);
            })
            .catch(error => {
                console.error('Error updating likes:', error);
            });
    };
    

    //아이콘 like를 눌렀을때
    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(prevIsLiked => !prevIsLiked);
    };



    return (
        <div className="card">
            
            <img className="card-img" src={recipe.main_image_url} alt={recipe.title} />

            <div className='card-title-box'>
                {showTitle && <h2 className="cardList-title">{recipe.title}</h2>}
                <div className='like-box'>
                    <button className='heart-btn' onClick={handleLike}>
                        <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} style={{ color: isLiked ? '#ff6a10' : 'black' }}onClick={handleToggleLike} />
                </button>
           
                    {/* <p>{likes}</p> */}
                </div>
            </div>

           
        </div>
    );
};
export default Card;