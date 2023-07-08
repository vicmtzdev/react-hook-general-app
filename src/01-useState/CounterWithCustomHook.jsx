import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>

            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Counter With Hook</div>
                <div className="card-body">
                    <h5 className="card-title">{counter}</h5>
                    <p className="card-text"> Función de contador.</p>
                </div>
            </div>


            <button className="btn btn-outline-dark" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-dark" onClick={() => decrement()}>-1</button>
            <button className="btn btn-outline-dark" onClick={reset}>Reset</button>
        </>
    )
}
