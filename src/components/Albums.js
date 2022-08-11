import React,{useState, useEffect} from 'react';
import { Link, useParams, redirect, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { BtnBack, ContentS, ItemContainer, PortadaBg } from '../styles/HomeStyle';
//import ImageRenderer from './helpers/ImageRenderer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Albums(){
    const params = useParams();
    const location = useLocation()
    const hash  = location.hash;
    const navigate = useNavigate();
    const idcont = hash.replaceAll('#', '');

    const [datacat, setDatacat] = useState([]);
    const [datapho, setDatapho] = useState([]);
    const [datapor, setDatapor] = useState([]);
    
    
   /* const noId = (id) =>{
        if(id === '' || id.length == 0){
            window.location.href = "/comercial";
            return false;
        }
    }
    noId(name);*/
    useEffect(() => {
        axios.post('https://amfotografiatest.herokuapp.com/api/photos/getdatabyid', {idcont:idcont}).then(res =>{
            //noId(res.data);
            let categoryDataMain = res.data;
            
           
            for (let i = 0; i < categoryDataMain.length; i++) {
            /*    const img = new Image();
                img.addEventListener("load", () => {
                console.log(img.naturalWidth, img.naturalHeight);
                categoryDataMain[i]['width'] = img.naturalWidth;
                categoryDataMain[i]['height'] = img.naturalHeight;
                });
                img.src = categoryDataMain[i].img;*/
                const portada = categoryDataMain[i].portada;
                if(portada == 1){
                    setDatapor(categoryDataMain[i].img);
                }
                
            }
            setDatacat(categoryDataMain);
          //  console.log(categoryDataMain);
            
        }).catch(err =>{
            console.log(err);
        });
        
        
          
      }, []);

    const listacont = datacat.map(photos =>{
  
        return(
                /*<ImageRenderer
                    key={photos.idimg}
                    url={photos.img}
                    width={photos.width}
                    height={photos.height}
                />*/
                <LazyLoadImage
                effect="blur"
                src={photos.img} />
                
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
    const bgI = datapor;
    img.src = datapor;
    const title = params.name.replaceAll('-', ' ');
    return(
        <>
            <ItemContainer>
            <BtnBack><button onClick={()=> navigate(-1)} className="btnBack"><i className="fa-solid fa-arrow-left"></i></button ></BtnBack>
            <PortadaBg bg={bgI} title={title} w={imgw} h={imgh}></PortadaBg>
        
            <div className="photos-container">
                {listacont}
            </div>        
            </ItemContainer>
        </>
       
    )
    
}