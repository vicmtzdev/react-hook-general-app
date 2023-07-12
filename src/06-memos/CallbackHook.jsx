import { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0)

    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    );



    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>

            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Counter With Callback Hook</div>
                <div className="card-body">
                    <h5 className="card-title"> <small>{counter}</small> </h5>
                </div>
            </div>

            <ShowIncrement increment={incrementFather} />

        </>
    )
}
