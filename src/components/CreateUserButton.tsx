import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import ModalComp from './ModalComp';

const CreateUserButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
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
    </Box>
  );
};

export default CreateUserButton;
