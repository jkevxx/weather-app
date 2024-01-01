import { Box } from '@mui/material';
import CreateUserButton from '../components/CreateUserButton';
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
        <CreateUserButton />

        <TableComp />
      </Box>
    </>
  );
};

export default Home;
