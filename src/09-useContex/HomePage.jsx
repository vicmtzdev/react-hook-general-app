import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useContext(UserContext);

    return (

        <>

            <h1 className="my-3 mx-2">Home Page de {user?.name} </h1>

            <pre className="mx-3" aria-label="pre">
                {JSON.stringify(user, null, 3)}
            </pre>

        </>

    )
}
