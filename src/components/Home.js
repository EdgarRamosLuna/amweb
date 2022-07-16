import React, { useState, useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HomeStyle } from '../styles/HomeStyle';
import ScrollButton from './helpers/ScrollButton';



export default function Home(){
    const ser = useRef(null);
    const cli = useRef(null);
    const handleClick = (e, ref) => {
        e.preventDefault();
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        loop:true,
        center:true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 3,
            },
            980: {
                items: 5,
            },
            1024: {
                items: 5,
            },
            1200: {
                items: 7,
            },
            1600: {
                items: 9,

            }
        },
    };
    return(
        <HomeStyle>
            <header>
                <div className="menu">
                    <div className="logo">
                        <a href="#">AM</a>
                    </div>
                    <div className="menu-items">
                        <ul>
                            <li><a href="#" onClick={(e)=> handleClick( e, ser)}>Servicios</a></li>
                            <li><a href="#" onClick={(e)=> handleClick( e, cli)}>Clientes</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Cotizaciones</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="services" ref={ser}>
                <div className="services-content" >
                    <div className="services-title">
                        <h1>Servicios</h1>
                    </div>
                    <div className="services-items">
                        <div className="services-item">
                            <div className="services-item-img">
                                <img src="assets/img/social.jpg" alt="" />
                                <div className="services-item-title">
                                    <h3>Social</h3>
                                </div>
                            </div>
                            <div className="services-item-txt">
                                <p>Occaecat adipisicing mollit deserunt amet cillum eiusmod aliqua quis. Eiusmod cupidatat ullamco do irure. In id nulla dolor duis ex cillum exercitation eu enim consectetur. Nulla voluptate incididunt qui proident sit deserunt in fugiat. </p>
                            </div>
                        </div>
                        <div className="services-item" >
                            <div className="services-item-img">
                                <img src="assets/img/social.jpg" alt="" />
                                <div className="services-item-title">
                                    <h3>Comercial</h3>
                                </div>
                            </div>
                            <div className="services-item-txt">
                                <p>Occaecat adipisicing mollit deserunt amet cillum eiusmod aliqua quis. Eiusmod cupidatat ullamco do irure. In id nulla dolor duis ex cillum exercitation eu enim consectetur. Nulla voluptate incididunt qui proident sit deserunt in fugiat. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clients" ref={cli}>
                <div className="services-content" >
                        <div className="services-title">
                            <h1>Clientes</h1>
                        </div>
                    <div className="clients-slider">
                        <OwlCarousel className="owl-theme" {...options}>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/01.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/02.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/03.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/04.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/05.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/06.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/07.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/08.png" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="assets/img/logos/09.png" alt="" />
                                        </div>
                        </OwlCarousel>  
                    </div>
                </div>
            </div>
            <ScrollButton />
        </HomeStyle>
    )
}