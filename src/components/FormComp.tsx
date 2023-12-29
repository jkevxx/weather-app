import { Button, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRef, useState } from 'react';
import useWeatherApi from '../hooks/useWeatherApi';

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

interface FormDataType {
  name: string;
  email: string;
  city: string;
}

const defaultFormData = {
  name: '',
  email: '',
  city: '',
};

const FormComp = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);
  const { isLoading } = useWeatherApi(formData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameRef.current || !emailRef.current || !cityRef.current) {
      return;
    }

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const city = cityRef.current.value;

    console.log(isLoading);

    setFormData({
      name,
      email,
      city,
    });

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
