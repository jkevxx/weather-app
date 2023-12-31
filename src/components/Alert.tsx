import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Snackbar } from '@mui/material';

interface Props {
  isAlertOpen: boolean;
  handleClose: () => void;
  message: string;
}

const Alert = ({ isAlertOpen, handleClose, message }: Props) => {
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={isAlertOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default Alert;
