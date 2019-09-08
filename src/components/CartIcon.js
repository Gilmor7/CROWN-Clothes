import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/actions/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <IconContainer onClick={toggleCartHidden}>
            <Icon />
            <NumItems>0</NumItems>
        </IconContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);

const IconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  margin-left:1rem;
  position:relative;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Icon = styled(ShoppingIcon)`
  width:2.4rem;
  height:2.4rem;
`

const NumItems = styled.span`
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    bottom:1.2rem;
`