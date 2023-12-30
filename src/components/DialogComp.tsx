import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';
import { useState } from 'react';
import ModalComp from './ModalComp';

const DialogComp = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpenDialog}
        variant="contained"
        startIcon={<AddBoxIcon />}
        color="success"
      >
        Crear Nuevo Usuario
      </Button>
      <ModalComp
        open={dialogOpen}
        onClose={handleCloseDialog}
        isSelectedUser={null}
      />
    </>
  );
};

export default DialogComp;
