import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { CategoryCont, PortadaBg } from '../styles/HomeStyle';
import { HashLink } from 'react-router-hash-link';
export default function Comercial(){
    const [datacat, setDatacat] = useState([]);
    const [name , setName] = useState();
    const [service, setService] = useState();
    const [imgBg, setImgBg] = useState();

    useEffect(() => {
        axios.post('/api/category/getcatbyser', {service: 1}).then(res =>{
            const categoryData = res.data;
            setDatacat(res.data)
        }).catch(err =>{
            console.log(err);
        });
      }, []);
    const listacat = datacat.map(category =>{
        
        return(
                <div key={category.idcat} className="item-container">
                    
                    <Link to={{pathname: `/comercial/${category.name}`, hash: category.idcat}}>
                        <div className="cat-item">
                            <div className="catBg">
                                <img src={category.bgimage} alt="" />
                                <div className="catLabel">
                                    <h1>{category.name.replaceAll('-', ' ')}</h1>
                                    <p>{category.desc}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
    });
    const bgI = "assets/img/bgComercial.jpg";
    return(

        <CategoryCont>
            <HashLink  to={{pathname: "/", hash: "#servicios"}} className="btnBack"><i className="fa-solid fa-arrow-left"></i></HashLink >
        <PortadaBg bg={bgI}></PortadaBg>
        <div className="catContainer">
            {listacat}
        </div>        
        </CategoryCont>
    )
}