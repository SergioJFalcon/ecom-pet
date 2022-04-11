import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import './App.css';
const SHOP_DATA = [
  {
    title: 'Dogs',
    items: [
      {
        id: 1,
        name: 'Dog Collar - Red',
        imageUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/1517570-center-1',
        price: 15,
        tags: [
          'collar', 'dog', 'red'
        ]
      },
      {
        id: 2,
        name: 'Dog Collar - Red',
        imageUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/1517570-center-1',
        price: 15,
        tags: [
          'collar', 'dog', 'blue'
        ]
      },
    ]
  },
  {
    title: 'Cats',
    items: [
      {
        id: 1,
        name: 'Cats Collar - Red',
        imageUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/1517570-center-1',
        price: 15,
        tags: [
          'collar', 'cat', 'red'
        ]
      },
      {
        id: 2,
        name: 'Cats Collar - Red',
        imageUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/1517570-center-1',
        price: 15,
        tags: [
          'collar', 'cat', 'blue'
        ]
      },
    ]
  }
];

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <main className="py-3">
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
