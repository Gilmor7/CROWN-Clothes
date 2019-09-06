import React from 'react';
import styled from 'styled-components';

import { shrinkLabel } from '../styles/mixins';
import { sub_color } from '../styles/colors';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <InputGroup>
            <Input onChange={handleChange} {...otherProps} />
            {
                label ?
                    (<InputLabel shrink={otherProps.value.length} >
                        {label}
                    </InputLabel>)
                    : null
            }
        </InputGroup>
    )
}

export default FormInput;


const InputGroup = styled.div`
position:relative;
margin:4rem 0;
`;

const InputLabel = styled.label`
position:absolute;
top:50%;
left:2px;
color:${sub_color};
transform:translateY(-50%);
pointer-events: none;
transition: 300ms ease all;

${props => props.shrink ? shrinkLabel() : null}

`;

const Input = styled.input`
width:100%;
display: block;
color:${sub_color};
font-size:1.6rem;
padding: 1rem 1rem 1rem .5rem;
margin:2rem 0;
border:none;
border-bottom:${sub_color} 1.5px solid;

&[type='password'] {
    letter-spacing:.5rem;
}

&:focus {
    outline:none;
}

&:focus ~ ${InputLabel} {
    ${shrinkLabel()}
}

`;
