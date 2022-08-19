
import {useParams, useNavigate, useLocation, NavLink, Route, Routes} from "react-router-dom";
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

            <h3>Movies</h3>

            <nav>
                <ul>
                    {starship.films?.map((x,i) =>
                        <li><NavLink key={x} to={`films/${i + 1}`}>{x}</NavLink></li>
                    )}
                </ul>
            </nav>

            <section>
                <Routes>
                <Route path={`films/1`} element={<h3>Movie 1</h3>}/>
                <Route path={`films/2`} element={<h3>Movie 2</h3>}/>
                <Route path={`films/3`} element={<h3>Movie 3</h3>}/>
                </Routes>
            </section>

            <button onClick={nextStarshipHandler}>Next</button>

        </>
    );

};
