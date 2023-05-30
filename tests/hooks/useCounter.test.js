import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en useCounter', () => {
  const initialCounter = 100;

  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter } = result.current;

    expect(counter).toBe(initialCounter);
  });

  test('Debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    //Siempre llamemos a una funcion o un codigo que modifique el state de un hook, componente, etc, tenemos que hacerlo dentro de un act() que se importa de la libreria de React Testing Library, este metodo act lleva un callback dentro, y dentro de esta funcion agregamos las demas funciones, codigo, etc que modifiquen los states
    act(() => {
      increment();
      increment(2);
    });

    //La razon por la que al expect se agrega el "result.current.counter" y no el "counter" que se extrae en la desestructuracion, es porque cuando se extrae el resultado por primera vez, el counter tendra siempre ese valor desde el momento que se lo extrae, por lo al intentar cambiar ese valor, este counter vuelve a su valor original desde que se lo extrajo, pero si usamos el result.current.counter estamos usando el valor actual modificado del counter en todo momento, y a eso es lo que hace referencia la palabra "current" que se agrega despues del "result". Por ultimo si tenemos un state que modifica un valor por ejemplo setCounter(counter + value), al intentar incrementar ese valor varias veces llamando a la funcion "increment()" solo incrementara 1 vez o dara falsos positivos, por lo tanto que si queremos que un state incremente o modifique su valor dependiendo de su estado actual hay que hacerlo con un callback de la siguiente manera setCounter(counter => counter + value)
    expect(result.current.counter).toBe(103);
  });

  test('Debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test('Debe de resetear el state al valor por defecto', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
