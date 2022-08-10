import React, { useState, useEffect } from 'react';
import { NotifyS } from '../../styles/Notify';

export default function Notify(props){
    const {children, closeModal} = props;
    const closeModalF = () =>{
        if (typeof(closeModal) == 'function');
        closeModal();
    }
    return(
        <NotifyS>
            <div className="notifyCont">
                <div className="btnClose" onClick={closeModal}>
                    <button><i class="fa-solid fa-xmark"></i></button>  
                </div>
                {children}
            </div>
        </NotifyS>
    )
}