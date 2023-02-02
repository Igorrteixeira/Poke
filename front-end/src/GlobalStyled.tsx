import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
    }
    select{
        border:1px solid blue;
        color: blue;
        padding: 2px;
        cursor: pointer;
    }
    label{
        color: blue;
        border-bottom: 1px solid;
    }

`;
export default GlobalStyled;
