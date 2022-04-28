import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div 
      className='cart-icon-container' 
      onClick={toggleIsCartOpen}
      style={{
        width: '45px',
        height: '45px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <ShoppingCartIcon 
        className='shopping-icon'
        style={{
          color: 'black',
          fontSize: '72px',
        }}
      />
      <span 
        className='item-count'
        style={{
          position: 'absolute',
          fontSize: '22px',
          fontWeight: 'bold',
          top: '0px',
        }}
      >
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
