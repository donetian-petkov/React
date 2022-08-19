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
        <ul>
            {starships.map((x, i) => <NavLink key={x.name} to={`/starships/${i + 1}`}>{x.name}</NavLink>)}
        </ul>
    )

}