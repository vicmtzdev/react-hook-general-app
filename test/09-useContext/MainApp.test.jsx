import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContex/MainApp';

describe('Pruebas en <MainApp />', () => {

    test('Debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>

                <MainApp />

            </MemoryRouter>

        );

        expect(screen.getByText('Home Page de')).toBeTruthy();

    });

    test('Debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>

                <MainApp />

            </MemoryRouter>

        );

        expect(screen.getByText('Login Page')).toBeTruthy();

    });

    test('Debe de mostrar el AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>

                <MainApp />

            </MemoryRouter>

        );

        expect(screen.getByText('About Page')).toBeTruthy();

    });

});