import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { PropsSelectedUser } from '../interfaces/UserInterface';
import FormComp from './FormComp';

interface Props {
  open: boolean;
  onClose: () => void;
  isSelectedUser: PropsSelectedUser | null;
}

const ModalComp = ({ open, onClose, isSelectedUser }: Props) => {
  return (
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
        <FormComp selectedUser={isSelectedUser} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ModalComp;
