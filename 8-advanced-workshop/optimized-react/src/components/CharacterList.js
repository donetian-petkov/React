import {useCallback, useEffect, useState} from "react";
import CharacterItem from "./CharacterItem";


const CharacterList = ({
    characters
                       }) => {

    const [ favourite, setFavourite ] = useState('');

    const selectFavourite = useCallback((name) => {

        setFavourite(name);
    },[]);

    return (

        <>
            <h2>{favourite || 'Select Favourite'}</h2>
        <ul>
            { characters.map(x => <CharacterItem
                name={x.name}
                key={x.name}
                onClick={selectFavourite}
            />)}
        </ul>
        </>
    )

}

export default CharacterList;