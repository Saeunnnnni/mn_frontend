import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ 
            ...style,
            display: "block", 
            background: "red", 
            right: "10px"
        }}
        onClick={onClick}
      />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
            background: "green", 
            left: "10px"
        }}
        onClick={onClick}
        />
    );
}

function Banner() {
    const publicPath = process.env.PUBLIC_URL;

    const settings = {    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img 
                        className="image"
                        src={`${publicPath}/images/mainImg1.jpg`} 
                        alt="배너이미지1" 
                    />
                </div>
                <div>
                    <img 
                        className="image"
                        src={`${publicPath}/images/mainImg2.jpg`} 
                        alt="배너이미지2" 
                    />
                </div>
                <div>
                    <img 
                        className="image"
                        src={`${publicPath}/images/mainImg3.jpg`} 
                        alt="배너이미지3" 
                    />
                </div>
            </Slider>
        </div>
    )
}

export default Banner;