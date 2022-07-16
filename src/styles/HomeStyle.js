import styled from "styled-components";

export const HomeStyle = styled.div`
    
    header{
        background-image:url('assets/img/bg.jpg') ;
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment:fixed;
    }
    .menu {
        display: flex;
        width: 98%;
        margin-right: 0;
        margin-left: auto;
        align-items: center;
        padding-top:15px;
    }
    .logo {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff7d;
        border-radius: 100%;
        box-sizing: border-box;
        position: relative;
        left: 10px;
        background: transparent;
        z-index: 2;
        a {
            text-decoration: none;
            color: #fff;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 32px;
            letter-spacing: 0.5px;
        }
    }
    .menu-items {
        width: calc(100% - 100px);
        border: 1px solid #ffffff5e;
        margin: 0; 
        border-left: 0;
        border-right: 0;
        ul {
        display: flex;
        align-items: center;
        margin: 15px 10px;
        gap: 20px;
            li {
                list-style: none;
                margin: 0 auto;
            }
        }
        li a {
            text-decoration: none;
            color: #fff;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0.5px;
        }
    }
    .services {
        width: 100%;
        padding-bottom:40px;
    }
    .services-content {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .services-title {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
        &::before{
            content: '';
            width: 43%;
            height: 1px;
            background-color: #4d566f;
            display: flex;
            position: absolute;
            left: 1%;

        }
        &::after{
            content: '';
            width: 43%;
            height: 1px;
            background-color: #4d566f;
            display: flex;
            position: absolute;
            right: 1%;
        }
        h1 {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 45px;
            line-height: 32px;
            letter-spacing: 0.5px;
            color: #4D566F;
        }
    }
    .services-items {
        width: 100%;
        display: flex;
        padding: 0 24px;
        box-sizing: border-box;
        justify-content: space-between;
    }
    .services-item {
       width: 46%;
    }
    .services-item-img {
        width: 90%;
        display: flex;
        justify-content: center;
        margin: auto;
        position: relative;
        align-items: center;
        img {
            width: 100%;
        }
    }
    .services-item-title {
        display: flex;
        width: 100%;
        margin: auto;
        position: absolute;
        justify-content: center;
        color: #fff;
        background: #0000006e;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 8.5px;
        text-transform: uppercase;
    }
    .services-item-txt {
        width: 90%;
        margin: auto;
        display: flex;
        padding: 20px 0;
        justify-content: center;
        p {
            margin: 0;
        }
    }
    .clients{
        background: #fddeb6;
        .clients-content {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .clients-title{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
            &::before{
            content: '';
            width: 43%;
            height: 1px;
            background-color: #4d566f;
            display: flex;
            position: absolute;
            left: 1%;

            }
            &::after{
                content: '';
                width: 43%;
                height: 1px;
                background-color: #4d566f;
                display: flex;
                position: absolute;
                right: 1%;
            }
            h1 {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 45px;
                line-height: 32px;
                letter-spacing: 0.5px;
                color: #4D566F;
            }
        }
    }
    .clients-slider{
        
        height: 25vh;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 5%;
        box-sizing: border-box;
    }
`;
export const Button = styled.div`
   position: fixed; 
   width: auto;
   right: 1%;
   bottom: 10px;
   height: 40px;
   font-size: 0.8rem;
   z-index: 1;
   
   color: green;
   .btnScroll {
        border: 1px solid #50a850;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        background:transparent ;
        cursor: pointer;
        transition: all ease-in 0.1s;
        &:hover{
            background: #50a850;
            transition: all ease-in 0.3s;
            color:#fff;
            
        }
    }
`