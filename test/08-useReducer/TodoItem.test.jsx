import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Casa Stark',
        done: false,
    };

    const oneDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());


    test('Debe de mostrar el todo pendiente de completar', () => {

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} oneDeleteTodo={oneDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between p-2 my-1 border border-2 rounded-3');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center m-1 ');

    });

    test('Debe de mostrar el todo completado', () => {

        todo.done = true;

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} oneDeleteTodo={oneDeleteTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center m-1 text-decoration-line-through');

    });

    test('Debe de llamar el span el toggle todo', () => {

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} oneDeleteTodo={oneDeleteTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('Debe de llamar el boton el delete todo', () => {

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} oneDeleteTodo={oneDeleteTodoMock} />);

        const buttonElement = screen.getByLabelText('delete-button');
        fireEvent.click(buttonElement);
        expect(oneDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

});