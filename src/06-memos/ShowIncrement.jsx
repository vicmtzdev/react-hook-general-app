import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {


    console.log('Me  volvi a generar');

    return (
        <>

            <button className="btn btn-outline-dark" onClick={() => { increment(2) }}>+1</button>

        </>
    )
})
