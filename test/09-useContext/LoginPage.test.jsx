import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContex/context/UserContext';
import { LoginPage } from '../../src/09-useContex/LoginPage';

describe('Pruebas en <LoginPage />', () => {

    const setUserMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());


    test('Debe de', () => {

        render(
            <UserContext.Provider value={{ user: null }}>

                <LoginPage />

            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();

    });

    test('Debe de mostrar el componente con el usuario', () => {

        const user = {
            id: 1,
            name: 'Victor',
        }

        render(
            <UserContext.Provider value={{ user: user }}>

                <LoginPage />

            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
        // screen.debug();

    });

    test('Debe de llamarse el setUser con el boton', () => {

        const user = {
            id: 123,
            name: 'Víctor Martínez',
            email: 'victor@google.com'
        }

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>

                <LoginPage />

            </UserContext.Provider>
        );

        const userButton = screen.getByLabelText('btn-user');
        fireEvent.click(userButton);
        expect(setUserMock).toHaveBeenCalledWith(user);
    });




});

