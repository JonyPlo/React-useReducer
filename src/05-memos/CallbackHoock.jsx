import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHoock = () => {
  const [counter, setCounter] = useState(10);

  // Recordar que useCallBack funciona junto con memo(), por lo tanto cuando se use este hook para evitar que un componente que recibe una prop de tipo funcion se rerenderice, este componente debe estar dentro de un memo(), en este caso si vamos al componente ShowIncrement veremos que esta dentro de un memo().
  // Recordar tambien que lo que useCallBack esta memorizando no es el setCounter, si no la funcion que lo envuelve.
  const incrementFather = useCallback((value) => {
    setCounter((oldCount) => oldCount + value);
  }, []);

  useEffect(() => {
    // incrementFather()
  }, [incrementFather]);
  

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
