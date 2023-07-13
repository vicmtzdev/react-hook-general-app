import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
},
{
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del tiemo',
    done: false,
},
]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className="card text-white bg-dark m-3" style={{ minWidth: "30rem" }}>
                    <div className="card-header d-flex justify-content-center p-1 m-1"><h3>Tareas App</h3></div>
                    <div className="card-body">

                        <div className='d-flex flex-row px-0 justify-content-between my-1'>
                            <TodoAdd onNewTodo={handleNewTodo} />
                        </div>

                        <TodoList todos={todos} />

                        <div className='d-flex flex-row px-0 justify-content-between mt-1'>
                            <h6 className='mx-1'>Todos: {10} </h6>
                            <h6 className='mx-1'>{2} pendiente(s)</h6>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
