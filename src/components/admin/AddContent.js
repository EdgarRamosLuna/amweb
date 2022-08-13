import React, { useState, useEffect, useCallback } from 'react';
import { Button, ContentS } from '../../styles/Content';
import axios from 'axios';
import uniqid from 'uniqid';
import CloudinaryUploadWidget from '../helpers/CloudinaryUploadWidget';
import Notify from './Notify';
import DrivePicker from '../helpers/DrivePicker';
export default function AddContent(props){
    const {closeModal, newData} = props;
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [file, setFile] = useState('');
    const [desc, setDesc] = useState('');
    const handleModalContainerClick = (e) => e.stopPropagation();
    const [noimg, setNoimg] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [noPor, setNoPor] = useState(false);
    const [fieldname, setFieldname] = useState(""); 
    const hideModal = ()=>{
        if(typeof(closeModal) == 'function'){
            closeModal();
        }
    }
    const [idcont, setIdcont] = useState();
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        
    };
    const [dataCats, setDataCats] = useState([]);
    useEffect(() => {
        axios.get('https://amfotografiatest.herokuapp.com/api/category/getdata').then(res =>{
            console.log(res.data);
            setDataCats(res.data);
        }).catch(err =>{
            console.log(err);
        });
   //     return () => console.log("Cleanup..");
    }, []);
 
   const initialState = {
    idimg: "",
    img: "",
    idcont: null,
    portada: 0,
   };
    const [portada, setPortada] = useState(0);
    const [imgCont, setImgCont] = useState('');
    const [ntfyStatus, setNtfyStatus] = useState(0);
    const isPortada = useCallback((id) =>{
       
       for (let i = 0; i < imgCont.length; i++) {
        const imgId = imgCont[i].idimg;
        imgCont[i].portada = 0;
        if (imgId === id) {
                imgCont[i].portada = 1;
                console.log(imgCont);
                setPortada(1);
                setNtfyStatus(prevState => !prevState);
                setTimeout(() => {
                    if(ntfyStatus === 1){
                        setNtfyStatus(1);
                       
                    }else{
                        setNtfyStatus(0);
                    
                    }

                }, 3000);
        }
        
       }
       
       bgAdd();
    });
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
            setImgCont(prevImages => ([...prevImages, { 'idimg': uniqid(), 'img': img, 'idcont': '', 'portada': 0, "tumbnail":tumb}]));
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
    const bgAdd = () =>{
    
        const ic = document.querySelectorAll(".fa-circle-check");
        for (const i of ic) {
            i.classList.remove('no-por');
        }
    }
    const guardarCategoria = () =>{
        
        
        let content = {
            idcont:uniqid(),
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
        axios.post('https://amfotografiatest.herokuapp.com/api/content/add', content)
        .then(res => {
            alert(res.data);
            
            for (let i = 0; i < imgCont.length; i++) {
                imgCont[i].idcont = content.idcont;
            }
            axios.post('https://amfotografiatest.herokuapp.com/api/photos/add', imgCont)
            .then(res => {
                alert(res.data);
                
            })
        })
            
        }
        const categorias = dataCats.map((category, index) =>{
            return(
                <>  
                    <option key={index} value={category.idcat}>{category.name.replaceAll("-", " ")}</option>
                </>
            )
        });
      /*  const imgcontenido = arrayImg.map(imgs =>{
                return(
                    <>
                        <div className="img-album"><div className="select-bg"><i class="fa-solid fa-circle-check"></i></div> <img src={imgs.img} alt="" /></div>
                    </>
                );
        });*/

        
        return(
            <>
                {ntfyStatus ? <Notify closeModal={()=> setNtfyStatus(prevState => !prevState)}>Portada seleccionada</Notify> : ""}
                {noimg ? <Notify closeModal={()=> setNoimg(prevState => !prevState)}>Sebes seleccionar almenos una imagen para continuar</Notify> : ""}
                {isEmpty ? <Notify closeModal={()=> setIsEmpty(prevState => !prevState)}>El campo {fieldname} es obligatorio.</Notify> : ""}
                {noPor ? <Notify closeModal={()=> setNoPor(prevState => !prevState)}>Debes seleccionar una imagen de portada para continuar.</Notify> : ""}
                <ContentS>
                
                    <div className="modal-container" onClick={handleModalContainerClick}>
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
                                        onChange={(e) => {setCategoria(e.target.value); 
                                        if(e.target.value !== 0){
                                            removeFocus("categoria");
                                        }else{
                                            focusInput("categoria");
                                        }}} 

                                        id="categoria"
                                        
                                        >
                                        <option value="0" selected>Selecciona una categoria</option>
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
                                                    <div className="select-bg">
                                                        <i class={`fa-solid fa-circle-check ${image.portada == 1 ? "isPortada":""}` } onClick={()=> isPortada(image.idimg)}></i>
                                                    </div>
                                                    {/*isBrowser == "Firefox" ? <img src={image.img} alt="" className="tumb-f" /> : <img src={image.tumbnail} alt="" />*/}
                                                    <img src={image.tumbnail} alt="" />
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