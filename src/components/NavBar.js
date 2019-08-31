import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../assets/crown.svg'


const NavBar = () => {
    return (
        <Nav>
            <Link to="/">
                <Logo />
            </Link>
            <Links>
                <LinkItem to="/shop" >Shop</LinkItem>
                <LinkItem>Contact</LinkItem>
                <LinkItem>Sign in</LinkItem>
                <LinkItem>Cart</LinkItem>
            </Links>
        </Nav>
    )
}

export default NavBar


const Nav = styled.nav`
display:flex;
align-items:center;
justify-content:space-between;
height:7rem;
margin-bottom:2.5rem;
/* border:1px solid black; */
`

const Links = styled.div`
height:100%;
width:70%;
display:flex;
align-items:center;
justify-content: flex-end;

`
const LinkItem = styled(Link)`
text-decoration:none;
text-transform:uppercase;
margin-left:2rem;
`


