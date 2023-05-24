import { Outlet } from 'react-router-dom';
import { Navbar } from './';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      {/* Este componente llamado Outlet se encarga de mostrar las rutas hijas que estan dentro de una ruta padre, en este caso MainApp es el componente padre que tendra todas las rutas hijas asi que debe ir el componente Outlet al final, de lo contrario no se mostraran los componentes que esten en las rutas hijas de MainApp */}
      <Outlet />
    </UserProvider>
  );
};
