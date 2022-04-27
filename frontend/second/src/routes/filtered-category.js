import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../components/category/product-card';

import { CategoriesContext } from '../contexts/categories.context';;

const FilteredCategory = () => {
  const { category, productType } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    if(categoriesMap !== undefined && Object.keys(categoriesMap).length !== 0) {
        let prodType = productType;
        switch(productType) {
            case 'treats':
                prodType = 'treat';
                break;
            case 'toys':
                prodType = 'toy';
                break;
            case 'bowl & feeder':
                prodType = 'bowl';
                break;
            default:
                prodType = productType; 
        }
        console.log('prodType: ', prodType)
        const filteredProducts = categoriesMap[category].filter((item) => item.name===prodType || item.tags.includes(prodType));
        setProducts(filteredProducts);
    }
  }, [categoriesMap, category, productType]);

  console.log('categoriesMap: ', categoriesMap);
  console.log('data: ', category, categoriesMap)
  console.log('category: ', category)
  console.log('productType: ', productType)
  console.log('products: ', products)
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
        filtered
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

export default FilteredCategory;
