import { useState } from "react"

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <div className="row">

                <div className="col-sm-2">
                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">Counter Number One</div>
                        <div className="card-body">
                            <h5 className="card-title">{counter1}</h5>
                            <p className="card-text"> Incrementa.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">Counter Number Two</div>
                        <div className="card-body">
                            <h5 className="card-title">{counter2}</h5>
                            <p className="card-text">Se mantiene.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">Counter Number Three</div>
                        <div className="card-body">
                            <h5 className="card-title">{counter3}</h5>
                            <p className="card-text">Se mantiene.</p>
                        </div>
                    </div>
                </div>

            </div>

            <button
                className="btn btn-outline-dark"
                onClick={() => setCounter({
                    ...state,
                    counter1: counter1 + 1,
                })}>
                +1
            </button>
        </>
    )
}
