import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';



describe('Pruebas en el useCounter', () => {

    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(0);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('Debe de generar el counter con el valor de  100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => {

            increment();

        });

        expect(result.current.counter).toBe(1);

    });

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(2));
        const { decrement } = result.current;

        act(() => {

            decrement();

        });

        expect(result.current.counter).toBe(1);

    });


    test('Debe de hacer reset el contador', () => {

        const { result } = renderHook(() => useCounter(5));
        const { increment, reset } = result.current;

        act(() => {

            increment();
            increment();
            reset();

        });

        expect(result.current.counter).toBe(5);

    });

});