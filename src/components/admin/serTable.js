import "bootstrap/dist/css/bootstrap.css";
import React, {useEffect, useState} from "react";
import { Col, Row, Table } from "react-bootstrap";
import axios from 'axios';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";


// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
  {
    prop: "name",
    title: "Nombre del Servicio",
    isFilterable: true,
    isSortable: true
  },
  {
    prop: "img",
    title: "Portada"
  },
  {
    prop: "btnActions",
    title: ""
  },
];

// Then, use it in a component.
export default function SerTable(props) {
  const {editBtn, newData} = props;
  const [dataCategoria, setDataCategoria] = useState([]);
    useEffect(() => {
        axios.get('https://amfotografiatest.herokuapp.com/api/service/getdata').then(res =>{
           // console.log(res.data);
            setDataCategoria(res.data);
        }).catch(err =>{
            console.log(err);
        });
    }, [newData]);

  const data = [{}];

  const borrarCat = (idcat) =>{
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id '${idcat}'`);
    let hola = 1;
        if(hola ==1){
            axios.post('https://amfotografiatest.herokuapp.com/api/service/deleteser', {idser:idcat})
            .then(res => {
              setDataCategoria(prev=>{
                    return prev.filter(categoria=>categoria.idser!=idcat) 
                })
                alert(res.data);
            })
            .catch(err =>{
                console.log(err);
            });
        }else{
            return;
        }
        
   
}
  for (let i = 0; i < dataCategoria.length; i++) {
    
    const idser = dataCategoria[i].idser;
    const name = dataCategoria[i].name.replaceAll('-', ' ');
    let serviceTxt = "";
    const img = <img className="cat-db-img" src={dataCategoria[i].bgimage} alt="" />;
    const btnActions = <div className="btnActionsCont"><button className="btnEdit" type="button" onClick={()=> editBtn(idser)}><i class="fa-solid fa-pen-to-square"></i></button><button type="button" onClick={() => borrarCat(idser)} className="btnDel"><i class="fa-solid fa-trash"></i></button></div>;
    data.push({"name":name, "img":img,"btnActions":btnActions});
  }
  data.shift();
  return (
    <DatatableWrapper
      body={data}
      headers={STORY_HEADERS}
      
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20]
        }
      }}
    >
      <Row className="mb-4 p-2">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>
      <Table >
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
}
