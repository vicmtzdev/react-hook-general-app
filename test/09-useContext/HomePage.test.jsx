import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContex/context/UserContext';
import { HomePage } from '../../src/09-useContex/HomePage';

describe('Pruebas en <HomePage />', () => {

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>

                <HomePage />

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

                <HomePage />

            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
        // screen.debug();

    });

});