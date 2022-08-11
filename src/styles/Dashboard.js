import styled from "styled-components";

export const DashboardS = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: calc(100% - 200px);
    box-sizing: border-box;
    padding:0 35px;
    margin-left:200px;
   
`;
export const MenuDash = styled.div`
    display: flex;
    a {
        text-decoration: none;
    }
    .dashboard-menu {
        width: 200px;
        height: 100vh;
        background: #261926;
        display: flex;
        flex-direction: column;
        position: fixed;
    }
    .menu-container {
        margin: 0;
        width: 100%;
        ul {
            margin: 0;
            padding: 0 45px;
        }
        li {
            list-style: none;
            margin: 20px 0;
            position: relative;
            display: flex;
            align-items: center;
            &:first-child {
                margin-top: 0;
            }
        }
        a {
            color: #fff;
        }
    }
    .dashboard::before {
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f015";
        position: absolute;
        left: -30px;
        color:#fff;
    }
    .cat::before {
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f030";
        position: absolute;
        left: -30px;
        color:#fff;
    }
    .cont::before {
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f3e0";
        position: absolute;
        left: -30px;
        color:#fff;
    }
    .serv::before {
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f03e";
        position: absolute;
        left: -30px;
        color:#fff;
    }
    .logout::before{
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f08b";
        position: absolute;
        left: -30px;
        color:#fff;
    }
    .logo {
        width: 100%;
        text-align: center;
        margin: 15px 0;
        display: flex;
        justify-content: center;
        a {
            color: #fff;
            font-size: 27px;
            border-radius: 100%;
            border: 2px solid #fff;
            padding: 11px;
            box-sizing: border-box;
        }
    }
    .focus-input {
        border: 1px solid red !important;
    }
`;