import React from 'react';
import styled, { css } from 'styled-components';

const CustomButton = ({ children, ...props }) => {
    return (
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    )
}

export default CustomButton;

const GoogleSignInStyles = css`
background-color:#4285f4;
color:white;
border:none;

&:hover{
    background-color:#357ae8;
}
`;

const invertedButtonStyles = css`
color:black;
background-color:white;
border: 1px solid black;

&:hover{
    background-color:black;
    color:white;
}
`;

const defaultButtonStyles = css`
background-color:black;
color:white;
border:none;

&:hover{
    color:black;
    background-color:white;
    border: 1px solid black;
}
`;

const setStylesRelatedToProps = props => {
    if (props.isGoogleSignIn) {
        return GoogleSignInStyles;
    }
    else return props.inverted ? invertedButtonStyles : defaultButtonStyles;
}



const ButtonContainer = styled.button`
height:5rem;
min-width:16rem;
width: auto;
padding: 0 3.5rem 0 3.5rem;
font-family: 'Open Sans Condensed';
font-size:1.5rem;
text-transform: uppercase;
letter-spacing:.5px;
cursor:pointer;

${setStylesRelatedToProps}

`;