import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { BtnBack, CategoryCont, CustomContainer, CustomContainer2, ItemContainer, PortadaBg } from '../styles/HomeStyle';
import { HashLink } from 'react-router-hash-link';
export default function Comercial(){
    const [datacat, setDatacat] = useState([]);
    const [datser, setDatser] = useState([]);
    const [name , setName] = useState();
    const [service, setService] = useState();
    const [imgBg, setImgBg] = useState();
    const location = useLocation()
    const hash  = location.hash;
    const navigate = useNavigate();
    const catId = hash.replaceAll('#', '');
    const nameService = location.pathname.toLowerCase();
    useEffect(() => {
        axios.post('https://amfotografiatest.herokuapp.com/api/category/getcatbyser', {service: catId}).then(res =>{
            const categoryData = res.data;
            setDatacat(res.data)
            axios.post('https://amfotografiatest.herokuapp.com/api/service/getserdata', {idser: catId}).then(res =>{
              //  const categoryData = res.data;
                setDatser(res.data[0].bgimage);
            }).catch(err =>{
                console.log(err);
            });
        }).catch(err =>{
            console.log(err);
        });
      }, []);
    const listacat = datacat.map(category =>{
        
        return(
                <div key={category.idcat} className="item-container">
                    
                    <Link to={{pathname: `${nameService}/${category.name}`, hash: category.idcat}}>
                        <CustomContainer2 className="item" bgI={category.bgimage}>
                            <div className="bg">
                                <div className="label">
                                    <h1>{category.name.replaceAll('-', ' ')}</h1>
                                    <p>{category.desc}</p>
                                </div>
                            </div>
                        </CustomContainer2>
                    </Link>
                </div>
            )
    });
    const img = new Image();
    const [imgw, setImgw] = useState();
    const [imgh, setImgh] = useState();
    img.addEventListener("load", () => {
            //console.log(, img.naturalHeight);
            setImgw(img.naturalWidth);
            setImgh(img.naturalHeight);
     });
    const bgI = datser;
    img.src = datser;
    const title = nameService.replaceAll("servicio", "").replaceAll("/", "");
    return(

        <ItemContainer>
            <BtnBack><HashLink  to={{pathname: "/", hash: "#servicios"}} className="btnBack"><i className="fa-solid fa-arrow-left"></i></HashLink ></BtnBack>
        <PortadaBg bg={bgI} title={title} w={imgw} h={imgh}></PortadaBg>
        <div className="items-container">
            {listacat}
        </div>        
        </ItemContainer>
    )
}