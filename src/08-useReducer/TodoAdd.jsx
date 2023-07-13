import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm, description } = useForm({
        id: new Date().getTime(),
        description: '',
        done: false,
    });


    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        onNewTodo(formState);
        onResetForm();

    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder='¿Qué hay que hacer?'
                    className='form-control'
                    style={{ minWidth: "360px" }}
                    name="description"
                    value={description}
                    onChange={onInputChange}


                />
            </form>
            <button
                type='submit'
                className='btn btn-primary mx-0'
                onClick={onFormSubmit}

            >
                Agregar
            </button>
        </>
    )
}
