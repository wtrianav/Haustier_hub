import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    .App {
        text-align: center;
        margin-top: 112px;
        margin-bottom: 100px;
    }
    
    html, body {
        font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif;
    }

    /* Estilos del scroll lateral */
    body {
        /* Aseguramos que solo se aplique el ancho del scroll lateral derecho */
        width: 100%;
        /* Resto de estilos para el scroll lateral derecho */
        overflow-x: hidden; /* Evitamos el scroll horizontal */
        overflow-y: scroll; /* Habilitamos el scroll vertical */
    }

    body::-webkit-scrollbar {
        width: 14px;
        background-color: rgb(220, 220, 220);
    }

    body::-webkit-scrollbar-thumb {
        background-color: #0d6efd;
        border-radius: 5px;
    }

    body::-webkit-scrollbar-thumb:hover {
        background-color: #0b5edf;
    }
    /* ======================================= */

    h2 {
        font-weight: 550;
    }

    a {
        text-decoration: none;
    }

    ul,ol {
        list-style: none;
    }
`
export default GlobalStyle;