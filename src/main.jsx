import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './05-memos/Memorize';
// import { MemoHook } from './05-memos/MemoHook';
// import { CallbackHoock } from './05-memos/CallbackHoock';
import { Padre } from './07-tarea-memo/Padre';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Padre />
  // </React.StrictMode>
);
