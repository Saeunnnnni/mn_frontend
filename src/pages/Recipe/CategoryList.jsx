import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryList = () => {
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recipe')
        .then(response => {
            setRecipes(response.data.length); // 레시피 개수 설정
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const { categoryName } = useParams();
    
    const filteredRecipes = recipes.filter(recipe => recipe.category === categoryName);

    return (
        <div>
            <h2>{categoryName}와(과) 관련된 글:</h2>
            <ul>
                {filteredRecipes.map((recipe, index) => (
                    <li key={index}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;