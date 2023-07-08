import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;

    return (
        <>

            <div className="card text-white bg-dark" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Form with custom hook</div>
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

                    <input
                        type="password"
                        className="form-control mt-2"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />

                    <button className='btn btn-outline-light mt-3' onClick={onResetForm}>Delete</button>

                </div>
            </div>


        </>
    )
}
