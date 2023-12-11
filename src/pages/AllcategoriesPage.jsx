import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import chargement from '../assets/chargement.gif';
import Footer from "../components/Footer";
import '../App.css'

const Allcategories = () => {
    const [categoriesdata, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const CategoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const CategoriesResponseData = await CategoriesResponse.json();
            setCategories(await CategoriesResponseData.categories);
        })();
    }, []);

    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                {categoriesdata ? (
                    <>
                        {categoriesdata.map((meal) => (
                            <article className="mb-4 p-2 bg-gray-200 rounded-md">
                                <p className="text-lg font-semibold">{meal.strCategory}</p>
                            </article>
                        ))}
                    </>
                ) : (
                    <img src={chargement} alt="loading" />
                )}
            </div>
            <Footer />
        </>
    );
}

export default Allcategories;
