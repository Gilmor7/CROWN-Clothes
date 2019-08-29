import React from 'react'
import styled from 'styled-components'

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <Container size={size}>
            <BackImg imageUrl={imageUrl} />
            <Content>
                <Title>{title}</Title>
                <span>SHOP NOW</span>
            </Content>
        </Container>
    )
}

export default MenuItem

const Container = styled.div`
min-width:30%;
height:${props => props.size === 'large' ? `34rem` : `24rem`};
cursor:pointer;
border: 1px solid black;
margin: 0 .7rem 1.5rem;
flex: 1 1 auto;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
`

const BackImg = styled.div`
width:100%;
height:100%;
background-image: ${props => (`url(${props.imageUrl})`)};
background-position:center;
background-size:cover;
transition:transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.95);

${Container}:hover & {
transform:scale(1.1);
}
`

const Content = styled.div`
height:90px;
background-color:rgba(236, 240, 241, 1);
opacity:.7;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 0 2.5rem;
border: 1px solid black;
position:absolute;

${Container}:hover & {
opacity:0.9;
}

`

const Title = styled.h1`
text-transform:uppercase;
font-weight: bold;
      margin-bottom: .5rem;
      font-size: 2.2rem;
`

