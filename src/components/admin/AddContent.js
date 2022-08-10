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
    const [categoria, setCategoria] = useState();
    const [file, setFile] = useState();
    const [desc, setDesc] = useState('');
    const handleModalContainerClick = (e) => e.stopPropagation();
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
        axios.get('/api/category/getdata').then(res =>{
            console.log(res.data);
            setDataCats(res.data);
        }).catch(err =>{
            console.log(err);
        });
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
                setPortada(prevState => !prevState);
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
        
    });
    const getImg = useCallback((data) =>{
        //setSetimages(images => [...images, data]);
        //arrayImg.push({'idimg':uniqid(),'img':data, 'idcont':'', 'portada':0});
        setImgCont(prevImages => ([...prevImages, { 'idimg': uniqid(), 'img': data, 'idcont': '', 'portada': 0 }]));
       /* for (let h = 0; h < arrayImg.length; h++) {
            arrayImgC.push(<div className="img-album"><div className="select-bg"><i class="fa-solid fa-circle-check"></i></div> <img src={arrayImg[h].img} alt="" /></div>);
            setImgCont(...imgCont,arrayImgC);
        }*/

        
     //   setImgCont(arrayImg);


    }, [imgCont, setImgCont])
   
 
    const guardarCategoria = () =>{
        
        let content = {
            idcont:uniqid(),
            name: titulo.replaceAll(' ', '-'),
            idcat: categoria,
            desc:desc,
        }
        setIdcont(content.idcont);
        axios.post('/api/content/add', content)
        .then(res => {
            alert(res.data);
            for (let i = 0; i < imgCont.length; i++) {
                imgCont[i].idcont = content.idcont;
            }
            axios.post('/api/photos/add', imgCont)
            .then(res => {
                alert(res.data);
                
            })
        })
            
        }
        const categorias = dataCats.map(category =>{
            return(
                <>  
                    <option key={category._id} value={category.idcat}>{category.name}</option>
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
                <ContentS>
                
                    <div className="modal-container" onClick={handleModalContainerClick}>
                        <h1>Agregar Nuevo Albums</h1>
                        <div className="cat-container">
                            <div className="cat-form">
                                <div className="cat-form-input">
                                    <label htmlFor="titulo">Titulo del album</label>
                                    <input type="text" id="titulo" value={titulo} onChange={(e)=> {setTitulo(e.target.value)}} />
                                </div>
                                <div className="cat-form-input">
                                    <label htmlFor="desc">Descripcion</label>
                                    <textarea id="desc" value={desc} onChange={(e)=> {setDesc(e.target.value)}} maxLength="200"></textarea>
                                </div>
                                <div className="cat-form-input">
                                    <label htmlFor="titulo">Categoria</label>
                                    <select value={categoria} onChange={(e) => {setCategoria(e.target.value)}}>
                                        <option value="0" selected>Selecciona una categoria</option>
                                        {categorias}
                                    </select>
                                </div>
                                <div className="cat-form-input">
                                    <label htmlFor="titulo">Contenido del album</label>
                                    <CloudinaryUploadWidget getImg={getImg} />
                                    <center><b>O</b></center>
                                    <DrivePicker getImg={getImg} />
                                    <div className="img-content" id="img-cont">
                                
                                    {
                                        imgCont && 
                                        imgCont.map(image => 
                                                <div class="img-album">
                                                    <div className="select-bg">
                                                        <i class={`fa-solid fa-circle-check ${image.portada == 1 ? "isPortada":""}` } onClick={()=> isPortada(image.idimg)}></i>
                                                    </div>
                                                    <img src={image.img} alt="" />
                                                </div>

                                        )
                                    }
                                    </div>
                                    
                            </div>
                            <div className="cat-form-input">
                                <Button onClick={guardarCategoria}>Guardar Categoria</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentS>
            </>
            
        
    )
}