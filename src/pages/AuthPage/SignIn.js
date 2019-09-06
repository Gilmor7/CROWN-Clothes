import React, { useState } from 'react';
import styled from 'styled-components';

import { FormTitle, ErrView } from '../../styles/typography';

import { signInWithGoogle, auth } from '../../services/firebase/firebase.auth';

import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const [err, setErr] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setState({
                email: '',
                password: ''
            });
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
        });
    }

    return (
        <Container>
            <FormTitle>I already have an account</FormTitle>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    type="email"
                    name="email"
                    label='Email'
                    value={state.email}
                    required
                    handleChange={handleChange} />

                <FormInput
                    type="password"
                    name="password"
                    label='Password'
                    value={state.password}
                    required
                    handleChange={handleChange} />

                {err && <ErrView>{`* ${err}`}</ErrView>}

                <ButtonsContainer>
                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </Container>
    )
}

export default SignIn;

const Container = styled.div`
width:38rem;
`

const ButtonsContainer = styled.div`
display:flex;
justify-content:space-between;
`;