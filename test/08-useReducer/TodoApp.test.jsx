import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';


jest.mock('../../src/hooks/useTodos');


describe('Pruebas en  <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo numero 1', done: false },
            { id: 2, description: 'Todo numero 2', done: true },
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        todosPendingCount: 1
    });

    test('Debe de mostrar el componente correctamente', () => {

        render(<TodoApp />);
        // screen.debug();
        expect(screen.getByText('Todo numero 1')).toBeTruthy();
        expect(screen.getByText('Todo numero 2')).toBeTruthy();

    });

});