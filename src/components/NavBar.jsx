import { Link, NavLink } from "react-router-dom";


export default function NavBar () {
    return (
        <>
            <ul className="bar">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <Link to="/monsters">Monster Catalogue</Link>
                </li>
                <li>
                    <Link to="/favourites">Favourites</Link>
                </li>
            </ul>
        </>
    )
}