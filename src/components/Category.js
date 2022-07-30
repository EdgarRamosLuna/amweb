import React,{useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
export default function Category(){
    const params = useParams();
    const location = useLocation()
    const hash  = location.hash;

    const catId = hash.replaceAll('#', '');
    
    const [datacat, setDatacat] = useState([]);
    const [name , setName] = useState();
    const [service, setService] = useState();
    const [imgBg, setImgBg] = useState();

    useEffect(() => {
        axios.post('/api/content/getcontbycat', {idcat:catId}).then(res =>{
            const categoryData = res.data;
            setDatacat(res.data)
            console.log(categoryData);
        }).catch(err =>{
            console.log(err);
        });
      }, []);

    const listacat = datacat.map(category =>{
        
        return(
                <div key={category.idcont} className="item-container">
                    
                    <Link to={{pathname: `/comercial/${category.name}`, hash: category.idcont}}>
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

        <>
        <Link to="/comercial/">Comercial</Link>
        <h1>{params.name.replaceAll('-', ' ')}</h1>
            {listacat}
        </>
    )
    
}