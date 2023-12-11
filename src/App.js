import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import MealsPage from './pages/MealsPage';
import Allcategories from './pages/AllcategoriesPage';
import Ingeredients from './pages/Ingredients';
import Country from './pages/CountryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Meals' element={<MealsPage />} />
        <Route path='/All_categories' element={<Allcategories />} />
        <Route path='/Ingredients' element={<Ingeredients />} />
        <Route path='/Country' element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
