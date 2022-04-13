import { useContext, useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import { Button, Chip, Stack } from '@mui/material';

import { CategoriesContext } from '../contexts/categories.context';
import { CartContext } from '../contexts/cart.context';

const useStyles = makeStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      marginBottom: '5rem', 
      '& img': {
        width: '50%',
        height: '95%',
        objectFit: 'cover',
        marginBottom: '5px',
      },
      '& .product-row': {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
      },
      '& .product-description': {
        display: 'flex',
        flexDirection: 'row',
        '& span': {
          marginTop: '1.25rem',
          marginLeft: '1rem',
        }
        
      },
      '& .product-tags': {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '1rem',
      },
      '& .tags': {
        paddingLeft: '1rem',
        paddingTop: '1rem',
      }
    },
});

const Product = () => {
  const classes = useStyles();
  const { category, productId } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  const [product, setProduct] = useState(null);
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    if(category && categoriesMap && productId && products){
        let item = categoriesMap[category].find(x => x.id === parseInt(productId));
        setProduct(item)
    }
  }, [category, productId, categoriesMap, products]);

  return (
    <Fragment>
        {product !== null &&
          <div className={classes.root}>
            <h2 
                className='category-title'
                style={{ 
                fontSize: '38px',
                marginBottom: '25px',
                textAlign: 'center'
                }}
            >
                {product.name}
            </h2>
            <div className="product-row">
                <img src={product.imageUrl} alt={`${product.name}`} />
                <div className="product-info">
                  <div className="product-description">
                    <h3>Description: </h3>
                    <span>{product.description}</span>
                  </div>
                  <div className="product-tags">
                    <h3>Tags:</h3>
                    <div className='tags'>
                      <Stack direction="row">
                        {product.tags.map((tag, index) => (
                          <Chip key={index} label={tag} variant="outlined" sx={{ marginRight: '0.5rem'}} />
                        ))}
                      </Stack>
                    </div>
                  </div>
                  <div className="product-price">
                    <h3>Price: <span style={{fontSize: '28px'}}>${product.price}</span></h3>
                  </div>
                  <Button
                      variant="contained"
                      onClick={addProductToCart}
                  >
                    Add to card
                  </Button>
                </div>
            </div>
          </div>
        }
    </Fragment>
  );
};

export default Product;
