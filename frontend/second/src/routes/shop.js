import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from './categories-preview';
import Category from './category';
import FilteredCategory from './filtered-category';
import Product from './product';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route path=':category/product/:productId' element={<Product />} />
      <Route path=':category/:productType' element={<FilteredCategory />} />
    </Routes>
  );
};

export default Shop;
