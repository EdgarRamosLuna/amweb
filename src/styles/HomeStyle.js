import styled from "styled-components";

export const HomeStyle = styled.div`
    @font-face {
    font-family: 'AM';
    src:url(assets/fonts/nouvelle_vague_final.ttf);
    /* other formats include: 'woff2', 'truetype, 'opentype',
                                'embedded-opentype', and 'svg' */
    }
    header{
        background-image:url('assets/img/bg.jpg') ;
        height: 75vh;
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
        background: #fff;
        a {
            text-decoration: none;
            color: #000;
            font-family: 'AM';
            font-style: normal;
            font-weight: 400;
            font-size: 43px;
            line-height: 32px;
            letter-spacing: 0.5px;
        }
    }
    .menu-items {
        width: auto;
        border: 1px solid #ffffff5e;
        margin: 0; 
        border-left: 0;
        ul {
        display: flex;
        align-items: center;
        margin: 15px 0px;
        gap: 20px;
            li {
                list-style: none;
                border-right:1px solid #fff ;
                box-sizing:border-box ;
                padding-right:15px;
                &:last-child {
                    border-right:none;
                }
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
            transition:all ease-in 0.1s;
            &:hover {
              font-size:1.3em;
            }
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
            background-color: #000;
            display: flex;
            position: absolute;
            left: 1%;

        }
        &::after{
            content: '';
            width: 43%;
            height: 1px;
            background-color: #000;
            display: flex;
            position: absolute;
            right: 1%;
        }
        h1 {
            font-family: 'AM';
            font-style: normal;
            font-weight: 400;
            font-size: 45px;
            line-height: 32px;
            letter-spacing: 0.5px;
            color: #000;
        }
    }
    .services-items {
        width: 100%;
        display: flex;
        padding: 0 24px;
        box-sizing: border-box;
        justify-content: space-evenly;
    }
    .services-item {
        width: 28%;
    }
    .services-item-img {
        width: 90%;
        display: flex;
        justify-content: center;
        margin: auto;
        position: relative;
        align-items: center;
        border-radius: 100%;
        cursor: pointer;
        img {
            width: 100%;
            filter: grayscale(100%);
            height: 255px;
        }
        .animationbg {
                width: 100%;
                height: 100%;
                position: absolute;
                background: #000;
                z-index: 1;
                opacity: 0;
                transition: all ease-in 0.3s;
              
        }
        &:hover{
            .animationbg {
                opacity: 0;
                transition: all ease-in 0.3s;
            }   
            img {
                transition: all ease-in 0.3s;
                filter: grayscale(0%);    
            }
          /*  &:before{
            
                    content:'';
                    width: 100%;
                    position: absolute;
                    background: black;
                    height: 100%;
                    opacity: 0.4;
                    top: 0;
                    z-index: 0;
                    border-radius: 100%;
                
                
            }*/
        }
        &:after{
            content:'';
        }
    }
    .services-item-title {
        display: flex;
        width: 100%;
        margin: auto;
        position: absolute;
        justify-content: center;
        color: #fff;
        background: #000000;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 8.5px;
        text-transform: uppercase;
        z-index:2;
        text-decoration: none;
        bottom:0;
        h3 {
            font-size: 2rem;
            margin: 4px 0;
        }   
    }
    .owl-carousel .owl-item img {
        display: block;
        width: 100%;
        filter: invert(100%);
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
        background: #fff;
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
            background-color: #000;
            display: flex;
            position: absolute;
            left: 1%;

            }
            &::after{
                content: '';
                width: 43%;
                height: 1px;
                background-color: #000;
                display: flex;
                position: absolute;
                right: 1%;
            }
            h1 {
                font-family: 'AM';
                font-style: normal;
                font-weight: 400;
                font-size: 45px;
                line-height: 32px;
                letter-spacing: 0.5px;
                color: #000;
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
    .team {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .team-cont {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .team-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 60px;
    }
    .team-img{
        width: 100%;
        display: flex;
        height: 340px;
        width: 340px;
        cursor: pointer;
    }
    .team1{
            background:url(assets/img/team/t1.jpg) ;
            background-position: center;
            background-repeat:no-repeat;
            background-size:cover;
            
            &:hover{
                
                background:url(assets/img/team/t11.jpg);
                background-position: center;
                background-repeat:no-repeat;
                background-size:cover;
            }
    }
    .team2{
            background:url(assets/img/team/t2.jpg) ;
            background-position: center top;
            background-repeat:no-repeat;
            background-size:cover;
            
            &:hover{
                background-position: center -56px;
                
                background:url(assets/img/team/t22.jpg);
                
                background-repeat:no-repeat;
                background-size:cover;
            }
    }
    .team3{
            background:url(assets/img/team/t3.jpg) ;
            background-position: center;
            background-repeat:no-repeat;
            background-size:cover;
            
            &:hover{
                background:url(assets/img/team/t33.jpg);
                background-position: center;
                background-repeat:no-repeat;
                background-size:cover;
            }
    }
    .team-title {
        margin: 20px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        h3 {
            margin: 0;
        }
    }
    .team-txt {
        margin: 0 55px;
        white-space: pre-line;
        font-size: 16px;
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
export const CategoryCont = styled.div`
    .catContainer {
        display: flex;
        width: 90%;
        margin: 50px auto;
        justify-content: space-around;
        flex-wrap:wrap ;
    }
    .cat-item {
        position: relative;
        transition:all ease-in 0.1s;
        cursor: pointer;
        &:hover{
            .catLabel{
                height: 100%;
                transition:all ease-in 0.2s;
                background-color: rgba(255,255,255,1);
                p{
                    display:block;
                }
            }
            
        }
    }
    .catBg {
        position: relative;
        display: flex;
    }
    .catBg img {
        width: 100%;
        position: relative;
        height: 369px;
    }
    .catLabel {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 0;
        height: 170px;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: rgba(255,255,255,0.85);
        transition:all ease-in 0.1s;
        flex-direction: column;
        p{
            display:none;
            width: 70%;
            margin: 25px auto;
            word-break: break-word;
        }
    }
    .item-container {
        margin: 20px 5px;
        width: 25%;
    }
    .btnBack {
        position: fixed;
        z-index: 1;
        font-size: 2em;
        left: 10px;
        top: 10px;
        color: #7d747d;
        border-radius: 100%;
        border: 2px solid #7d747d;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        
        &:hover{
            color: #b0b0b0;
            border: 2px solid #b0b0b0;
            transition: all ease-in 0.3s;
        }
    }

`;
export const PortadaBg = styled.div`
        width: 100%;
        height: 70vh;
        background-image:url(${props => props.bg});
        background-position: center -25px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &::before{
            content: 'XV TEENS';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.5;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 5em;
        }
`;
export const Footer = styled.div`
 width: 100%;

 height:300px ;
 background:#000 ;
 .social-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 15px;
    a{
        color:#fff ;
        font-size:2em ;
    }
}
`;
export const Team = styled.div`
    width: 100%;
    display:flex;


`;