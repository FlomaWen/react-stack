import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';
import MealsPage from './pages/MealsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Meals' element={<MealsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
