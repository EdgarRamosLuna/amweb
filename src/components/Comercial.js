import React,{useState, useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { BtnBack, CategoryCont, CustomContainer, CustomContainer2, ItemContainer, PortadaBg } from '../styles/HomeStyle';
import { HashLink } from 'react-router-hash-link';
import { TaskContext } from './context/TaskContext';
export default function Comercial(){
    const [datacat, setDatacat] = useState([]);
    const [datser, setDatser] = useState([]);
    const [name , setName] = useState();
    const [service, setService] = useState();
    const [imgBg, setImgBg] = useState();
    const location = useLocation()

    const navigate = useNavigate();
    const hash  = location.state;
    const catId = hash.id;
    const nameService = hash.name;
    console.log(location);
    useEffect(() => {
        axios.post('https://amfotografiatest.herokuapp.com/api/category/getcatbyser', {service: catId}).then(res =>{
            const categoryData = res.data;
            setDatacat(res.data);
            console.log(res.data);
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
    const listacat = datacat.map(category =>{
        
        return(
                <div key={category.idcat} className="item-container">
                    
                    <Link to={{pathname: `${nameService}/${category.name}`}}  state={{id: category.idcat}}>
                        <CustomContainer2 className="item" bgI={category.bgimage} >
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
    
    
    const title = nameService;
    const {HeaderFront} = useContext(TaskContext);
    return(

        <ItemContainer>
        <HeaderFront></HeaderFront>    
            {/*<BtnBack><HashLink  to={{pathname: "/", hash: "#servicios"}} className="btnBack"><i className="fa-solid fa-arrow-left"></i></HashLink ></BtnBack>*/}
        <PortadaBg bg={bgI} title={title} w={imgw} h={imgh}></PortadaBg>
        <div className="items-container">
            {listacat}
        </div>        
        </ItemContainer>
    )
}