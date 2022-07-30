import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { DashboardS } from '../../styles/Dashboard';
import Categories from './Categories';
export default function Dashboard(){
    return(
        <DashboardS>
            <h1>Ultimas categorias</h1>
        </DashboardS>
    )
}