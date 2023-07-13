import { useReducer } from 'react';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
},
{
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del alma',
    done: false,
},
]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className="card text-white bg-dark m-3" style={{ minWidth: "30rem" }}>
                    <div className="card-header d-flex justify-content-center p-1 m-1"><h3>Tareas App</h3></div>
                    <div className="card-body">

                        <div className='d-flex flex-row px-0 justify-content-between my-1'>
                            <form>
                                <input
                                    type="text"
                                    placeholder='¿Qué hay que hacer?'
                                    className='form-control'
                                    style={{ minWidth: "360px" }}

                                />
                            </form>
                            <button
                                type='submit'
                                className='btn btn-primary mx-0'
                            >
                                Agregar
                            </button>
                        </div>

                        <ul className='list-group'>
                            {
                                todos.map(todo => (
                                    <li key={todo.id} className='list-group-item d-flex justify-content-between p-2 my-1 border border-2 rounded-3'>
                                        <span className='align-self-center m-1'>Item 1</span>
                                        <button className='btn btn-outline-danger m-0'>Borrar</button>
                                    </li>
                                ))
                            }

                        </ul>


                        <div className='d-flex flex-row px-0 justify-content-between mt-1'>
                            <h6 className='mx-1'>Todos: {10} </h6>
                            <h6 className='mx-1'>{2} pendiente(s)</h6>
                        </div>

                    </div>
                </div>

                {/* <div className="card text-white bg-dark m-3" style={{ maxWidth: "18rem" }}>
                    <div className="card-header">Agregar Todo</div>
                    <div className="card-body">
                        <form>
                            <input
                                type="text"
                                placeholder='¿Qué hay que hacer?'
                                className='form-control'
                            />
                            <button
                                type='submit'
                                className='btn btn-outline-light mt-2'
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div> */}
            </div>


        </>
    )
}
