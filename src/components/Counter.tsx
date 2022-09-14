import React, { useState } from 'react';

export const Counter = () => {
    const [state, setState] = useState(0);

    const handleClick = () => {
        setState((prev) => prev + 1);
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={handleClick}>+</button>
        </div>
    );
};

