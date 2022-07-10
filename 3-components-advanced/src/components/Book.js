import {useState} from "react";
import {useEffect} from "react";
import styles from './Book.module.css';

export const Book = (props) => {

    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Updating highlighted at ' + props.title);
    },[highlighted]); //the useEffect will be executed at the initial render
    // and then only after the highlighted state is changed


    useEffect(() => {
        console.log('Updating marked at ' + props.title);
    },[deleted]);

    const clickHandler = () => {

        setHighlighted(state => !state);

    };

    const deleteHandler = (e) => {

        setDeleted(true);

    }

    let style = {};

    if (highlighted) {
        style.backgroundColor = 'blue';
    }

    if (deleted) {
        return <h2>Deleted</h2>;
    }

    return (
        <li style={{backgroundColor: highlighted ? 'blue' : 'red'}}>
            <article className={`${styles['book-item']} ${styles['other-class']}`}>
            <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>Price: ${props.price}</div>
                <span>Author: {props.author}</span>
                <footer>
                    <button onClick={clickHandler}>Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                </footer>
            </article>
        </li>
    )
};
