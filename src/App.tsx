import { Route, Routes } from 'react-router-dom';

import RestaurantDetailsPage from './pages/restaurantDetails';

import AboutPage from '@/pages/about';
import BlogPage from '@/pages/blog';
import IndexPage from '@/pages/index';
import PricingPage from '@/pages/pricing';
import LoginPage from './pages/login';

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<IndexPage />} path="/" />
      <Route element={<RestaurantDetailsPage />} path="/restaurant/:id" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
