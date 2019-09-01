import React from 'react'
import styled from 'styled-components'

const CustomButton = ({ children, color, bgColor, ...otherProps }) => {
    return (
        <Button
            color={color}
            bgColor={bgColor}
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
color:${props => props.color};
background-color:${props => props.bgColor};
cursor:pointer;

&:hover{
    color:${props => props.bgColor};
    background-color:${props => props.color};
    border: 1px solid black;
}
`