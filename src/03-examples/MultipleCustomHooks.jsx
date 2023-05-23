import { useCounter, useFetch, useFetchAllQuotes } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `http://localhost:3000/breakingbad?quote_id=${counter}`
  );
  const { allQuotes } = useFetchAllQuotes('http://localhost:3000/breakingbad');
  const { quote, author } = !!data && data[0]; //Aqui aplicamos doble negacion (!!) se hace esto porque "data" al principio es null por lo tanto no se puede desestructurar algo de null, asi que al aplicar la primera negacion, osea !data, transformamos el valor de null a true, y con la segunda negacion !!data convertimos el valor de true a false, por lo tanto de esta forma estamos haciendo que solo se desestructure cuando data tenga datos.
  // Otra opcion para convertir el data en un Booleano seria con la funcion de javascript Boolean(data), esto convertira al data con el valor null en un booleano, en este caso como el valor es null entonces el Boolean() lo convertira en false hasta que tenga datos y lo convertira a true

  const disabledButtonNext = isLoading || counter === allQuotes.length;
  const disabledButtonPrevious = isLoading || counter === 1;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button
        className='btn btn-primary'
        disabled={disabledButtonPrevious}
        onClick={() => decrement()}
      >
        Prev Quote
      </button>
      <button
        className='btn btn-primary'
        disabled={disabledButtonNext}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
