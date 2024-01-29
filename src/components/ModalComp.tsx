import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import useApi from '../hooks/useApi';
import useUserActions from '../hooks/useUserActions';
import { PropsSelectedUser } from '../interfaces/UserInterface';
import { WeatherForm } from '../interfaces/WeatherInterface';
import Alert from './Alert';
import AlertError from './AlertError';
import FormComp from './FormComp';

interface Props {
  open: boolean;
  onClose: () => void;
  isSelectedUser: PropsSelectedUser | null;
}

const ModalComp = ({ open, onClose, isSelectedUser }: Props) => {
  const { addUser, updateUser } = useUserActions();
  const { isLoading, success, error, setError, fetchData } = useApi();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const createUser = async (data: WeatherForm) => {
    const weatherData = await fetchData(data);

    if (isLoading || !weatherData) {
      return;
    }

    addUser(weatherData);
    setSnackbarMessage(`Usuario ${data.name} creado con éxito`);
    setIsSnackbarOpen(true);
    onClose();
  };

  const updateUserById = async (data: WeatherForm) => {
    const weatherData = await fetchData(data);

    if (isLoading || !weatherData || !data.id) {
      return;
    }

    updateUser({ ...weatherData, id: data.id });
    setSnackbarMessage(`Usuario ${data.name} actualizado con éxito`);
    setIsSnackbarOpen(true);
    onClose();
  };

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
            onUpdate={updateUserById}
            onClose={onClose}
          />
        </DialogContent>
      </Dialog>

      {success && (
        <Alert
          isAlertOpen={isSnackbarOpen}
          handleClose={() => setIsSnackbarOpen(false)}
          message={snackbarMessage}
        />
      )}

      <AlertError handleOpen={error} handleClose={() => setError(false)} />
    </>
  );
};

export default ModalComp;
