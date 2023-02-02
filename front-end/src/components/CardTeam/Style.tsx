import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    margin: 5px;
    border-radius: 10px;
    width: 300px;
    height: 90px;
    background-color: #f3681e;
    
`

export const ContImg = styled.div`
    width: 50px;
    height: 50px;
    
`
export const Id = styled.p`
    color:aliceblue ;
    position: absolute;
    left: 8px;
    top: 8px;

`

export const Img = styled.img`
    width: 100%;
`

export const Name = styled.p`
    color: aliceblue;
`

export const Delete = styled.button`
    background: transparent;
    border: none;
    color: red;
    position: absolute;
    right: 5px;
    top: 5px;
`