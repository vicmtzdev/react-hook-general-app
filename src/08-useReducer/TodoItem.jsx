
export const TodoItem = ({ todo }) => {


    return (
        <>
            <li className='list-group-item d-flex justify-content-between p-2 my-1 border border-2 rounded-3'>
                <span className='align-self-center m-1'> {todo.description} </span>
                <button className='btn btn-outline-danger m-0'>Borrar</button>
            </li>
        </>
    )
}
