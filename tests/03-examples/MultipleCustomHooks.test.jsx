import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch'); //Tener en cuenta que cuando se hace un mock, no se debe apuntar al archivo de barril porque si el componente usa otro custom hook, tambien lo convertira en mock y eso nos dara error, lo mejor es apuntar directamente al hook
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  //Para asegurarme de que todas las funciones a las que les estoy haciendo un mock sean reseteadas, usamos una parte del ciclo de vida de las pruebas que es "beforeEach", este significa "antes de cada prueba", y con jest.clearAllMocks() limpiamos todos los mock y asi en caso que un mock ya haya sido llamado por un test, al ejecutar el test siguiente que use el mismo mock lo usara con los valores reseteados
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de hacer match con el snapshot', () => {
    //! Si el componente que renderizamos llama a un hook que previamente convertimos en un mock y a ese mock lo necesitamos con valores de retorno diferentes en cada test, hay que llamar al mock en todos los tests antes de renderizar el componente, por ejemplo en este caso, llamar al useFetch.mockReturnValue() antes del render del componente <MultipleCustomHooks />. Pero si el mock que queremos usar tendra siempre los mismos valores de retorno, entonces a este mock podemos definirlo en el describe fuera de los test, como se hizo mas arriba con el mock de useCounter() para que esto afecte a todos los tests
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    const { container } = render(<MultipleCustomHooks />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el componente por defecto ', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    const prevButton = screen.getByRole('button', { name: 'Prev Quote' });

    expect(nextButton.disabled).toBeTruthy();
    expect(prevButton.disabled).toBeTruthy();
  });

  test('Debe de mostrar un Quote ', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: 'Hola Mundo',
          author: 'Jony',
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(screen.getByText('Jony')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    const prevButton = screen.getByRole('button', { name: 'Prev Quote' });

    expect(nextButton.disabled).toBeFalsy();
    expect(prevButton.disabled).toBeTruthy();
  });

  test('Debe de llamar a la funcion de incrementar ', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: 'Hola Mundo',
          author: 'Jony',
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
