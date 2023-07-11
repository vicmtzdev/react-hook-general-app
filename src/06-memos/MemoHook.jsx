import { useState, useMemo } from 'react';
import { useCounter } from '../hooks';


const heavyStuff = (iterationNumber = 100) => {

    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {

    const { counter, increment, decrement, reset } = useCounter(500);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>

            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Counter With Hook</div>
                <div className="card-body">
                    <h5 className="card-title"> <small>{counter}</small> </h5>
                    <h5 className="card-text"> {memorizeValue} </h5>
                </div>
            </div>


            <button className="btn btn-outline-dark" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-dark" onClick={() => decrement()}>-1</button>
            <button className="btn btn-outline-dark" onClick={reset}>Reset</button>
            <button className="btn btn-outline-dark" onClick={() => setShow(!show)}>Show: {JSON.stringify(show)}</button>
        </>
    )

}
