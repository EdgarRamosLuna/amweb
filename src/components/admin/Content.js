import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Button, ContentS } from '../../styles/Content';
import AddContent from './AddContent';
import ConttTable from './contTable';
import UpdateCategory from './UpdateCategory';

export default function Content(){
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
            { showCat && <AddContent closeModal={hideModalCat} newData={newData} />} 
            { showUCat && <UpdateCategory closeModal={hideModalUCat} idCat={idCat} newData={newData} />} 
            <ContentS>
            
                <div className="cat-container">
                    <h1>Albums</h1>
                    <div className="cat-btn">
                        <Button><Button><Link to="add">Agregar Nuevo Album</Link></Button></Button>
                    </div>
                    <div className="cat-table">
                        <ConttTable editBtn={showModalUCat} newData={newData}  />
                    </div>
                </div>
                
                
            </ContentS>
        </>
        
    )
}