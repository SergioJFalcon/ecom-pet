import { useContext } from 'react';

import { makeStyles } from '@mui/styles';

import { CartContext } from '../../contexts/cart.context';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    minHeight: '100px',
    borderBottom: '1px solid darkgrey',
    padding: '15px 0',
    fontSize: '20px',
    alignItems: 'center',
    '& .image-container': {
      width: '23%',
      paddingRight: '15px',
      '& img': {
        width: '100%',
        height: '100%',
      }
    },
    '& .name, .price': {
      width: '23%',
      
    },
    '& .quantity':{
      width: '23%',
      display: 'flex',
      '& .value': {
        margin: '0 10px',
      },
      '& .arrow': {
        cursor: 'pointer',
      }
    },
    '& .remove-button': {
      paddingLeft: '12px',
      cursor: 'pointer',
    }
  },
});

const CheckoutItem = ({ cartItem }) => {
  const classes = useStyles();
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  
  return (
    <div className={classes.root}>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
