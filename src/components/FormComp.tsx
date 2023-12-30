import { Button, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import useWeatherApi from '../hooks/useWeatherApi';
import { PropsSelectedUser } from '../interfaces/UserInterface';
import { WeatherForm } from '../interfaces/WeatherInterface';

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

const defaultFormData = {
  id: '',
  name: '',
  email: '',
  city: '',
};

type Props = {
  selectedUser: PropsSelectedUser | null;
  onClose: () => void;
};

const FormComp = ({ selectedUser, onClose }: Props) => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const cityRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<WeatherForm>(defaultFormData);
  // const [city, setCity] = useState('');
  const [sendData, setSendData] = useState<WeatherForm>(defaultFormData);

  const { isLoading, fetchData } = useWeatherApi(sendData);

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
      // setCity(selectedUser.city);
    } else {
      setFormData(defaultFormData);
      // setCity('');
    }
  }, [selectedUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setCity(value);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!nameRef.current || !emailRef.current || !cityRef.current) {
    //   return;
    // }

    // const name = nameRef.current.value;
    // const email = emailRef.current.value;
    // const city = cityRef.current.value;

    const { id, name, email, city } = formData;

    console.log('formComp', isLoading);

    console.log(sendData.id);

    if (id) {
      setSendData((prevData) => ({
        ...prevData,
        id: selectedUser ? selectedUser.id : '',
        name: name,
        email: email,
        city: city,
      }));
      console.log(sendData);
      await fetchData();
    } else {
      setSendData((prevData) => ({
        ...prevData,
        name,
        email,
        city,
      }));
    }

    // await fetchData();

    onClose();
    // formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} autoComplete={'off'}>
      <BootstrapInput
        id="name"
        name="name"
        // inputRef={nameRef}
        fullWidth
        placeholder="Nombre y Apellidos"
        type="text"
        // defaultValue={formData.name}
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <BootstrapInput
        id="email"
        name="email"
        // inputRef={emailRef}
        fullWidth
        placeholder="Correo"
        type="email"
        // defaultValue={formData.email}
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <BootstrapInput
        id="city"
        name="city"
        // inputRef={cityRef}
        fullWidth
        placeholder="Ciudad"
        type="text"
        // defaultValue={formData.city}
        value={formData.city}
        onChange={handleInputChange}
        required
      />
      <Button
        sx={{ mt: 2 }}
        fullWidth
        variant="contained"
        color="info"
        type="submit"
      >
        {selectedUser ? 'Editar' : 'Crear'}
      </Button>
    </form>
  );
};

export default FormComp;
