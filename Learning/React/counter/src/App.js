import { useState } from 'react';

import './App.css';

const calcValue = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

const Counter = (props) => {

    const [count, setCount] = useState(0);

    const increase = (i) => {
        setCount(count + i);
    }

    const decrease = (i) => {
        setCount(count - i);
    }

    return (
        <div className="app">
            <div className="counter">{count}</div>
            <div className="controls">
                <button onClick={() => increase(1)}>INC</button>
                <button onClick={() => decrease(1)}>DEC</button>
                <button onClick={()=> setCount(calcValue(-50, 50))}>RND</button>
                <button onClick={() => setCount(0)}>RESET</button>
            </div>
        </div>
    )
}

function App() {
    return (
        <Counter />
    );
}

export default App;
