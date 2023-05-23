import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

TodoList.defaultProps = {
  todo: [],
};
