import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {}, [username]);

  useEffect(() => {}, [email]);

  return (
    <>
      <h1>Simple Form With Custom Hook</h1>

      <hr />
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='User Name'
          name='username'
          value={username}
          onChange={onInputChange}
        />
        <input
          type='email'
          className='form-control mt-3'
          placeholder='jony@gmail.com'
          name='email'
          value={email}
          onChange={onInputChange}
        />
        <input
          type='password'
          className='form-control mt-3'
          placeholder='Your Pass'
          name='password'
          value={password}
          onChange={onInputChange}
        />
      </form>

      <button className='btn btn-primary my-3' onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
