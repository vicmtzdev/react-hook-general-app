import { Hijo } from './Hijo'
import { useState, useCallback } from 'react';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);


    const incrementar = useCallback(
        (num) => {
            setValor((value) => value + num)
        },
        [],
    )


    // const incrementar = (num) => {
    //     setValor(valor + num)
    // }


    return (
        <div>

            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Tarea Memo</div>
                <div className="card-body">
                    <h5 className="card-title"> <small>{valor}</small> </h5>
                </div>
            </div>

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
