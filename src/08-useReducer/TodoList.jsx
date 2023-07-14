import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], oneDeleteTodo, onToggleTodo }) => {



    return (
        <>

            <ul className='list-group'>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id} oneDeleteTodo={oneDeleteTodo} onToggleTodo={onToggleTodo} />
                    ))
                }

            </ul>

        </>
    )
}
