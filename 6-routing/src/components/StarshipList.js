import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export const StarshipList = (props) => {

    const [starships, setStarships] = useState([]);

    useEffect(() => {

        fetch(`https://swapi.dev/api/starships`)
            .then(res => res.json())
            .then(res => {
                setStarships(res.results);
            })

    },[])


    return (
        <>
            <h1>Starships</h1>
        <ul>
            {starships.map((x, i) => <li><NavLink key={x.name} to={`/starships/${x.url.split('/')[5]}`}>{x.name} </NavLink></li>)}
        </ul>
        </>
    )

}