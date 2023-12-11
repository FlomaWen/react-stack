import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Accueil</Link></li>
          <li><Link to="/Meals" className="hover:text-gray-300">Recettes</Link></li>
          <li><Link to="/All_categories" className="hover:text-gray-300">Catégories</Link></li>
          <li><Link to="/Country" className="hover:text-gray-300">Provenance</Link></li>
          <li><Link to="/Ingredients" className="hover:text-gray-300">Ingrédients</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
