import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import useApi from '../hooks/useApi';
import { PropsSelectedUser } from '../interfaces/UserInterface';
import { WeatherForm } from '../interfaces/WeatherInterface';
import Alert from './Alert';
import FormComp from './FormComp';

interface Props {
  open: boolean;
  onClose: () => void;
  isSelectedUser: PropsSelectedUser | null;
}

const defaultFormData = {
  id: '',
  name: '',
  email: '',
  city: '',
};

const ModalComp = ({ open, onClose, isSelectedUser }: Props) => {
  const [sendData, setSendData] = useState<WeatherForm>(defaultFormData);
  const { isLoading, fetchData } = useApi(sendData);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const createUser = (data: WeatherForm) => {
    if (isLoading) {
      return;
    }
    // console.log(data);
    setSendData(data);
    setSnackbarMessage(`Usuario ${data.name} creado con éxito`);
    setIsSnackbarOpen(true);
    onClose();
  };

  const updateUser = async (data: WeatherForm) => {
    if (isLoading) {
      return;
    }
    // console.log(data);
    setSendData((prevData) => ({ ...prevData, ...data }));
    await fetchData();
    setSnackbarMessage(`Usuario ${data.name} actualizado con éxito`);
    setIsSnackbarOpen(true);
    console.log(snackbarMessage);
    onClose();
  };

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setIsSnackbarOpen(false);
  //   }, 5000);

  //   return () => clearTimeout(timerId);
  // }, [isSnackbarOpen]);

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            bgcolor: '#31343b',
            color: '#fff',
          }}
        >
          {isSelectedUser ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ bgcolor: '#31343b' }} dividers>
          <FormComp
            selectedUser={isSelectedUser}
            onCreate={createUser}
            onUpdate={updateUser}
            onClose={onClose}
          />
        </DialogContent>
      </Dialog>

      <Alert
        isAlertOpen={isSnackbarOpen}
        handleClose={() => setIsSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </>
  );
};

export default ModalComp;
