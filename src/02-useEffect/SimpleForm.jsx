import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Jony2',
    email: 'jony@gmail.com',
    password: 'asd123',
  });
  
  const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {}, [username]);

  useEffect(() => {}, [email]);

  return (
    <>
      <h1>Simple Form</h1>

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
      {username === 'Jony2' && <Message />}
    </>
  );
};
