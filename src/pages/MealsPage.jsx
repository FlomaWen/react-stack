import { useState } from "react"
import Header from "../components/Header";
import chargement from '../assets/chargement.gif'

const MealsPage = () =>{
    
    const [meals,setMeals] = useState(null)

    if (meals == null){
        (async() => {
            const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

            setMeals(await mealsResponse.json())
        })();
    }

    return(
        <>
        <Header />
            <div className="meals-container">
                {meals ? (
                <>
                    {meals.meals.map((meal) => {
                    return (
                        <article>
                        <p>{meal.strMeal}</p>
                        </article>
                    );
                    })}
                </>
                ) : (
                <img src={chargement} alt="loading"></img>
                )}
        </div>
      </>
    )

}
export default MealsPage