import React, { useState, useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CustomContainer, Footer, HomeStyle, Team, Title } from '../styles/HomeStyle';
import ScrollButton from './helpers/ScrollButton';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';

export default function Home(){
    const home = useRef(null);
    const ser = useRef(null);
    const cli = useRef(null);
    const tea = useRef(null);
    const cot = useRef(null);
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
    const [dataService, setDataService] = useState([]);
    useEffect(() => {
        axios.get('https://amfotografiatest.herokuapp.com/api/service/getdata').then(res =>{
            console.log(res.data);
            setDataService(res.data);
        }).catch(err =>{
            console.log(err);
        });
    }, []);
    
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
                items: 8,

            }
        },
    };
    return(
        <HomeStyle ref={home}>
            <header>
                <div className="menu m2">
                    <div className="logo">
                        <div className="logo-img">
                        <a href="#" onClick={(e)=> handleClick( e, home)}>AM</a>
                        </div>
                        <div className="menu-items-cont">
                        <div className="menu-items">
                            <ul>
                                <li><a href="#" onClick={(e)=> handleClick( e, ser)}>Servicios</a></li>
                                <li><a href="#" onClick={(e)=> handleClick( e, tea)}>Team</a></li>
                                <li><a href="#" onClick={(e)=> handleClick( e, cli)}>Clientes</a></li>
                                <li><a href="#" onClick={(e)=> handleClick( e, cot)}>Cotiza</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            <div className="services" ref={ser} id="servicios">
                <div className="services-content" >
                    <Title>
                        <div className="clients-title">
                            <h1>Servicios</h1>
                        </div>
                    </Title>
                    <div className="services-items">
                        {
                            dataService &&
                            dataService.map(service => 
                                <>
                                <div className="services-item">
                                        <div>
                                           { 
                                           
                                           <Link to={{pathname: `servicio/${service.name.toLowerCase()}`,}} state={{id: service.idser}} className="services-item-img">
                                            <CustomContainer className="item" bgI={service.bgimage}>
                                                <div className="services-item-title">
                                                    <h3>{service.name}</h3>
                                                </div>
                                                <div className="animationbg"></div>
                                            </CustomContainer>
                                            </Link>
                                            }
                                        </div>
                                    </div>
                                </>
                                
                            )
                            
                        }
                    </div>
                </div>
            </div>
            <div className="team" ref={tea} id="team">
                <Title>
                        <div className="clients-title">
                            <h1>Team</h1>
                        </div>
                </Title>
                <div className="team-cont">
                    
                    <div className="team-items">
                        <div className="team-img team1">
                          
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
            <div className="clients" ref={cli} id="clientes">
                <div className="clients-content" >
                    <Title>
                        <div className="clients-title">
                            <h1>Clientes</h1>
                        </div>
                    </Title>
                    <div className="clients-slider">
                        <OwlCarousel className="owl-theme" {...options}>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1F7ZIBH0HcZamNuqhtOi-3--SUTK2KCCg" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1-khTxebk-aABRFyDhEZWew_4Mom83Kda" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1mpZYUGcnW5PfINsZJM0fcjwlLF0__eEr" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1kOwWdFC18rqEtPJz_etvNcgm3mLWuI-S" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1d8CtZymxANy2TvYG77flEKNUNS921SQn" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1pAOEnO1bCG-A2bcVlM4SHhWvcPgstVYp" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1MEkgHVMRBnrAX9bL5b3uHaYxY0KKiasq" alt="" />
                                        </div>
                                        <div className="slider-item">
                                            <img src="https://drive.google.com/uc?export=view&id=1dYFDKIIlSA0hkeIhgIj5BbSwkO7UbSvn" alt="" />
                                        </div>
                                    
                        </OwlCarousel>  
                    </div>
                </div>
            </div>
            <div ref={cot} id="cotiza">
                <Form  />
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