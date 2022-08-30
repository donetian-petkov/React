
import {useParams, useNavigate, useLocation, NavLink, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

export const Starship = () => {

    const [starship, setStarship] = useState({});
    const { starshipId, filmId } = useParams();
    const params = useParams();
    const [film, setFilm] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    console.log(filmId);
    console.log(params);

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}`)
            .then(res => res.json())
            .then(result => {
                setStarship(result);
            });
    },[starshipId]);

    useEffect(() => {

        if (starship.films?.length > 0 && filmId) {

            const fId = Number(filmId) - 1;

            fetch(starship.films[fId])
                .then(res => res.json())
                .then(result => {
                    setFilm(result);
                });
        }


    },[filmId]);

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
                        filmId
                            ? <li><NavLink key={x} to={`/starships/${starshipId}/films/${i + 1}`}>{x}</NavLink></li>
                            : <li><NavLink key={x} to={`films/${i + 1}`}>{x}</NavLink></li>
                    )}
                </ul>
            </nav>

            <section>
                <Routes>
                    <Route path={``} element={<h3>{film.title}</h3>}/>
                </Routes>
            </section>

            <button onClick={nextStarshipHandler}>Next</button>

        </>
    );

};


