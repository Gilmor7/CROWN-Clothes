import React, { useState } from 'react'
import styled from 'styled-components'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../../components/FormInput'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {

    const [state, setstate] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setstate({
            ...state,
            [name]: value
        })
    }

    return (
        <Container>
            <Title>I already have an account</Title>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    type="email"
                    name="email"
                    label='email'
                    value={state.email}
                    required
                    onChange={handleChange} />

                <FormInput
                    type="password"
                    name="password"
                    label='password'
                    value={state.password}
                    required
                    onChange={handleChange} />

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

export default SignIn

const Container = styled.div`
width:38rem;
`
const Title = styled.h2`
margin: 1.2rem 0;
`

const ButtonsContainer = styled.div`
display:flex;
justify-content:space-between;
`