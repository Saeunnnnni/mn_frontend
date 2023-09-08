import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import './ImageCategory.css'
import axios from 'axios';
import SlickSlider from "../../lib/slickSlide";
import {Arrow} from "../../lib/arrow";
//만든 categories를 map으로 category 객체와 index 값을 가져와서 각각의 key값과 대입이 되어야 할 값을 넣어준다
const UserImageCategory= () => {
    //console.log(categories)

    /* 사용자들의 data가 담겨있는 url 변수에 넣기! */
    const usersCategoriesUrl = "http://localhost:9999/user/list";

    const [UsersCategories, setUsersCategories] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const Settings = {
        arrow: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    };

    /*각각 카테고리목록을 axios로 불러오기 */
    useEffect(() => {
        axios.get(usersCategoriesUrl)
            .then((Response) => {
                setUsersCategories(Response.data)
                console.log(Response.data)
            })
            .catch((error) => {
                console.error('UserCategory Url Error fetching data:', error);
            });
    }, [])

    return (
        <div className="User-category-list">
            <SlickSlider items={UsersCategories && UsersCategories.map((UserCategory, index) => (
                <div key={index} className="images-category">
                    <Link to={`/boardRecipeCardList/` + UserCategory.userNum} className="category">
                        <img src={UserCategory.userProfile} alt={UserCategory.userNickname} />
                        <p>{UserCategory.userNickname}</p>
                    </Link>
                </div>
            ))} settings={Settings} />

        </div>
    );
};

export default UserImageCategory;