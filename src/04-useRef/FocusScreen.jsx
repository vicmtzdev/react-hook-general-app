import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {

        inputRef.current.select();

    }


    return (
        <>

            <div className="card text-white bg-dark" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Focus Screen With useRef hook</div>
                <div className="card-body">

                    <input
                        ref={inputRef}
                        type="text"
                        className="form-control"
                        placeholder="Username"
                    />

                    <button className='btn btn-outline-light mt-3' onClick={onClick}>Set Focus</button>

                </div>
            </div>

        </>
    )
}
