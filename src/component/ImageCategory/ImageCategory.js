import React from 'react';
import './ImageCategory.css'

//각 카테고리와 이미지, 링크를 배열 categories의 배열로 담기
const categories = [
   
    { name: '반려견', image: 'animal01.png' , link: '/category/dog' },
    { name: '반려묘', image: 'animal02.png', link: '/category/cat'  },
    { name: '반려햄', image: 'animal04.png' , link: '/category/ham'  },
    { name: '반려조', image: 'animal03.png', link: '/category/bird'  },
    { name: '기타', image: 'animal05.png', link: '/category/etc'  },
  ];

//만든 categories를 map으로 category 객체와 index 값을 가져와서 각각의 key값과 대입이 되어야 할 값을 넣어준다
const ImageCategory = ({ categories}) => {
    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <div className="images-category" key={index}>
                    <a href={category.link} key={index} className="category">
                            <img src={`/images/${category.image}`} alt={category.name} />
                            <p>{category.name}</p>
                    </a>
                </div>
            ))}
            </div>
        );
    };

export default ImageCategory;