
import {useParams, useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const Starship = () => {

    const [starship, setStarship] = useState({});
    const {starshipId} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}`)
            .then(res => res.json())
            .then(result => {
                setStarship(result);
            });
    },[starshipId]);

    const nextStarshipHandler = (e) => {

        navigate(`/starships/${Number(starshipId) + 1}`);
    }

    return (
        <>
            <h2>Starship Page</h2>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
            </ul>

            <button onClick={nextStarshipHandler}>Next</button>

        </>
    );

};
