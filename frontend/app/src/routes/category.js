import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../components/category/product-card';

import { CategoriesContext } from '../contexts/categories.context';;

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  console.log(category, categoriesMap)
  console.log('category: ', category)
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
        {category.toUpperCase()}
      </h2>
      <div 
        className='category-container'
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          columnGap: '20px',
          rowGap: '50px',
        }}
      >
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
