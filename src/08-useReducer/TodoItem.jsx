
export const TodoItem = ({ todo, oneDeleteTodo, onToggleTodo }) => {


    return (
        <>
            <li className='list-group-item d-flex justify-content-between p-2 my-1 border border-2 rounded-3'>
                <span className={`align-self-center m-1 ${todo.done ? 'text-decoration-line-through' : ''}`} aria-label="span" onClick={() => onToggleTodo(todo.id)}> {todo.description} </span>
                <button className='btn btn-outline-danger m-0' aria-label="delete-button" onClick={() => oneDeleteTodo(todo.id)}>Borrar</button>
            </li>
        </>
    )
}
