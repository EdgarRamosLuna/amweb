import React, { useState, useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Footer, HomeStyle, Team } from '../styles/HomeStyle';
import ScrollButton from './helpers/ScrollButton';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';


export default function Home(){
    const ser = useRef(null);
    const cli = useRef(null);
    const tea = useRef(null);
    const handleClick = (e, ref) => {
        e.preventDefault();
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    function ScrollToTop() {
      
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
    }
   // ScrollToTop();
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
                            
                            <li><a href="#" onClick={(e)=> handleClick( e, tea)}>Team</a></li>
                            <li><a href="#" onClick={(e)=> handleClick( e, cli)}>Clientes</a></li>
                            <li><a href="#">Cotiza</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="services" ref={ser} id="servicios">
                <div className="services-content" >
                    <div className="services-title">
                        <h1>Servicios</h1>
                    </div>
                    <div className="services-items">
                        <div className="services-item">
                            
                            <div >
                                <Link to="/comercial" className="services-item-img">
                                <img src="assets/img/social.jpg" alt="" />
                                <div className="services-item-title">
                                    <h3>Eventos</h3>
                                </div>
                                <div className="animationbg"></div>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="services-item" >
                            <div >
                                <Link to="/comercial" className="services-item-img">
                                <img src="assets/img/social.jpg" alt="" />
                                
                                <div className="services-item-title">
                                    <h3>Sesiones</h3>
                                </div>
                                <div className="animationbg"></div>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="services-item" >
                            <div >
                                <Link to="/comercial" className="services-item-img">
                                <img src="assets/img/social.jpg" alt="" />
                                
                                <div className="services-item-title">
                                    <h3>Comercial</h3>
                                </div>
                                <div className="animationbg"></div>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="team" ref={tea}>
                <div className="services-title">
                    <h1>Team</h1>
                </div>
                <div className="team-cont">
                    
                    <div className="team-items">
                        <div className="team-img team1">
                            <img src="assets/img/team/t1.jpg" alt="" />
                        </div>
                        <div className="team-title">
                            <h3>Adan Meza</h3>
                        </div>
                        <div className="team-txt">
                            <p>Sit mollit consequat pariatur amet reprehenderit amet elit laborum esse ea cupidatat qui magna. Ad aliqua minim dolore ex exercitation magna reprehenderit irure. Aliquip tempor exercitation aliquip duis sunt aute anim. Et sunt voluptate officia proident eu reprehenderit adipisicing cillum labore sint fugiat Lorem nostrud duis. Ex esse consequat sint pariatur mollit culpa ipsum officia ex ullamco laboris Lorem consectetur. Officia elit excepteur esse excepteur.</p> 
                        </div>
                    </div>
                    <div className="team-items">
                        <div className="team-img team2">
                            <img src="assets/img/team/t2.jpg" alt="" />
                        </div>
                        <div className="team-title">
                            <h3>Raúl Salazar</h3>
                        </div>
                        <div className="team-txt">
                            <p>Sit mollit consequat pariatur amet reprehenderit amet elit laborum esse ea cupidatat qui magna. Ad aliqua minim dolore ex exercitation magna reprehenderit irure. Aliquip tempor exercitation aliquip duis sunt aute anim. Et sunt voluptate officia proident eu reprehenderit adipisicing cillum labore sint fugiat Lorem nostrud duis. Ex esse consequat sint pariatur mollit culpa ipsum officia ex ullamco laboris Lorem consectetur. Officia elit excepteur esse excepteur.</p> 
                        </div>
                    </div>
                    <div className="team-items">
                        <div className="team-img team3">
                            <img src="assets/img/team/t3.jpg" alt="" />    
                        </div>
                        <div className="team-title">
                            <h3>Luis Chávez</h3>
                        </div>
                        <div className="team-txt">
                            <p>Sit mollit consequat pariatur amet reprehenderit amet elit laborum esse ea cupidatat qui magna. Ad aliqua minim dolore ex exercitation magna reprehenderit irure. Aliquip tempor exercitation aliquip duis sunt aute anim. Et sunt voluptate officia proident eu reprehenderit adipisicing cillum labore sint fugiat Lorem nostrud duis. Ex esse consequat sint pariatur mollit culpa ipsum officia ex ullamco laboris Lorem consectetur. Officia elit excepteur esse excepteur.</p> 
                        </div>
                    </div>
                </div>

            </div>
            <div className="clients" ref={cli}>
                <div className="clients-content" >
                        <div className="clients-title">
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
            <Footer>
                <div className="social-bar">
                    <div className="social-item">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="social-item">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                    <div className="social-item">
                        <a href="#"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </Footer>
            <ScrollButton />
        </HomeStyle>
    )
}