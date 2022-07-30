import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function Data(){
    const [datausuarios, setDatausuarios] = useState([]);
    useEffect(() => {
        axios.get('api/category/getdata').then(res =>{
            console.log(res.data);
            setDatausuarios(res.data);
        }).catch(err =>{
            console.log(err);
        });
    }, []);

    //Mapear lista de usuarios en objeto usuario
    const listaisuarios = datausuarios.map(usuario =>{
        return(
            <div key={usuario.idcat}>
                {usuario}
            </div>
        )
    });
    return(
        <>
            {listaisuarios}
        </>
    )
}