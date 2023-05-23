import { useForm } from '../hooks/useForm';
import PropTypes from 'prop-types';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    const todoDescTrim = description.trim();
    if (todoDescTrim.length === 0)
      return alert('No se puede agregar una tarea vacia');

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Que hay que hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button type='submit' className='btn btn-outline-primary mt-1'>
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

TodoAdd.defaultProps = {
  onNewTodo: () => {
    console.log('No se admitio el prop al componente TodoAdd');
  },
};
