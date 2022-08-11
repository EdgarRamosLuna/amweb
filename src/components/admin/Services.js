import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Button, CategoriesS } from '../../styles/Categories';
import AddService from './AddService';
import SerTable from './serTable';
import UpdateService from './UpdateService';

export default function Services(){
    const [showCat, setShowCat] = useState(false);
    const [idSer, setIdSer] = useState();
    const [newDatadb, setNewDatadb] = useState();
    const showModalCat = () =>{
        setShowCat(true)
    }
    const hideModalCat = () =>{
        setShowCat(false);
    }
    const [showUCat, setShowUCat] = useState(false);
    const showModalUCat = (id) =>{
        setShowUCat(true);
        setIdSer(id);
    }
    const hideModalUCat = () =>{
        setShowUCat(false);
    }
    const newData = (data) =>{
    //    setNewDatadb(data);
    }
    
    return(
        <>
            { showCat && <AddService closeModal={hideModalCat} newData={newData} />} 
            { showUCat && <UpdateService closeModal={hideModalUCat} idSer={idSer} newData={newData} />} 
            <CategoriesS>
            
                <div className="cat-container">
                    <h1>Servicios</h1>
                    <div className="cat-btn">
                        <Button onClick={showModalCat}>Agregar Servicio</Button>
                    </div>
                    <div className="cat-table">
                        <SerTable editBtn={showModalUCat} newData={newData}  />
                    </div>
                </div>
                
                
            </CategoriesS>
        </>
        
    )
}