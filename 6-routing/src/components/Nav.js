import { NavLink } from "react-router-dom";
import './Navigation.css';

const setStyle = ({isActive}) => {

    return isActive ? 'navlink' : undefined
}


export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink className={setStyle} to="/">Home</NavLink></li>
                <li><NavLink className={setStyle} to="/about">About</NavLink></li>
                <li><NavLink className={setStyle} to="/contact">Contact</NavLink></li>
                <li><NavLink className={setStyle} to="/pricing">Pricing</NavLink></li>
                <li><NavLink className={setStyle} to="/starships">Starships</NavLink></li>
                <li><NavLink className={setStyle} to="/millennium-falcon">Millennium Falcon</NavLink></li>
            </ul>
        </nav>
    )
}
