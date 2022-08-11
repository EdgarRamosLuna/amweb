import React, { useState, useEffect } from 'react';
import { Button, ModalCat } from '../../styles/Categories';
import axios from 'axios';
export default function UpdateService(props){
    const {closeModal, idSer, newData} = props;
    const [name , setName] = useState();
    const [service, setService] = useState();
    const [imgBg, setImgBg] = useState();
    const [file, setFile] = useState();
    const [fileStatus, setFileStatus] = useState(false);
    const [desc, setDesc] = useState('');
    console.log(idSer);
    const saveFile = (e) => {
        setFile(e.target.files[0]);
    };
    useEffect(() => {
        axios.post('https://amfotografiatest.herokuapp.com/api/service/getserdata', {idser: idSer}).then(res =>{
            const serviceData = res.data[0];
            
            setName(serviceData.name.replaceAll('-', ' '));
            setService(serviceData.service);
            setImgBg(serviceData.bgimage);
            setDesc(serviceData.desc);
        }).catch(err =>{
            console.log(err);
        });
      }, []);
    const handleModalContainerClick = (e) => e.stopPropagation();
    const hideModal = ()=>{
        if(typeof(closeModal) == 'function'){
            closeModal();
        }
    }
    const [btnStatus, setBtnStatus] = useState(false);
    const editarCategoria = () =>{
        setBtnStatus(true);
        if(file === undefined || file === ""){
            let categoria = {
                name: name.replaceAll(' ', '-'),
                service:service,
                idser:idSer,
                desc:desc,
            }
            axios.post('https://amfotografiatest.herokuapp.com/api/service/update', categoria)
            .then(res => {
                alert(res.data);
                hideModal();
                const newDatadb = {
                    "name":categoria.name,
                    "bgimage":imgBg,
                    "idSer":categoria.idSer,
                }
                newData(newDatadb);
                setBtnStatus(false);
            })
            .then(err => {console.log(err)});
        }else{
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "dwkjkvku");
            formData.append("folder", "test");

            axios.post(
              "https://api.cloudinary.com/v1_1/loboelegante/image/upload",
                formData
                ).then((response) =>{
                    let categoria = {
                        name: name.replaceAll(' ', '-'),
                        bgimage: response.data.secure_url,
                        idser:idSer,
                        desc:desc

                    }
                    axios.post('https://amfotografiatest.herokuapp.com/api/service/update', categoria)
                    .then(res => {
                        alert(res.data);
                        hideModal();
                        
                        const newDatadb = {
                            "name":categoria.name,
                            "bgimage":categoria.bgimage,
                            "idser":categoria.idSer,
                        }
    
                        newData(newDatadb);
                        setBtnStatus(false);
                    })
                    .then(err => {console.log(err)});
            });
        }
        
            
        }
        
        const fileCustom = (e) =>{
            let input = document.getElementById("inputTag");
            let imageName = document.getElementById("imageName")
            let imgPre = document.getElementById("resultimg");
            input.addEventListener("change", (e)=>{
                let inputImage = document.querySelector("input[type=file]").files[0];
                let imgPre  = URL.createObjectURL(e.target.files[0]);
                imageName.innerText = inputImage.name;
                document.getElementById("resultimg").src = imgPre; 
                document.getElementById("imgDb").src="";
                setFileStatus(true);
            })
        }
        const removeFile = () =>{
            let imageName = document.getElementById("imageName");
            let imgPre = document.getElementById("resultimg");
            imageName.innerText = "";
            imgPre.src = "";
            
            setFile(imgBg);
            setFileStatus(false);
            document.getElementById("imgDb").src=imgBg;
        }
        
    return(
        <ModalCat onClick={hideModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <div className="btn-modal-close">
                    <button onClick={hideModal}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <h1>Editar Servicio</h1>
                <div className="cat-container">
                    <div className="cat-form">
                        <div className="cat-form-input">
                            <label htmlFor="titulo">Titulo del Servicio</label>
                            <input type="text" name="" value={name} onChange={(e)=> {setName(e.target.value)}} />
                        </div>
                        <div className="cat-form-input">
                                <label htmlFor="desc">Descripcion</label>
                                <textarea id="desc" value={desc} onChange={(e)=> {setDesc(e.target.value)}} maxLength="200"></textarea>
                        </div>
                        <div className="cat-form-input">
                            <label htmlFor="titulo">Portada de la Categoria</label>
                            <img src={imgBg} alt="" id="imgDb" />
                            <div className="custom-file-btn" >
                                    <label htmlFor="inputTag">
                                        <i className="fa-solid fa-camera" onClick={fileCustom}></i>
                                        <input type="file" className="form-control" name="" onChange={saveFile} id="inputTag"/>
                                    </label>
                                    <div className="imgFile" style={{display:fileStatus ? "flex" : "none"}}>
                                        <button onClick={removeFile}><i class="fa-solid fa-trash"></i></button>
                                        <img src="" alt="" id="resultimg" />
                                    </div>
                                    <span id="imageName"></span>
                                    
                            </div>
                        </div>
                        <div className="cat-form-input">
                            <Button onClick={editarCategoria} disabled={btnStatus}>Guardar Cambios</Button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalCat>
        
    )
}