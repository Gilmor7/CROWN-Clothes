import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceInCents = price * 100;
    const stripePublishableKey = 'pk_test_kTIkhWr7UYZP7i0lKyHVcAzD00EhHQIjnR';

    const onToken = token => {
        console.log(token)
        alert('payment was successful')
    }

    return (
        <StripeCheckout
            name="CROWN Clothing Ltd." // the pop-in header title
            description={`Your Total Price: $${price} `} // the pop-in header subtitle
            image='https://sendeyo.com/up/d/f3eb2117da' // the pop-in header image (default none)
            label='Pay Now &nbsp; 💳' // text inside the Stripe button
            panelLabel="PAY" // prepended to the amount in the bottom pay button
            amount={priceInCents} // cents
            stripeKey={stripePublishableKey}
            token={onToken}
            shippingAddress
            billingAddress
            allowRememberMe
        />
    )
}

export default StripeCheckoutButton;
