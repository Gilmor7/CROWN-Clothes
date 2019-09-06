import React from 'react';
import styled from 'styled-components';

import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthPage = () => {
    return (
        <AuthContainer>
            <SignIn />
            <SignUp />
        </AuthContainer>
    )
}

export default AuthPage;


const AuthContainer = styled.div`
max-width:85rem;
margin: 3rem auto;
display:flex;
justify-content:space-between;
`;