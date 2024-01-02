import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../redux/store';

describe('App', () => {
  // test('should render', () => {
  //   render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );
  // });

  test('should add a user', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

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

    fireEvent.submit(submitBtn);

    // find the user added
    const userAdded = await screen.findByText(
      /User Test/i,
      {},
      { timeout: 5000 }
    );
    expect(userAdded).toBeDefined();

    // check if the alert message appeared
    // const successAlert = await screen.findByText(
    //   'Usuario User Test creado con éxito',
    //   {},
    //   { timeout: 6000 }
    // );
    const successAlert = screen.getByText('Usuario User Test creado con éxito');
    expect(successAlert).toBeDefined();
  });
});
