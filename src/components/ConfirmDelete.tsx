import LoadingButton from '@mui/lab/LoadingButton';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { PropsSelectedUser } from '../interfaces/UserInterface';

interface Props {
  onOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedUser: PropsSelectedUser | null;
  isDeleting: boolean;
}

const ConfirmDelete = ({
  onOpen,
  onClose,
  onConfirm,
  selectedUser,
  isDeleting,
}: Props) => {
  return (
    <Dialog
      open={onOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent
        sx={{
          bgcolor: '#31343b',
        }}
      >
        <DialogContentText sx={{ color: '#fff' }} id="alert-dialog-description">
          ¿Estás seguro que deseas borrar a{' '}
          <strong>{selectedUser?.name}</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          bgcolor: '#31343b',
        }}
      >
        <Button sx={{ color: '#fff' }} disabled={isDeleting} onClick={onClose}>
          Cancelar
        </Button>
        <LoadingButton
          disabled={isDeleting}
          loading={isDeleting}
          type="submit"
          variant="contained"
          color="error"
          onClick={onConfirm}
          autoFocus
        >
          Confirmar
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
