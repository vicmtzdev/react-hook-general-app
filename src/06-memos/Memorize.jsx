import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';


export const Memorize = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <>

            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Counter With Hook</div>
                <div className="card-body">
                    <h5 className="card-title"> <Small value={counter} /> </h5>
                    <p className="card-text"> Función de contador.</p>
                </div>
            </div>


            <button className="btn btn-outline-dark" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-dark" onClick={() => decrement()}>-1</button>
            <button className="btn btn-outline-dark" onClick={reset}>Reset</button>
            <button className="btn btn-outline-dark" onClick={() => setShow(!show)}>Show: {JSON.stringify(show)}</button>
        </>
    )

}
