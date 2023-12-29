import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import FormComp from './FormComp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 440,
  width: '100%',
  color: '#fff',
  bgcolor: '#31343b',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ModalComp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<AddBoxIcon />}
        color="success"
      >
        Add New User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ position: 'absolute', top: 10, right: 0 }}>
            <Button onClick={handleClose} color="error">
              <CloseOutlinedIcon />
            </Button>
          </Box>

          <Typography
            id="modal-modal-title"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
            }}
            variant="h6"
            component="h2"
          >
            Crear Nuevo Usuario
          </Typography>
          <FormComp />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComp;
