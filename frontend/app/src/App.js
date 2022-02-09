import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import './App.css';

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
