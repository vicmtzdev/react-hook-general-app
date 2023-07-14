import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, todosPendingCount } = useTodos();

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className="card text-white bg-dark m-3" style={{ minWidth: "30rem" }}>
                    <div className="card-header d-flex justify-content-center p-1 m-1"><h3>Tareas App</h3></div>
                    <div className="card-body">

                        <div className='d-flex flex-row px-0 justify-content-between my-1'>
                            <TodoAdd onNewTodo={handleNewTodo} />
                        </div>

                        <TodoList todos={todos} oneDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />

                        <div className='d-flex flex-row px-0 justify-content-between mt-1'>
                            <h6 className='mx-1'>Todos: {todosCount} </h6>
                            <h6 className='mx-1'>{todosPendingCount} pendiente(s)</h6>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
