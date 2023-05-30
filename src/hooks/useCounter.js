import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => setCounter((current) => current + value);
  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter((current) => current - value);
  };
  const reset = () => setCounter(initialValue);

  //Si el valor a devolver es un objeto entonces se retorna un objeto return { counter }, pero si el valor a devolver es un array entonces se retornara un array return [ counter ], por lo general es mejor retornar un objeto ya que se podra desestructurarlo y obtener exactamente lo que queremos
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
