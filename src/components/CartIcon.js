import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/actions/cart.actions';
import { cartItemsCountSelector } from '../redux/selectors/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <IconContainer onClick={toggleCartHidden}>
            <Icon />
            <NumItems>{itemCount}</NumItems>
        </IconContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: cartItemsCountSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

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
    font-size: 1.1rem;
    font-weight: bold;
    bottom:1.2rem;
`