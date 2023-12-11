import {Link} from "react-router-dom"

const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/Meals">Recettes</Link></li>
                    <li><Link to="/">Accueil</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header