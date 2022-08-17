import "bootstrap/dist/css/bootstrap.css";
import React, {useContext, useEffect, useState} from "react";
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
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";


// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
  {
    prop: "name",
    title: "Nombre del album",
    isFilterable: true,
    isSortable: true
  },
  {
    prop: "desc",
    title: "Descripcion",
    isFilterable: true,
    isSortable: true
  },
  {
    prop: "btnActions",
    title: ""
  },
];

// Then, use it in a component.
export default function ContTable(props) {
  const {borrarCat, dataCategoria, setDataCategoria} = useContext(TaskContext);
  const {editBtn, newData} = props;
    useEffect(() => {
        axios.get('https://amfotografiatest.herokuapp.com/api/content/getdata').then(res =>{
           // console.log(res.data);
            setDataCategoria(res.data);
        }).catch(err =>{
            console.log(err);
        });
    }, [newData]);

  const data = [{}];
  
  for (let i = 0; i < dataCategoria.length; i++) {
    
    const idcont = dataCategoria[i].idcont;
    const name = dataCategoria[i].name.replaceAll('-', ' ');
    const idcat = dataCategoria[i].idcat;
    const desc = dataCategoria[i].desc;

    const btnActions = <div className="btnActionsCont"><Link to={`/dashboard/albums/update/${idcont}`} className="btnEdit"><i class="fa-solid fa-pen-to-square"></i></Link><button type="button" onClick={() => borrarCat(idcont)} className="btnDel"><i class="fa-solid fa-trash"></i></button></div>;
    data.push({"name":name, "desc":desc,"btnActions":btnActions});
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
