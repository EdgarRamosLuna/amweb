import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Button, ContentS } from '../../styles/Content';
import axios from 'axios';
import uniqid from 'uniqid';
import CloudinaryUploadWidget from '../helpers/CloudinaryUploadWidget';
import Notify from './Notify';
import DrivePicker from '../helpers/DrivePicker';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

export default function UpdateContent(props){
    const {removeImg, setImgCont, imgCont, isPortada, ntfyStatus, setNtfyStatus, portada, isLocal, categorias, categoria, setCategoria} = useContext(TaskContext);
    const [titulo, setTitulo] = useState('');
    const [desc, setDesc] = useState('');
    
    const [noimg, setNoimg] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [noPor, setNoPor] = useState(false);
    const [fieldname, setFieldname] = useState(""); 
    const idCont = useParams();
    const [dataCont, setDataCont] = useState([]);
    const [dataPhot, setDataPhot] = useState([]);
    const [idcont, setIdcont] = useState();

    useEffect(() => {
        setImgCont([]);
        axios.post('https://amfotografiatest.herokuapp.com/api/content/getcontbyid', idCont).then(res =>{
          //  console.log(res.data);
            setDataCont(res.data);
            setTitulo(res.data[0].name);
            setDesc(res.data[0].desc);
            setCategoria(res.data[0].idcat);
            axios.post('https://amfotografiatest.herokuapp.com/api/photos/getdatabyid', idCont).then(res =>{
             //   console.log(res.data);
                const dataImg = res.data;
                setDataPhot(dataImg);
                for (let i = 0; i < dataImg.length; i++) {
                        const dataPho = dataImg[i];
                       /* https://drive.google.com/uc?export=view&id=
https://drive.google.com/thumbnail?id=*/
                        const tumbanil = dataPho['img'].replaceAll("https://drive.google.com/uc?export=view&id=", "");
                        setImgCont(prevImages => ([...prevImages, { 'idimg': dataPho['idimg'], 'img': dataPho['img'], 'idcont':dataPho['idcont'], 'portada': dataPho['portada'], "tumbnail":`${isLocal ? `https://drive.google.com/uc?export=view&id=${tumbanil}`:`https://drive.google.com/thumbnail?id=${tumbanil}`}`}]));
                     //  console.log(tumbanil);
                }
                
                
            }).catch(err =>{
                console.log(err);
            });
            
        }).catch(err =>{
            console.log(err);
        });
        

    
   //     return () => console.log("Cleanup..");
    }, []);
 
    
    const [isBrowser, setIsBrowser] = useState(null);
   
    const getImg = useCallback((img, tumb) =>{
        //setSetimages(images => [...images, img]);
        //arrayImg.push({'idimg':uniqid(),'img':img, 'idcont':'', 'portada':0});
       
        if (navigator.userAgent.includes("Firefox")) {
            setIsBrowser('Firefox');
        }
        if (navigator.userAgent.includes("Chrome")) {
            setIsBrowser('Chrome');
        }

        if(img.length > 0){
            setImgCont(prevImages => ([...prevImages, { 'idimg': uniqid(), 'img': img, 'idcont': '', 'portada': 0, 'tumbnail':`${isLocal ? img:tumb}`}]));
        }
        
       /* for (let h = 0; h < arrayImg.length; h++) {
            arrayImgC.push(<div className="img-album"><div className="select-bg"><i class="fa-solid fa-circle-check"></i></div> <img src={arrayImg[h].img} alt="" /></div>);
            setImgCont(...imgCont,arrayImgC);
        }*/

        
     //   setImgCont(arrayImg);


    }, [imgCont, setImgCont])
   
    const disabledBtn = () =>{
        document.getElementById("guardarCat").disabled = !true;
    }
    const focusInput = (id) =>{
        document.getElementById(id).focus();
        document.getElementById(id).classList.add('focus-input');
    }
    const removeFocus = (id) =>{
        document.getElementById(id).classList.remove('focus-input');
    }
    const noBg = () =>{
            document.getElementById("guardarCat").disabled = true;
            const ic = document.querySelectorAll(".fa-circle-check");
            for (const i of ic) {
                i.classList.add('no-por');
            }
    }
    
    const guardarCategoria = () =>{
        
        
        let content = {
            idcont:idCont['idcont'],
            name: titulo.replaceAll(' ', '-'),
            idcat: categoria,
            desc:desc,
        }
       
    /*    titulo
categoria
desc*/
        if(titulo.length == 0){
            setIsEmpty(prev => !prev);
            document.getElementById("guardarCat").disabled = true;
            setFieldname("Titulo");
            focusInput("titulo");
                setTimeout(() => {
                    if(isEmpty === true){
                      //  console.log("asdsd");
                                setIsEmpty(true);
                            }else{
                                disabledBtn();
                                setIsEmpty(false);
                            }

                        }, 3000);

            return false;
        }else{
            removeFocus("titulo");
        }
        if(desc.length == 0){
            setIsEmpty(prev => !prev);
            document.getElementById("guardarCat").disabled = true;
            setFieldname("Descripcion");
            focusInput("desc");
                setTimeout(() => {
                    if(isEmpty === 1){
                                setIsEmpty(true);
                            }else{
                                disabledBtn();
                                setIsEmpty(false);
                            }

                        }, 3000);

            return false;
        }else{
            removeFocus("desc");
        }
        if(categoria == 0){
            setIsEmpty(prev => !prev);
            document.getElementById("guardarCat").disabled = true;
            setFieldname("Categoria");
            focusInput("categoria");
                setTimeout(() => {
                    if(isEmpty === 1){
                                setIsEmpty(true);
                            }else{
                                disabledBtn();
                                setIsEmpty(false);
                            }

                        }, 3000);

            return false;
        }
        
        if(imgCont.length == 0){
            setNoimg(prev => !prev);
            document.getElementById("guardarCat").disabled = true;
                setTimeout(() => {
                    if(noimg === 1){
                                setNoimg(true);
                            }else{
                                disabledBtn();
                                setNoimg(false);
                            }

                        }, 3000);

            return false;
        }
        if(portada == 0){
            setNoPor(true);
            noBg();
                setTimeout(() => {
                    if(noPor === false){
                        setNoPor(false);
                    }else{
                        setNoPor(true);           
                    }
                    disabledBtn();
            }, 3000);
            
            return false;
        }
        setIdcont(content.idcont);
        axios.post('https://amfotografiatest.herokuapp.com/api/content/update', content)
        .then(res => {
            alert(res.data);
            
            for (let i = 0; i < imgCont.length; i++) {
                imgCont[i].idcont = content.idcont;
                console.log(content.idcont);
            }
            axios.post('https://amfotografiatest.herokuapp.com/api/photos/update', imgCont)
            .then(res => {
                alert(res.data);
                
            })
        })
            
        }
        const deleteTest = () =>{
            axios.post('https://amfotografiatest.herokuapp.com/api/photos/update', imgCont)
            .then(res => {
                alert(res.data);
                
            })
        }
        return(
            <>
                {ntfyStatus ? <Notify closeModal={()=> setNtfyStatus(prevState => !prevState)}>Portada seleccionada</Notify> : ""}
                {noimg ? <Notify closeModal={()=> setNoimg(prevState => !prevState)}>Sebes seleccionar almenos una imagen para continuar</Notify> : ""}
                {isEmpty ? <Notify closeModal={()=> setIsEmpty(prevState => !prevState)}>El campo {fieldname} es obligatorio.</Notify> : ""}
                {noPor ? <Notify closeModal={()=> setNoPor(prevState => !prevState)}>Debes seleccionar una imagen de portada para continuar.</Notify> : ""}
                <ContentS>
                
                    <div className="modal-container">
                        <h1>Agregar Nuevo Album</h1>
                        <div className="cat-container">
                         
                            <div className="cat-form">
                                <div className="cat-form-input">
                                    <label htmlFor="titulo">Titulo del album</label>
                                    <input type="text" id="titulo" value={titulo} onChange={(e)=> {setTitulo(e.target.value); removeFocus("titulo")}} />
                                </div>
                                <div className="cat-form-input">
                                    <label htmlFor="desc">Descripcion</label>
                                    <textarea id="desc" value={desc} onChange={(e)=> {setDesc(e.target.value); removeFocus("desc")}} maxLength="200"></textarea>
                                </div>
                                <div className="cat-form-input">
                                    <label htmlFor="titulo">Categoria</label>
                                    <select 
                                        value={categoria} 
                                        defaultValue={categoria}
                                        onChange={(e) => {setCategoria(e.target.value); 
                                        if(e.target.value !== 0){
                                            removeFocus("categoria");
                                        }else{
                                            focusInput("categoria");
                                        }}} 

                                        id="categoria"
                                        
                                        >
                                        <option value="0">Selecciona una categoria</option>
                                        {categorias}
                                    </select>
                                </div>
                                <div className="cat-form-input">
                                    <label htmlFor="titulo">Contenido del album</label>
                                    {/*<CloudinaryUploadWidget getImg={getImg} />
                                    <center><b>O</b></center>*/}
                                    <DrivePicker getImg={getImg} />
                                    
                                    <Button onClick={guardarCategoria} id="guardarCat">Guardar Categoria</Button>

                                    <div className="img-content" id="img-cont">
                                
                                    {
                                        imgCont && 
                                        imgCont.map((image, index) => 
                                                
                                                <div class="img-album" key={image.idimg}>
                                                    <div className="removeImg">
                                                        <i class="fa-solid fa-trash" onClick={()=> removeImg(image.idimg)}></i>
                                                    </div>
                                                    <div className="select-bg">
                                                        <i class={`fa-solid fa-circle-check ${image.portada == 1 ? "isPortada":""}` } onClick={()=> isPortada(image.idimg)}></i>
                                                    </div>
                                                    {/*isBrowser == "Firefox" ? <img src={image.img} alt="" className="tumb-f" /> : <img src={image.tumbnail} alt="" />*/}
                                                    <img src={image.tumbnail} alt="" className={`${isLocal ? "tumb-f":""}`} />
                                                </div>

                                        )
                                    }
                                    </div>
                                    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </ContentS>
            </>
            
        
    )
}