import React, { useState } from 'react';
import './ImageCategory.css'

//만든 categories를 map으로 category 객체와 index 값을 가져와서 각각의 key값과 대입이 되어야 할 값을 넣어준다
const ImageCategory = ({ categories }) => {
    //console.log(categories)
    return (
        <div className="category-list">
            {categories && categories.map((category, index) => (
                <div key={index} className="images-category">
                    <a href={category.link} className="category">
                        <img src={category.img_url} alt={category.name} />
                        <p>{category.name}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ImageCategory;