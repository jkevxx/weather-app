import { Alert, Snackbar } from '@mui/material';

interface Props {
  handleOpen: boolean;
  handleClose: () => void;
}

const AlertError = ({ handleOpen, handleClose }: Props) => {
  return (
    <Snackbar
      open={handleOpen}
      autoHideDuration={7000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Error al Crear el Usuario, Por Favor Verifique la Información
        Introducida
      </Alert>
    </Snackbar>
  );
};

export default AlertError;
