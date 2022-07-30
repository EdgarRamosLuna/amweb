import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Button, CategoriesS } from '../../styles/Categories';
import AddCategory from './AddCategory';
import CatTable from './catTable';
import UpdateCategory from './UpdateCategory';

export default function Categories(){
    const [showCat, setShowCat] = useState(false);
    const [idCat, setIdCat] = useState();
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
        setIdCat(id);
    }
    const hideModalUCat = () =>{
        setShowUCat(false);
    }
    const newData = (data) =>{
    //    setNewDatadb(data);
    }
    
    return(
        <>
            { showCat && <AddCategory closeModal={hideModalCat} newData={newData} />} 
            { showUCat && <UpdateCategory closeModal={hideModalUCat} idCat={idCat} newData={newData} />} 
            <CategoriesS>
            
                <div className="cat-container">
                    <h1>Categorias</h1>
                    <div className="cat-btn">
                        <Button onClick={showModalCat}>Agregar Categoria</Button>
                    </div>
                    <div className="cat-table">
                        <CatTable editBtn={showModalUCat} newData={newData}  />
                    </div>
                </div>
                
                
            </CategoriesS>
        </>
        
    )
}