import { useParams, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    height: '350px',
    alignItems: 'center',
    position: 'relative',
    marginLeft: '2rem',
    marginRight: '2rem',
    marginBottom: '10rem',
    
    '& img': {
      width: '70%',
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
        border: '1px solid black',
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

const ProductCard = ({ product, title }) => {
  const classes = useStyles();
  const { category } = useParams();
  const { name, price, imageUrl } = product;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    if (category) {
      navigate(`/shop/${category}/product/${product.id}`)
    } else {
      navigate(`/shop/${title}/product/${product.id}`)
    }
  };

  return (
    <div className={classes.root} onClick={onNavigateHandler}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
