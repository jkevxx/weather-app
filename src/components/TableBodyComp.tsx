import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Button, TableBody, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/storeHook';
import useUserActions from '../hooks/useUserActions';
import {
  PropsSelectedUser,
  UserInterfaceWithId,
} from '../interfaces/UserInterface';
import ModalComp from './ModalComp';

const TableBodyComp = () => {
  const users = useAppSelector((state) => state.users.users);
  const { removeUser } = useUserActions();
  const redirect = useNavigate();
  const [selectedUser, setSelectedUser] = useState<PropsSelectedUser | null>();

  const handleRedirect = (userId: string) => {
    redirect(`/user/${userId}`);
  };

  const handleEdit = (user: UserInterfaceWithId) => {
    const { id, name, email, city } = user;
    setSelectedUser({ id, name, email, city });
  };

  return (
    <>
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
                  onClick={() => handleEdit(user)}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => removeUser(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      {selectedUser && (
        <ModalComp
          open={true}
          onClose={() => setSelectedUser(null)}
          isSelectedUser={selectedUser}
        />
      )}
    </>
  );
};

export default TableBodyComp;
