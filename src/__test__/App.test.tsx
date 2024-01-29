import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, test } from 'vitest';
import App from '../App';

import { store } from '../redux/store';

// vi.mock('../hooks/useApi', () => {
//   const mockData = {
//     id: 1,
//     name: 'User Test',
//     email: 'user.test@example.com',
//     city: 'Guadalajara',
//     latitude: 123,
//     longitude: 456,
//     currentConditions: {
//       datetimeEpoch: 123456789,
//       temp: 20,
//       humidity: 60,
//       windspeed: 5,
//       conditions: 'Clear',
//     },
//     days: [],
//   };
//   return {
//     __esModule: true,
//     default: () => ({
//       fetchData: vi.fn().mockResolvedValue(mockData),
//       isLoading: false,
//       error: false,
//       success: true,
//       setError: vi.fn(),
//     }),
//   };
// });

describe('App', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('should add a user', async () => {
    const user = userEvent.setup();

    // find the button and click it
    const createUserBtn = screen.getByRole('button', {
      name: /Crear Nuevo Usuario/i,
    });
    expect(createUserBtn).toBeDefined();

    await user.click(createUserBtn);

    // find the form and fill it
    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    const nameInput = screen.getByPlaceholderText(/Nombre y Apellidos/i);
    expect(nameInput).toBeDefined();

    const emailInput = screen.getByPlaceholderText(/Correo/i);
    expect(emailInput).toBeDefined();

    const cityInput = screen.getByPlaceholderText(/Ciudad/i);
    expect(cityInput).toBeDefined();

    await user.type(nameInput, 'User Test');
    await user.type(emailInput, 'user.test@example.com');
    await user.type(cityInput, 'Guadalajara');

    const submitBtn = screen.getByRole('button', { name: /CREAR/i });
    expect(submitBtn).toBeDefined();

    await user.click(submitBtn);
    // fireEvent.submit(submitBtn);

    // find the user added
    const userAdded = await screen.findByText(
      /User Test/i,
      {},
      { timeout: 5000 }
    );
    expect(userAdded).toBeDefined();

    // find the success alert
    const successAlert = screen.getByText('Usuario User Test creado con éxito');
    expect(successAlert).toBeDefined();

    // expect(useApi).toHaveBeenCalledTimes(1);

    // vi.clearAllMocks();

    // screen.debug(undefined, 30000);
  });

  test('should update a user', async () => {
    const user = userEvent.setup();

    // find the user
    const userTest = await screen.findByText(/User Test/i);
    expect(userTest).toBeDefined();

    // find the edit button
    const editBtn = screen.getByRole('button', { name: /EDITAR/i });
    expect(editBtn).toBeDefined();

    await user.click(editBtn);

    // find the form
    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    const nameInput = screen.getByPlaceholderText(/Nombre y Apellidos/i);
    expect(nameInput).toBeDefined();

    const emailInput = screen.getByPlaceholderText(/Correo/i);
    expect(emailInput).toBeDefined();

    const cityInput = screen.getByPlaceholderText(/Ciudad/i);
    expect(cityInput).toBeDefined();

    await user.clear(nameInput);
    await user.clear(emailInput);
    await user.clear(cityInput);

    await user.type(nameInput, 'User Test');
    await user.type(emailInput, 'user.test@example.com');
    await user.type(cityInput, 'Guadalajara');

    const submitBtn = screen.getByRole('button', { name: /ACTUALIZAR/i });
    expect(submitBtn).toBeDefined();

    await user.click(submitBtn);
  });

  test('should delete a user', async () => {
    const user = userEvent.setup();

    // find the user
    const userTest = await screen.findByText(/User Test/i);
    expect(userTest).toBeDefined();

    // find the delete button
    const deleteBtn = screen.getByRole('button', { name: /BORRAR/i });
    expect(deleteBtn).toBeDefined();

    await user.click(deleteBtn);

    // find the alert
    const alert = screen.getByRole('dialog');
    expect(alert).toBeDefined();

    // find the confirm button
    const confirmBtn = screen.getByRole('button', { name: /CONFIRMAR/i });
    expect(confirmBtn).toBeDefined();

    await user.click(confirmBtn);

    await waitFor(() => {
      expect(screen.queryByText(/User Test/i)).toBeNull();
    });

    // screen.debug(undefined, 30000);
    // find the user deleted
    // const userDeleted = await screen.findByText(/User Test/i);
    // expect(userDeleted).toBeNull();
  });
});
