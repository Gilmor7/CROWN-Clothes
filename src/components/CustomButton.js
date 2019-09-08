import React from 'react';
import styled from 'styled-components';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <Button
            isGoogleSignIn={isGoogleSignIn}
            inverted={inverted}
            {...otherProps}>

            {children}

        </Button>
    )
}

export default CustomButton;


const Button = styled.button`
border:none;
height:5rem;
min-width:16rem;
width: auto;
padding: 0 3.5rem 0 3.5rem;
font-family: 'Open Sans Condensed';
font-size:1.5rem;
text-transform: uppercase;
letter-spacing:.5px;
color:${({ inverted }) => inverted ? 'black' : 'white'};
background-color:${({ inverted }) => inverted ? 'white' : 'black'};;
cursor:pointer;

${props => props.isGoogleSignIn ?
        `
background-color:#4285f4;
`
        : null
    }

&:hover{
    color:${({ inverted }) => inverted ? 'white' : 'black'};
    background-color:${({ inverted }) => inverted ? 'black' : 'white'};
    border: 1px solid black;

    ${props => props.isGoogleSignIn ?
        `
          background-color:#357ae8;
          border:none;
          color:white;
        `
        : null
    }
}

`;