import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';


import Home from './routes/home';
import Navigation from './routes/navigation';
import Authentication from './routes/authentication';
import Shop from './routes/shop';
import Checkout from './routes/checkout';
import FAQs from './routes/faqs';
import Contact from './routes/contact';
import Search from './routes/search';
import Profile from './routes/profile';

import { addCollectionAndDocuments } from './utils/firebase/firebase.utils';

import SHOP_DATA from './pet_shop_data';

const App = () => {
  /** Use this to populate Firestore database with
   * WARNING!!! ONLY USE ONCE AND IT'LL POPULATE THE DATABASE WITH ALL THE DATA, USE IT AGAIN AND IT'LL KEEP ADDING MORE!
   */
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  return (
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Routes>
              <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='faqs' element={<FAQs />} />
                <Route path='contact' element={<Contact />} />
                <Route path='search' element={<Search />} />
                <Route path='profile' element={<Profile />} />
              </Route>
            </Routes>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
  </BrowserRouter>
  );
};

export default App;
