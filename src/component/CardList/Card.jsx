import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import  axios from 'axios'

const Card = ({ card, showTitle }) => {

    // card 객체에서 rcpNum 값을 가져옴
    //console.log("showTitle value:", showTitle); // showTitle 값 로깅
    // 레시피를 like 버튼을 누르면 서버에 전송
    // const [likes, setLikes] = useState(item.likes);  
        
    // 아이콘 like를 눌렀을 때
    const [isLiked, setIsLiked] = useState(false);
    const { rcpNum, userNum } = card;
    const handleToggleLike = () => {
        // 좋아요 상태를 토글
        setIsLiked((prevIsLiked) => !prevIsLiked);

        // 서버로 좋아요 토글 요청 보내기
        axios.post('http://localhost:9999/recipe/like/toggle', { rcpNum,userNum })
            .then((response) => {
                // 요청이 성공한 경우 서버 응답에 따라 추가 작업 수행
                if (response.data === 'Like Inserted') {
                    // 좋아요가 추가되었을 때 수행할 작업
                    console.log('좋아요 추가됨');
                } else {
                    // 좋아요가 취소되었을 때 수행할 작업
                    console.log('좋아요 취소됨');
                }
            })
            .catch((error) => {
                // 요청이 실패한 경우 에러 처리
                console.error('좋아요 토글 요청 실패:', error);
            });
    };

    return (
        <div className="card">
            <Link to={`/RecipeDetail?rcpNum=${card.rcpNum}`}>
                <img className="card-img" src={card.mainPath} alt={card.title} />
            </Link>

            {showTitle && (
                <div className='card-title-box'>
                    <h2 className="cardList-title">{card.title}</h2>   </div>
            )}
             <div className='like-box'>
                        <button className='heart-btn' onClick={handleToggleLike}>
                            <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} style={{ color: isLiked ? '#ff6a10' : 'black' }} />
                        </button>
                        {/* <p>{likes}</p> */}
                    </div>

        </div>
    );
};

export default Card;