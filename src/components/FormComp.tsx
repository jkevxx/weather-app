import { Button, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef, useState } from 'react';
import useApi from '../hooks/useApi';
import useUserActions from '../hooks/useUserActions';

const BootstrapInput = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: '#1A2027',
    border: '1px solid',
    borderColor: '#E0E3E7',
    color: '#E0E3E7',
    fontSize: 16,
    borderRadius: 6,
    marginBottom: '14px',
    padding: '10px 12px',
    // transition: ['border-color', 'background-color', 'box-shadow'],
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
    ].join(','),
    '&:focus': {
      boxShadow: `#2196f3 0 0 0 0.2rem`,
      // borderColor: 'hsla(207, 66.70%, 65.90%, 0.85)',
    },
  },
}));

const FormComp = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [city, setCity] = useState('');
  const { data, loading } = useApi(city);
  const { addUser } = useUserActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameRef.current || !emailRef.current || !cityRef.current) {
      return;
    }

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const city = cityRef.current.value;

    const userData = {
      name,
      email,
      city,
      lat: 38.7072,
      long: -9.1355,
      date: new Date().toISOString(),
      temperature: 0,
      humidity: 0,
      wind_speed: 0,
    };

    setCity(city);

    // if (!loading) {
    // }
    addUser(userData);
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} autoComplete={'off'}>
      <BootstrapInput
        id="name"
        name="name"
        inputRef={nameRef}
        fullWidth
        placeholder="Nombre y Apellidos"
        type="text"
        // defaultValue=""
        // value=""
        required
      />
      <BootstrapInput
        id="email"
        name="email"
        inputRef={emailRef}
        fullWidth
        placeholder="Correo"
        type="email"
        // defaultValue=""
        // value=""
        required
      />
      <BootstrapInput
        id="city"
        name="city"
        inputRef={cityRef}
        fullWidth
        placeholder="Ciudad"
        type="text"
        // defaultValue=""
        // value=""
        required
      />
      <Button
        sx={{ mt: 2 }}
        fullWidth
        variant="contained"
        color="info"
        type="submit"
      >
        Crear
      </Button>
    </form>
  );
};

export default FormComp;
