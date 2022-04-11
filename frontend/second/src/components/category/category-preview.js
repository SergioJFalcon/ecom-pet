import { Link } from 'react-router-dom';

import ProductCard from './product-card';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container' style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
      <h2>
        <Link className='title' to={title} style={{ fontSize: '28px', marginBottom: '25px', cursor: 'pointer' }}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: '20px'}}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
