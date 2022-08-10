import styled from "styled-components";

export const NotifyS = styled.div`
    width: 100%;
    position: fixed;
    z-index: 3;
    background-color: #261926;
    max-width: 333px;
    display: flex;
    justify-content: left;
    right: 15px;
    top: 15px;
    color: #fff;
    .notifyCont {
        padding: 20px;
        box-sizing: border-box;
    }
    .btnClose{
        position: absolute;
        top: 0;
        right: 10px;
        button{
            background: none;
            border: 0;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-size: 25px;
            text-align: center;
            color: #fff;
        }
    }

`;