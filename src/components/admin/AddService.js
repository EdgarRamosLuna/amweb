import React, { useState } from 'react';
import { Button, ModalCat } from '../../styles/Categories';
import axios from 'axios';
import uniqid from 'uniqid';
export default function AddService(props){
    const {closeModal, newData} = props;
    const [titulo, setTitulo] = useState('');
    const [file, setFile] = useState();
    const [desc, setDesc] = useState('');
    const handleModalContainerClick = (e) => e.stopPropagation();
    const hideModal = ()=>{
        if(typeof(closeModal) == 'function'){
            closeModal();
        }
    }
    const saveFile = (e) => {
        setFile(e.target.files[0]);
    };
    const guardarServicio = () =>{
        
        const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "dwkjkvku");
            formData.append("folder", "test");
            axios.post(
              "https://api.cloudinary.com/v1_1/loboelegante/image/upload",
                formData
                ).then((response) =>{
                    let categoria = {
                        name: titulo.replaceAll(' ', '-'),
                        bgimage: response.data.secure_url,
                        idser: uniqid(),
                        desc:desc,
                    }
                    axios.post('https://amfotografiatest.herokuapp.com/api/service/add', categoria)
                    .then(res => {
                        alert(res.data);
                        hideModal();
                        
                        const newDatadb = {
                            "name":categoria.name,
                            "bgimage":categoria.bgimage,
                            "idser":categoria.idser,
                        }
                        newData(newDatadb);
                    })
                    .then(err => {console.log(err)});
            });
            
        }
        const fileCustom = (e) =>{
            let input = document.getElementById("inputTag");
            let imageName = document.getElementById("imageName")
            input.addEventListener("change", (e)=>{
                let inputImage = document.querySelector("input[type=file]").files[0];
                let imgPre  = URL.createObjectURL(e.target.files[0]);
                imageName.innerText = inputImage.name;
                document.getElementById("resultimg").src = imgPre; 
            })
        }
        const removeFile = () =>{
            let imageName = document.getElementById("imageName");
            let imgPre = document.getElementById("resultimg");
            imageName.innerText = "";
            imgPre.src = "";
            setFile("");

        }
        return(
            <ModalCat onClick={hideModal}>
                <div className="modal-container" onClick={handleModalContainerClick}>
                    <div className="btn-modal-close">
                        <button onClick={hideModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <h1>Agregar Nuevo Servicio</h1>
                    <div className="cat-container">
                        <div className="cat-form">
                            <div className="cat-form-input">
                                <label htmlFor="titulo">Titulo del Servicio</label>
                                <input type="text" id="titulo" value={titulo} onChange={(e)=> {setTitulo(e.target.value)}} />
                            </div>
                            <div className="cat-form-input">
                                <label htmlFor="desc">Descripcion</label>
                                <textarea id="desc" value={desc} onChange={(e)=> {setDesc(e.target.value)}} maxLength="200"></textarea>
                            </div>
                            <div className="cat-form-input">
                                <label htmlFor="titulo">Portada del Servicio</label>
                                <div className="custom-file-btn" >
                                    <label htmlFor="inputTag">
                                        <i className="fa-solid fa-camera" onClick={fileCustom}></i>
                                        <input type="file" className="form-control" name="" onChange={saveFile} id="inputTag"/>
                                    </label>
                                    <div className="imgFile" style={{display:file ? "flex" : "none"}}>
                                        <button onClick={removeFile}><i class="fa-solid fa-trash"></i></button>
                                        <img src="" alt="" id="resultimg" />
                                    </div>
                                    
                                    <span id="imageName"></span>
                                    
                                </div>
                                
                        </div>
                        <div className="cat-form-input">
                            <Button onClick={guardarServicio}>Guardar Servicio</Button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalCat>
        
    )
}