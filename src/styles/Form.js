import styled from "styled-components";

export const FromS = styled.div`
    width: 100%;
    height: auto;
    background-image:url(/assets/img/team/t11.jpg) ;
    background-position:center 69%;
    background-repeat:no-repeat ;
    background-size:cover;
    background-attachment: fixed;
    position: relative;
    
    .form-cont{
        width: 50%;
        margin: 0 auto;
        position: relative;
        display: flex;
        height: auto;
       
    }
    .form {
        width: 100%;
        z-index: 9;
        position: relative;
        color: #000;
        box-sizing: border-box;
        padding: 55px;
        margin: 33px 0;
        background-color: rgba(255, 255, 255, 0.69);
     /*   &:before{
            content:'';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #fff;
            opacity: 0.6;
        }*/
    }
    .form-input {
        width: 100%;
        display: flex;
        flex-direction: column;
        label {
            font-family: 'AM';
            font-size: 1.5rem;
        }
        input, textarea, select {
            width: 100%;
            margin: 10px 0;
            background: transparent;
            border: 4px solid #553855;
            padding: 10px;
            box-sizing: border-box;
            outline: none;
            color: #000;
        }
        textarea{
            height: 300px;
            resize:none ;
        }
    }
`;