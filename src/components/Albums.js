import React,{useState, useEffect, useContext} from 'react';
import { Link, useParams, redirect, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { BtnBack, ContentS, ImgAlbum, ItemContainer, PortadaBg } from '../styles/HomeStyle';
//import ImageRenderer from './helpers/ImageRenderer';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TaskContext } from './context/TaskContext';
function Albums(){
    const params = useParams();
    const location = useLocation();
    const hash  = location.state;
    const idcont = hash.id;
    const portadaD = hash.portada;
    const navigate = useNavigate();
   
    const [datacat, setDatacat] = useState([]);
    const [datapho, setDatapho] = useState([]);
    const [datapor, setDatapor] = useState([]);
    
    
    const noId = (id) =>{
        if(id === '' || id.length == 0){
            window.location.href = "/comercial";
            return false;
        }
    }
    noId(idcont);
    console.log(idcont);
    useEffect(() => {
        axios.post('https://amfotografiatest.herokuapp.com/api/photos/getdatabyid', {idcont:idcont}).then(res =>{
            //noId(res.data);
        //    console.log(res.data)
            let categoryDataMain = res.data;
            if(res.data == ""){
                setDatapho(portadaD);
            }
           
            for (let i = 0; i < categoryDataMain.length; i++) {
            /*    const img = new Image();
                img.addEventListener("load", () => {
                console.log(img.naturalWidth, img.naturalHeight);
                categoryDataMain[i]['width'] = img.naturalWidth;
                categoryDataMain[i]['height'] = img.naturalHeight;
                });
                img.src = categoryDataMain[i].img;*/
                const portada = categoryDataMain[i].portada;
                console.log(portada);
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
    const {HeaderFront} = useContext(TaskContext);
    var imgwi = [];
    var imghi;
    var imgwStatus = 0;
    const listacont = datacat.map((photos, index) =>{
       
     //   console.log(index);
       /* img2.addEventListener("load", () => {
                //console.log(, img.naturalHeight);
                imgwi.push(img.naturalWidth);

            //    imghi = img.naturalHeight;
                imghi = img.naturalHeight;
                if(imgwi <= 720){
                    imgwStatus = 1;
                }
                
                
              //  console.log(imgwi)
                
        });*/
       // console.log(imghi);
       // console.log(imgwStatus)
        const img2 = new Image();
        img2.src = photos.img;
        const nw = img2.naturalWidth;
        return(
                <ImgAlbum>
                    <LazyLoadImage
                    effect="blur"
                    src={photos.img}
                    className="test"
                    />
                    
                </ImgAlbum>
                /*<ImageRenderer
                    key={photos.idimg}
                    url={photos.img}
                    width={photos.width}
                    height={photos.height}
                />*/
                
                
            )
    });
    return(
        <>
            <ItemContainer>
            
            <HeaderFront></HeaderFront>
            {/*<BtnBack><button onClick={()=> navigate(-1)} className="btnBack"><i className="fa-solid fa-arrow-left"></i></button ></BtnBack>*/}
            <PortadaBg bg={bgI} title={title} w={imgw} h={imgh}></PortadaBg>
        
            <div className="photos-container">
                {listacont}
            </div>        
            </ItemContainer>
        </>
       
    )
    
}
export default (Albums);