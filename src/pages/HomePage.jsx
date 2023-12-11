import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Bienvenue sur notre site de recettes</h1>
        <p className="text-lg text-gray-600">Découvrez une variété de délicieuses recettes pour chaque occasion.</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
