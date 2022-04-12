import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from './categories-preview';
import Category from './category';
import Product from './product';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route path=':category/:productId' element={<Product />} />
    </Routes>
  );
};

export default Shop;
