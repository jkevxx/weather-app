import { Button, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
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
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
    ].join(','),
    '&:focus': {
      boxShadow: `#2196f3 0 0 0 0.2rem`,
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
  onCreate: (data: WeatherForm) => void;
  onUpdate: (data: WeatherForm) => Promise<void>;
};

const FormComp = ({ selectedUser, onCreate, onUpdate, onClose }: Props) => {
  const [formData, setFormData] = useState<WeatherForm>(defaultFormData);

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.id) {
      await onUpdate(formData);
    } else {
      onCreate(formData);
    }

    setFormData(defaultFormData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete={'off'}>
      <BootstrapInput
        id="name"
        name="name"
        fullWidth
        placeholder="Nombre y Apellidos"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <BootstrapInput
        id="email"
        name="email"
        fullWidth
        placeholder="Correo"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <BootstrapInput
        id="city"
        name="city"
        fullWidth
        placeholder="Ciudad"
        type="text"
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
        {selectedUser ? 'Actualizar' : 'Crear'}
      </Button>
    </form>
  );
};

export default FormComp;
