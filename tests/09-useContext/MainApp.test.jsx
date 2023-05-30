import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp/>', () => {
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el HomePage', () => {
    render(
      // Para reemplazar el componente BrowserRouter, en react router dom nos ofrecen algo que se llama MemoryRouter, este componente proporciona el useHref, useLocation, y todos aquellos Hooks que nos provee el componente BrowserRouter para que las rutas funcionen
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test('Debe de mostrar el LoginPage', () => {
    render(
      // La propiedad initialEntries en el componente MemoryRouter, indica que esta esperando un arreglo en el cual se indicara el segmento de la url en el que me encuentro. En este caso indico que me encuentro en la ruta '/login'
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});
