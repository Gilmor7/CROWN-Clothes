import React, { useState } from 'react';
import styled from 'styled-components';

import { FormTitle } from '../../styles/typography';

import { auth } from '../../services/firebase/firebase.auth';
import { createUserProfileDocument } from '../../services/firebase/firebase.firestore';

import CustomButton from '../../components/CustomButton';
import FormInput from '../../components/FormInput';

const SignUp = () => {

    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [err, setErr] = useState(null);

    const handleSubmit = async e => {
        console.log('handle submit on signup')
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = state;

        if (password !== confirmPassword) {
            return setErr('passwords must much');
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            setErr(null);
        }
        catch (error) {
            setErr(error.message);
        }

    }

    const handleChange = e => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <Container>
            <FormTitle>I do not have an account</FormTitle>
            <span>Sign Up with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={state.displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />

                <FormInput
                    type="email"
                    name="email"
                    value={state.email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    type="password"
                    name="password"
                    value={state.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />

                {err && <ErrView>{`* ${err}`}</ErrView>}
                <CustomButton type="submit">
                    Sign Up
                </CustomButton>
            </form>
        </Container>
    )
}

export default SignUp;

const Container = styled.div`
width:38rem;
`
const ErrView = styled.span`
display:block;
color:red;
margin-bottom: 1rem;
font-size:1.4rem;
font-weight:bold;
text-indent:.5rem
`