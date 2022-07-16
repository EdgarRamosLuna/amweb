import React, { useState, useEffect, useRef } from 'react';

import { HomeStyle } from '../styles/HomeStyle';
import ScrollButton from './helpers/ScrollButton';
  

export default function Home(){
    const ref = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        ref.current?.scrollIntoView({behavior: 'smooth'});
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
                            <li><a href="#" onClick={handleClick}>Servicios</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Cotizaciones</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="services" >
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
                        <div className="services-item" ref={ref}>
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
            <ScrollButton />
        </HomeStyle>
    )
}