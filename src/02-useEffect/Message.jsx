import { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])


    return (
        <>
            <div style={{ maxWidth: "18rem" }}>

                <h3 className="text-center mt-2">Usuario ya existe</h3>
                {JSON.stringify(coords)}

            </div>
        </>
    )
}
