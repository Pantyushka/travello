import React from 'react'
import './customers.css'
import CardImg1 from '../../assets/cardimg1.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Customers = () => {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "220px",
        slidesToShow: 1,
        speed: 500,
        responsive: [
        {
            breakpoint: 750,
            settings: {
                dots: true,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "40px",
                slidesToShow: 1,
                speed: 500,
            }
        },
        ]
      };
  
  return (
    <div className='customers'>
        <div className='customersHeader'>What Customers Say About Us</div>
        <div className='customersCards'>
        <Slider {...settings}>
            <div className='customersCard'>
                <div className='cardImg'><img src={CardImg1}/></div>
                <div className='cardName'>Fatima Taylor</div>
                <div className='cardText'>Lorem ipsum doloradipisicing elit. Id aut odio a ducimus.</div>
            </div>
            <div className='customersCard'>
                <div className='cardImg'><img src={CardImg1}/></div>
                <div className='cardName'>Walter White</div>
                <div className='cardText'>Lorem ipsum doloradipisicing elit. Id aut odio a ducimus.</div>
            </div>
            <div className='customersCard'>
                <div className='cardImg'><img src={CardImg1}/></div>
                <div className='cardName'>Jasie Pinkman</div>
                <div className='cardText'>Lorem ipsum doloradipisicing elit. Id aut odio a ducimus.</div>
            </div>
            </Slider>
        </div>
    </div>
  )
}


export default Customers