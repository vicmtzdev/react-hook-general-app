import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <>

            <h1 className="my-3 mx-2">Login Page</h1>

            <pre className='mx-3' aria-label='pre'>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className='btn btn-outline-dark mx-2'
                onClick={() => setUser({ id: 123, name: 'Víctor Martínez', email: 'victor@google.com' })}
                aria-label='btn-user'
            >
                Establecer Usuario
            </button>

        </>

    )
}
