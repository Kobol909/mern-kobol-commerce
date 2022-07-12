/**
 * Payment form component
 * ======================
 *
 * This component is used to display the payment form
 *
 */
import { useState } from 'react';
import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_TYPE_CLASSES } from '../button/Button.component';

import defaultConfig from '../../utils/constants/constants';

import { FormContainer, PaymentButton, PaymentFormContainer } from './PaymentForm.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const cartItems = useSelector(selectCartItems);

  const cartItemsDetails = cartItems.map((cartItem) => {
    return {
      quantity: cartItem.quantity,
      price: cartItem.price,
      sku: cartItem.sku
    };
  });

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await axios
      .post('/api/payment/create-payment-intent', {
        method: 'post',
        data: {
          amount,
          cartItemsDetails
        },
        headers: {
          auth: {
            token: defaultConfig.jwt.bearer,
            secret: defaultConfig.jwt.secret
          },
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        const clientSecret = res.data.clientSecret;
        return clientSecret;
      })
      .catch((err) => {
        console.log(err);
      });

    const { clientSecret } = response;

    console.log(clientSecret);

    const paymentResult = await stripe.confirmCardPayment(response, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Gary Host'
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessingPayment}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
