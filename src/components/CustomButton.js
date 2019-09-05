import React from 'react'
import styled from 'styled-components'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <Button
            isGoogleSignIn={isGoogleSignIn}
            {...otherProps}>

            {children}

        </Button>
    )
}

export default CustomButton


const Button = styled.button`
border:none;
height:5rem;
min-width:16rem;
font-family: 'Open Sans Condensed';
font-size:1.5rem;
text-transform: uppercase;
letter-spacing:.5px;
color:white;
background-color:black;
cursor:pointer;

${props => props.isGoogleSignIn ?
        `
background-color:#4285f4;
`
        : null
    }

&:hover{
    color:black;
    background-color:white;
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

`