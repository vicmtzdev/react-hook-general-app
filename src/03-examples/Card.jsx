
export const Card = ({ name, illustrator, rarity, stage, hp, counter, increment, decrement, reset }) => {
    return (
        <>

            <div className="card text-white bg-dark mx-auto rounded-3" style={{ maxWidth: "18rem" }}>
                <img className="card-img-top p-3 pb-0" src={`https://assets.tcgdex.net/en/swsh/swsh3/${counter}/high.png`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title p-2">{name}</h5>
                    <p className="card-text m-2">Illustrator: {illustrator}</p>
                    <table className="table table-bordered table-dark m-2 mt-3" style={{ maxWidth: "93%" }}>
                        <tbody>
                            <tr>
                                <th scope="row" className="d-flex justify-content-center">HP</th>
                                <td className="text-center">{hp}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="d-flex justify-content-center">Stage</th>
                                <td className="text-center">{stage}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="d-flex justify-content-center">Rarity</th>
                                <td className="text-center">{rarity}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-dark mt-3" onClick={() => decrement()}> {'<'} </button>
                <button className="btn btn-dark mt-3" onClick={reset}>Primera carta</button>
                <button className="btn btn-dark mt-3" onClick={() => increment()}> {'>'} </button>
            </div>

        </>
    )
}
