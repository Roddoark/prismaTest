import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import SliderArrow from "../SliderArrow/SliderArrow";

/*
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
*/

import './Slider.css';

export default class Slide extends Component {
    render() {
        const renderSlides = () =>
        [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <Card title={num} year="dcv" />
        ));
        const settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            speed: 1000,
            width: 200,
            nextArrow: <SliderArrow classname="slick-button-next" icon="slider-button-iconNext" />,
            prevArrow: <SliderArrow classname="slick-button-previous" icon="slider-button-iconPrevious" />
        };
        return (
            <section className="container">
                <h1 className="top10-title">Les 10 meilleurs films</h1>
                <div className="slider">
                <Slider {...settings}>
                    {renderSlides()}
                </Slider>
                </div>
            </section>
        )
    }
}