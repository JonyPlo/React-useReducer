import React, { useEffect, useState } from 'react';

export const useFetchAllQuotes = (url) => {
  const [stateQuotes, setStateQuotes] = useState({
    quotes: []
  });

  const getQuotes = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setStateQuotes({...stateQuotes, quotes: data})
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return { allQuotes: stateQuotes.quotes };
};
