import { useEffect, useState } from "react"
import Header from "../components/Header";
import chargement from '../assets/chargement.gif'
import Footer from "../components/Footer";
import '../App.css'

const MealsPage = () =>{
    
    const [meals,setMeals] = useState(null)

    useEffect(() => {
        (async() => {
            const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            const mealsResponseData = await mealsResponse.json();
            setMeals(await mealsResponseData.meals)
        })();
    },[]);

    return(
        <>
        <Header />
            <div className="container mx-auto p-4">
                {meals ? (
                <>
                    {meals.map((categorie) => {
                    return (
                        <article className="mb-4 p-2 bg-gray-200 rounded-md">
                        <p className="text-lg font-semibold">{categorie.strMeal}</p>
                        </article>
                    );
                    })}
                </>
                ) : (
                <img src={chargement} alt="loading"></img>
                )}
        </div>
        <Footer />
      </>
    )

}
export default MealsPage