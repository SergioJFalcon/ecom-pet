import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';

import CheckoutItem from '../components/checkout/checkout-item';
import StripeCheckoutButton from '../components/StripeCheckoutButton';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div 
      className='checkout-container' 
      style={{ 
        width: '55%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px auto 0',
      }}
    >
      <div 
        className='checkout-header'
        style={{
          width: '100%',
          padding: '10px 0',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid darkgrey',
        }}
      >
        <div className='header-block' style={{ textTransform: 'capitalize', width: '23%'}}>
          <span>Product</span>
        </div>
        <div className='header-block' style={{ textTransform: 'capitalize', width: '23%'}}>
          <span>Description</span>
        </div>
        <div className='header-block' style={{ textTransform: 'capitalize', width: '23%'}}>
          <span>Quantity</span>
        </div>
        <div className='header-block' style={{ textTransform: 'capitalize', width: '23%'}}>
          <span>Price</span>
        </div>
        <div className='header-block' style={{ textTransform: 'capitalize', width: '8%'}}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total' style={{ marginTop: '30px', marginLeft: 'auto', fontSize: '36px'}}>Total: ${cartTotal}</span>
      <div className='test-warning' style={{ color: 'red', marginBottom: '2rem'}}>
        *Please use the following test credit card for payhments*
        <br />
        4242 4242 4242 4242 - Exp: 12/25 - CVV: 123
        <br />
      </div>
      <div className="pay-button" style={{ marginBottom: '2rem'}}>
        <StripeCheckoutButton price={cartTotal} />
      </div>
    </div>
  );
};

export default Checkout;
