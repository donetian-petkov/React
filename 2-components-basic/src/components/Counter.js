import {useState} from "react";

export const Counter = (props) => {

    const [count, setCount ] = useState(props.start || 0);
    const [direction, setDirection] = useState('none');

    const increaseHandler = (e) => {

        setCount(oldCount => oldCount + 1);
        setDirection('Increment');


    }

    const decreaseHandler = (e) => {

        setCount(oldCount => oldCount - 1);
        setDirection('Decrement');

    }

    const resetHandler = (e) => {

        setCount(0);

    }

    let countTitle = '';

    if (count < 10) {
        countTitle = 'Counter';
    } else if (count < 20) {
        countTitle = 'Turbo Counter';
    } else if (count < 30) {
        countTitle = 'Mega Counter';
    } else if (count < 40) {
        countTitle = 'Giga Counter';
    } else {
        countTitle = 'Final Counter';
    }

    return (
      <div>
          <h1 style={{fontSize: 16 + count + 'px'}}>{countTitle}</h1>
          <h2>{direction}:{count}</h2>
          <button onClick={increaseHandler}>++</button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={decreaseHandler}>--</button>
      </div>
    );


}
