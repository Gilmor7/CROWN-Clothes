import React from 'react'

import Directory from '../components/Directory'
import styled from 'styled-components'

const HomePage = () => {
    return (
        <Container>
            <Directory />
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
`
