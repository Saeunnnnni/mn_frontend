import React from 'react';
import '../../style/container.css'
import { useState } from 'react';

const Card = ({card})  => {
   const favListColor = [ {color:'#ddd'},  {color:'#F20'}]
   const btnColor = [ 
    {color:'#fff',fontWeight:700,backgroundColor:'#ada'}, 
    {color:'#fff',fontWeight:700,backgroundColor:'#8f8'}
]
   const [fav,setFav]  = useState(0);
   const [checkState, setCheckState]= useState('')
   const fncFav = (e) => {
    setFav((fav === 0) ? 1 : 0) ; 
    setCheckState(e.target.checked)
   }
/*
   fav: 초기값 0으로 설정된 상태 변수입니다. 이 변수는 '좋아요'나 '싫어요'와 같은 값으로 사용될 것 같습니다.
checkState: 초기값이 빈 문자열('')로 설정된 상태 변수입니다. 체크 상태를 나타내는 값으로 추측됩니다.
fncFav 함수는 클릭 이벤트나 체크박스 변경 이벤트 등에서 호출될 것 같습니다. 해당 함수는 아래와 같은 작업을 수행합니다.
fav 값을 토글(toggle)하는 작업을 합니다. 즉, fav가 0이면 1로, 1이면 0으로 변경됩니다.
클릭된 요소의 체크 상태를 checkState에 설정합니다.
*/
    
    return (
        <li>
        <div className='img_set' style={{background:`url(${card.main_image_url}) no-repeat center / cover`}}></div>
        <dl>
           <dt>{card.title}</dt>
           <dd>{card.content}</dd>
        </dl>
        <div className='btns'>
           <input type='checkbox' 
           id={card.checkName} 
           name={card.checkName} 
           data-checked={checkState}
           onChange={fncFav}
           className="blind" 
            />
           <label 
           htmlFor={card.checkName} 
           style={btnColor[fav]}>
            좋아요
            
           </label>
           <a className='link' href={card.dataLink}>상세보기</a>
       </div>
     </li>
    );
};

export default Card;