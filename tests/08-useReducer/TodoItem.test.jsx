import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<TodoItem />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el Todo pendiente de completar', () => {
    render(
      <TodoItem
        {...todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');

    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('Debe de mostrar el Todo completado', () => {
    todo.done = true;

    render(
      <TodoItem
        {...todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('El boton debe de llamar el deleteTodo', () => {
    render(
      <TodoItem
        {...todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const deleteButton = screen.getByTestId('deleteButton');

    fireEvent.click(deleteButton);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
