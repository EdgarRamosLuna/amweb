import React,{useState, useEffect} from 'react';
import { Link, useParams, redirect, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { BtnBack, ContentS, CustomContainer, ItemContainer, PortadaBg } from '../styles/HomeStyle';
export default function Category(){
    const params = useParams();
    const location = useLocation()
    const hash  = location.hash;

    const catId = hash.replaceAll('#', '');
    
    const [datacat, setDatacat] = useState([]);
    const [datapho, setDatapho] = useState([]);
    const [datapor, setDatapor] = useState([]);
    const navigate = useNavigate();
    const nameService = location.pathname.toLowerCase();
    const noId = (id) =>{
        if(id === '' || id.length == 0){
            window.location.href = "/";
            return false;
        }
    }
    noId(catId);
    useEffect(() => {
        axios.post('https://amfotografiatest.herokuapp.com/api/content/getcontbycat', {idcat:catId}).then(res =>{
            noId(res.data);
            let categoryDataMain = res.data;
            console.log(categoryDataMain);
            axios.post('https://amfotografiatest.herokuapp.com/api/category/getportadabycat', {idcat:catId}).then(res =>{
                setDatapor(res.data[0].bgimage);
            });
            //const idCont = res.data[0].idcont;
            //console.log(idCont);
            for (let i = 0; i < categoryDataMain.length; i++) {
                const idCont = categoryDataMain[i].idcont;
                axios.post('https://amfotografiatest.herokuapp.com/api/photos/getphotosbyalbum', {idcont:idCont}).then(res =>{
                    const categoryData = res.data[0];
                    
                    setDatapho(categoryData);
                    if(categoryData.idcont === idCont){
                        const imgPortada = categoryData.img;
                        categoryDataMain[i]['portada'] = imgPortada;
                       // console.log(categoryDataMain);
                    }
                }).catch(err =>{
                    console.log(err);
                });
            }
            setDatacat(categoryDataMain);
        }).catch(err =>{
            console.log(err);
        });
        
        
          
      }, []);

    const listacont = datacat.map(category =>{
        let name = category.name.replaceAll(' ', '-').toLowerCase();
        if(name.includes("+")){
            name = category.name.replaceAll('-', '').toLowerCase();
        }
        return(
                <div key={category.idcont} className="item-container">
                    
                    <Link to={{pathname: `${nameService}/${name}`, hash:category.idcont}}>
                        <CustomContainer className="item" bgI={category.portada}>
                            <div className="bg">
                                <div className="label">
                                    <h1>{category.name.replaceAll('-', ' ')}</h1>
                                    <p>{category.desc}</p>
                                </div>
                            </div>
                        </CustomContainer>
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
    const bgI = datapor;
    img.src = datapor;
    const title = params.name.replaceAll('-', ' ');
    return(
        <>
            <ItemContainer>
            <BtnBack><button onClick={()=> navigate(-1)}   className="btnBack"><i className="fa-solid fa-arrow-left"></i></button ></BtnBack>
            <PortadaBg bg={bgI} title={title} h={imgh} w={imgw}></PortadaBg>
        
            <div className="items-container">
                {listacont}
            </div>        
            </ItemContainer>
        </>
       
    )
    
}