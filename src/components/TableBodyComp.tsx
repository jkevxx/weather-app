import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/storeHook';
import useUserActions from '../hooks/useUserActions';

const TableBodyComp = () => {
  const users = useAppSelector((state) => state.users);
  const { removeUser } = useUserActions();
  const redirect = useNavigate();

  const handleRedirect = (userId: string) => {
    redirect(`/user/${userId}`);
  };

  return (
    <TableBody>
      {users.map((user) => {
        return (
          <TableRow
            sx={{
              backgroundColor: '#272a30',
              '&:hover': {
                backgroundColor: '#6d6d6d',
              },
            }}
            key={user.id}
          >
            <TableCell
              sx={{
                color: '#fff',
              }}
              align="center"
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  width: '100%',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                  }}
                  onClick={() => handleRedirect(user.id)}
                >
                  <OpenInNewIcon />
                  {user.name}
                </Box>
              </Box>
            </TableCell>
            <TableCell style={{ color: '#fff' }} align="center">
              {user.lat}
            </TableCell>
            <TableCell style={{ color: '#fff' }} align="center">
              {user.long}
            </TableCell>
            <TableCell align="center">
              <Button
                sx={{ mr: 1 }}
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
              >
                Editar
              </Button>
              <Button
                onClick={() => removeUser(user.id)}
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyComp;
