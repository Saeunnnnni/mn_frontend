import React ,{ useState, useEffect} from 'react'
import './MainPage.css'
import Banner from '../../component/Banner/Banner';
import CardList from '../../component/CardList/CardList';
import axios from 'axios';

function MainPage() {

  const [recipeCards, setRecipeCards] = useState([]);
    const [partyCards, setPartyCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
            .then(response => {
                setRecipeCards(response.data.recipeCards);
            })
            .catch(error => {
                console.error('Error fetching recipe cards:', error);
            });

        axios.get('http://localhost:5000/partyList')
            .then(response => {
                setPartyCards(response.data.partyCards);
            })
            .catch(error => {
                console.error('Error fetching chef cards:', error);
            });
    }, []);

  return (
    <div className='container'>
        <div className='imgWrapper'>
          <Banner className="image" />
        </div>

        <div className='board-title'>지금 <span style={{color:"#ff6a10"}} >핫🔥한 </span>레시피</div>
        <CardList cards={recipeCards} showTitle={false} />
        
        <div className='board-title'>Today <span style={{ color: "#ff6a10" }} >레시피 </span></div>
          <CardList cards={recipeCards} showTitle={false} />

        <div className='board-title'>오늘의 🎉<span style={{ color: "#ff6a10" }} >주인공 </span></div>
        <CardList cards={partyCards} showTitle={false} />

    </div>
  )
}

export default MainPage;