import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import { Button } from '@mui/material';
import CartItem from './cart-item';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div 
      className='cart-dropdown-container' 
      style={{
        position: 'absolute',
        width: '240px',
        height: '340px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        border: '1px solid black',
        backgroundColor: 'white',
        top: '90px',
        right: '40px',
        zIndex: 5,
        color: 'black'
      }}
    >
      <div 
        className='cart-items'
        style={{
          height: '240px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'scroll',
        }}
      >
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        {cartItems.length ? <></> : <span style={{fontSize: '18px', margin: '50px auto'}}>Cart is currently empty</span>}
      </div>
      <Button 
        variant="contained"
        onClick={goToCheckoutHandler}
        sx={{
          marginTop: 'auto',
          display: 'flex',
          fontSize: '15px',
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid black',
          }
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
