import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { DashboardS, MenuDash } from '../../styles/Dashboard';
import Categories from './Categories';
export default function Menu(){
    return(
        <MenuDash>
            <div className="dashboard-menu">
                <div className="logo">
                    <Link to ="/dashboard/main">AM</Link>
                </div>
                <div className="menu-container">
                    <ul>
                        <li className="dashboard"><Link to ="/dashboard/main">Dashboard</Link></li>
                        <li className="cat"><Link to ="/dashboard/categorias">Categorias</Link></li>
                        <li className="serv"><Link to ="servicios">Servicios</Link></li>
                        <li className="cont"><Link to ="/dashboard/albums">Albums</Link></li>
                        <li className="logout"><Link to ="/dashboard/lougout">Cerrar Sesion</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </MenuDash>
    )
}