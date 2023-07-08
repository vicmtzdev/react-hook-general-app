import { useEffect } from "react";
import { useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'vicuwur',
        email: 'vicuwur@google.com',
    })

    const { username, email } = formState;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {
        console.log('useEffect called!');
    }, []);

    useEffect(() => {
        console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        console.log('email changed!');
    }, [email]);


    return (
        <>

            <div className="card text-white bg-dark" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Simple Form</div>
                <div className="card-body">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onInputChange}
                    />

                    <input
                        type="email"
                        className="form-control mt-2"
                        placeholder="vicuwur@google.com"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />

                </div>
            </div>


        </>
    )
}
