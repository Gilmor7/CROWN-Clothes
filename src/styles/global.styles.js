import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
    height:100%;
    font-size:62.5%;
}

body{
    height:100%;
    font-size:1.6rem;
    color: #4a4a4a;
    font-family:'Open Sans Condensed' ;

}

* {
    box-sizing: border-box;
    margin:0;
    padding:0;
}

`;

export default GlobalStyles;