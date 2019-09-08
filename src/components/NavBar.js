import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { auth } from '../services/firebase/firebase.auth';

import { ReactComponent as Logo } from '../assets/crown.svg';

import CartIcon from './CartIcon';
import CartDropdDown from './CartDropdDown';

const NavBar = ({ currentUser, hidden }) => {
    return (
        <Nav>
            <Link to="/">
                <Logo />
            </Link>
            <Links>
                <LinkItem to="/shop" >Shop</LinkItem>
                <LinkItem to="/contact">Contact</LinkItem>
                {
                    currentUser ?
                        <DivLink onClick={() => auth.signOut()}>Sign Out</DivLink>
                        :
                        <LinkItem to="/signin">Sign in</LinkItem>
                }
                <CartIcon />
            </Links>
            {hidden ? null : <CartDropdDown />}
        </Nav>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(NavBar);


const Nav = styled.nav`
display:flex;
align-items:center;
justify-content:space-between;
height:7rem;
margin-bottom:2.5rem;
/* border:1px solid black; */
`;

const Links = styled.div`
height:100%;
width:70%;
display:flex;
align-items:center;
justify-content: flex-end;
`;

const LinkItem = styled(Link)`
text-decoration:none;
text-transform:uppercase;
margin-left:2rem;
`;

const DivLink = styled.div`
text-decoration:none;
text-transform:uppercase;
margin-left:2rem;
cursor:pointer;
`;


