import { useContext, useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import { Button, Chip, Stack } from '@mui/material';

import ProductCard from '../components/category/product-card';

import { CategoriesContext } from '../contexts/categories.context';
import { CartContext } from '../contexts/cart.context';

const useStyles = makeStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    //   height: '80%',
      alignItems: 'center',
      position: 'relative',
  
      '& img': {
        width: '50%',
        height: '95%',
        objectFit: 'cover',
        marginBottom: '5px',
      },
  
    //   '& button': {
    //     width: '80%',
    //     opacity: 0.7,
    //     position: 'absolute',
    //     top: '255px',
    //     display: 'none',
    //   },
  
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
    // debugger;
    // let pid = categoriesMap[category].filter((item) => item.id === productId)
    // let prod = product
    
    
    if(category && categoriesMap && productId && products){
        let item = categoriesMap[category].find(x => x.id === parseInt(productId));
        setProduct(item)
    }
    
    

    // if(products) {
        
    //     let prod_item = products.map((item) => {
    //         if(item.id === productId) {
    //             return item
    //         }
    //     })
    //     console.log('prod_item: ', prod_item);
    // }
    
    // debugger;
    
  }, [category, productId, categoriesMap, products]);

//   useEffect(() => {
//     console.log('START!')
//     categoriesMap[category]).find(x => x.id === productId)
//   }, [])
  
//   if(products) {
//     let item = products.find(x => x.id === productId);
//     setProduct(item);
//     console.log('item: ', item);
//   }
//   console.log(category, categoriesMap)
//   console.log('category: ', category)
  console.log('product: ', product)
  
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
                <div>
                    <img src={product.imageUrl} alt={`${product.name}`} />
                    <h3>{product.name}</h3>
                    <h3>${product.price}</h3>
                    <h3>Description: {product.description}</h3>
                    {product.tags.map((tag) => (
                        <Chip label={tag} variant="outlined" />
                    ))}
                    <Button
                        variant="contained"
                        onClick={addProductToCart}
                    >
                        Add to card
                    </Button>
                </div>
                
            </div>
        }
    </Fragment>
  );
};

export default Product;
