import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
        <main className="main">
            <h1 className="hometitle">Welcome to the World of Monsters</h1>

            <Link to="/monsters" >
                <button className="homebutton">Enter Here</button>
            </Link>
        </main>
        </>
    );
}