import styled from "styled-components";

export const ContentS = styled.div`
    
    width: calc(100% - 200px);
    box-sizing: border-box;
    padding:0 35px;
    margin-left:200px;
    padding-top: 25px;
    
    .cat-container {
        display: flex;
        flex-direction: column;
        
    }   
    .cat-btn{
        display: flex;
        margin: 10px 0;
    }
    .cat-db-img{
        width:200px;
    }
    .btnActionsCont{
        display: flex ;
        justify-content: center;
        align-items:center;
        height: 100%;
    }
    .tbody-td, .tbody-tr {
        height: 100% !important;
    }
    
    .btnEdit {
        width: 50px;
        height: 50px;
        margin: 0 14px;
        background: none;
        color: #79aa21;
        border: none;
        font-size:2em;
    }
    .btnDel{
        width: 50px;
        height: 50px;
        margin: 0 14px;
        background: none;
        color: #b00000;
        border: none;
        font-size:2em;
    }
    .modal-container {
        background: #fff;
        box-sizing: border-box;
        padding: 0 ;
        position: relative;
        cursor: default;
    }
    .cat-form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 50px;
    }
    .cat-form-input {
        display: flex;
        flex-direction: column;
        label {
            padding: 10px 0;
        }
        input {
            width:100%;
            outline: none;
            height: 38px;
            box-sizing: border-box;
            padding: 7px;
        }
        select {
            width:100%;
            outline: none;
            height: 38px;
            box-sizing: border-box;
            padding: 7px;
            background: none;
            border: 1px solid #8f8f9d;
            appearance: none;
            background:url(/assets/img/angle-down.svg);
            background-repeat: no-repeat;
            background-position-x: 98%;
            background-size: 15px;
            background-position-y: center;
            cursor: pointer;
        }
        textarea{
            width:100%;
            resize:none;
            height: 300px;
            outline: none;
            box-sizing: border-box;
            padding: 7px;
        }
        &:last-child{
            margin-top:15px;
        }
    }
    .btn-modal-close {

        position: absolute;
        right: 15px;
        top: 15px;
        button {
            background: none;
            border: 0;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-size: 25px;
            text-align: center;
            color: #8e8e8e;
        }

    }
    #resultimg, #imgDb {
        width: 30%;
        margin: 15px auto;
    }
    .custom-file-btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        input{
            display:none;
        }
        label > i{
            color: #553855;
            font-size:1.5em;
        }
    }
    .imgFile{
        display:none;
        position: relative;
        button {
            position: absolute;
            right: 29%;
            top: 10px;
            background: none;
            border: none;
            color: #b00000;
        }
    }
    i{
        cursor: pointer !important;
    }
    .fa-camera{

        position: relative;
        &:after{
            content:'+';
            position: absolute;
            font-size: 0.6em;
            left: 22px;
            top: -4px;
            color: #553855;
        }
    }
    #img-cont{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .img-album {
        width: auto;
        text-align: center;
        margin: 50px 0;
        position: relative;
        img {
            height: auto;
        }
    }
    .tumb-f{
        height: 220px !important;
    }
    .select-bg {
        position: absolute;
        z-index: 9;
        top: 10px;
        left: 6px;
        i {
            font-size: 2em;
            color: #fff;
            border: none;
            border-radius: 100%;
            background: #000;
        }
    }
    .isPortada {
        transition:all ease-out 0.2s;
        background: #5cff00 !important;
        color: #fff !important;
    }
    .no-por{
        color: #e10000 !important;
        transition:all ease-out 0.2s;
        background: #fff !important;
    }
`;
export const Button = styled.button`
        height: 40px;
        align-items: center;
        background: #553855;
        list-style: none;
        display: flex;
        padding: 0 25px;
        border-radius: 6px 6px 6px 6px;
        box-sizing: border-box;
        position: relative;
        color:#fff;
        border: 0;
        outline: none;
        transition: all ease-in 0.3s;
        justify-content: center;
        margin:15px 0;
        a{
            color:inherit ;
        }
        &::before{
            margin-right: 10px;
        }
        &:hover{
            transition: all ease-in 0.3s;
            background: #774f77;
        }
`
