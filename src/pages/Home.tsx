import { Box } from '@mui/material';
import ModalComp from '../components/ModalComp';
import TableComp from '../components/TableComp';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: 900,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <ModalComp />
        </Box>

        <TableComp />
      </Box>
    </>
  );
};

export default Home;
