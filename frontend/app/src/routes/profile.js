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
    },
});

const Profile = () => {
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
        <h2 
            className='category-title'
            style={{ 
            fontSize: '38px',
            marginBottom: '25px',
            textAlign: 'center'
            }}
        >
            Profile Page
        </h2>
    </Fragment>
  );
};

export default Profile;
