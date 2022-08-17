import axios from 'axios';
import React, {createContext, useState, useEffect, useCallback} from 'react'
import { useLocation } from 'react-router-dom';

export const TaskContext = createContext();
export function TaskContextProvider(props){
  const {children} = props;
  const [imgCont, setImgCont] = useState('');
  const [dataCats, setDataCats] = useState([]);
  const [portada, setPortada] = useState(0);
  const [ntfyStatus, setNtfyStatus] = useState(0);
  const [isLocal, setIsLocal] = useState(false);
  const [categoria, setCategoria] = useState('');
  const location = useLocation();
  const handleModalContainerClick = (e) => e.stopPropagation();
  const [dataCategoria, setDataCategoria] = useState([]);
  useEffect(() => {
    
    axios.get('https://amfotografiatest.herokuapp.com/api/category/getcatdatabyid').then(res =>{
        //    console.log(res.data);
            setDataCats(res.data);
    }).catch(err =>{
            console.log(err);
    });
    
  }, []);
  const removeImg = (id) =>{
    setImgCont(prev=>{
        return prev.filter(imgs=>imgs.idimg!=id);
    });
  }
  const bgAdd = () =>{
    
    const ic = document.querySelectorAll(".fa-circle-check");
    for (const i of ic) {
        i.classList.remove('no-por');
    }
  }
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
 const categorias = dataCats.map((category, index) =>{
    return(
        <>  
            <option key={index} value={category.idcat}>{category.name.replaceAll("-", " ")}</option>
        </>
    )
});
const borrarCat = (idcat) =>{
  let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id '${idcat}'`);
          if(isDelete){
            axios.post('https://amfotografiatest.herokuapp.com/api/content/delete', {idcont:idcat})
            .then(res => {
              axios.post('https://amfotografiatest.herokuapp.com/api/photos/delete', {idcont:idcat})
              .then(res => {
  
              })
              .catch(err =>{
                  console.log(err);
              });
              setDataCategoria(prev=>{
                    return prev.filter(categoria=>categoria.idcont!=idcat) 
                })
                alert(res.data);
            })
            .catch(err =>{
                console.log(err);
            });
          }
          
}
  return (
    <TaskContext.Provider value=
        {
            {
                imgCont,
                removeImg,
                setImgCont,
                dataCats,
                setDataCats,
                location,
                portada,
                setPortada,
                ntfyStatus,
                setNtfyStatus,
                isPortada,
                isLocal,
                categorias,
                categoria,
                setCategoria,
                handleModalContainerClick,
                borrarCat,
                dataCategoria,
                setDataCategoria
            }
        }>
        {children}
    </TaskContext.Provider>
  )
}

//export default TaskContextProvider