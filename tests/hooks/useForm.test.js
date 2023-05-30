import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Jony',
    email: 'jony@gmail.com',
  };

  test('Debe de regresar los valores por defecto ', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('Debe de cambiar el nombre del formulario', () => {
    const newName = 'Ariel';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    const event = {
      target: {
        name: 'name',
        value: newName,
      },
    };

    act(() => {
      onInputChange(event);
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test('Debe de realizar el reset del formulario', () => {
    const newName = 'Ariel';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    const event = {
      target: {
        name: 'name',
        value: newName,
      },
    };

    act(() => {
      onInputChange(event);
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState).toEqual(initialForm);
  });
});
