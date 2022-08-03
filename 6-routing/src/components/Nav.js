import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/starships/2">Starships</Link></li>
            </ul>
        </nav>
    )
}