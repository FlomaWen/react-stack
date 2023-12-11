import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import chargement from '../assets/chargement.gif';
import Footer from "../components/Footer";
import '../App.css'

const Ingeredients = () => {
    const [ingredients,setIngredients] = useState(null);

    useEffect(() => {
        (async () => {
            const IngredientsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
            const IngredientsResponseData = await IngredientsResponse.json();
            setIngredients(await IngredientsResponseData.meals);
        })();
    }, []);

    return (
        <>
          <Header />
          <div className="container mx-auto p-4">
            {ingredients ? (
              <>
                {ingredients.map((ingredient) => (
                  <article className="mb-4 p-2 bg-gray-200 rounded-md">
                    <p className="text-lg font-semibold">{ingredient.strIngredient}</p>
                  </article>
                ))}
              </>
            ) : (
              <img src={chargement} alt="loading" className="mx-auto" />
            )}
          </div>
          <Footer />
        </>
      );
}

export default Ingeredients;
