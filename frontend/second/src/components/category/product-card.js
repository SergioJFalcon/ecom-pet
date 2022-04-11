import { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

import { CartContext } from '../../contexts/cart.context';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '350px',
    alignItems: 'center',
    position: 'relative',

    '& img': {
      width: '100%',
      height: '95%',
      objectFit: 'cover',
      marginBottom: '5px',
    },

    '& button': {
      width: '80%',
      opacity: 0.7,
      position: 'absolute',
      top: '255px',
      display: 'none',
    },

    '&:hover': {
      '& img': {
        opacity: 0.8,
      },
      '& button': {
        opacity: 0.85,
        display: 'flex',
      },
    },

    '& .footer': {
      width: '100%',
      height: '5%',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '18px',

      '& .name': {
        width: '90%',
        marginBottom: '15px',
      },

      '& .price': {
        width: '10%',
      },
    },
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className={classes.root}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        variant="contained"
        onClick={addProductToCart}
        sx={{
          minWidth: '165px',
          width: 'auto',
          height: '50px',
          letterSpacing: '0.5px',
          lineHeight: '50px',
          padding: '0 35px 0 35px',
          fontSize: '15px',
          backgroundColor: 'white',
          color: 'black',
          textTransform: 'uppercase',
          fontFamily: 'Open Sans Condensed',
          fontWeight: 'bolder',
          border: '1px solid black',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
          }
        }}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
