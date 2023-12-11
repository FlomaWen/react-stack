import { useEffect, useState } from "react"
import Header from "../components/Header";
import chargement from '../assets/chargement.gif'
import Footer from "../components/Footer";
import '../App.css'

const Country = () =>{
    const [countrys,setCountry] = useState(null)

    useEffect(() => {
        (async() => {
            const countryResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
            const countryResponseData = await countryResponse.json();
            setCountry(await countryResponseData.meals)
        })();
    },[]);

    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                {countrys ? (
                    <>
                        {countrys.map((country) => (
                            <article className="mb-4 p-2 bg-gray-200 rounded-md">
                                <p className="text-lg font-semibold">{country.strArea}</p>
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
export default Country