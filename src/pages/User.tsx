import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';
import { useAppSelector } from '../hooks/storeHook';
import { UserInterfaceWithId } from '../interfaces/UserInterface';
import { getFormatDate } from '../utils/getDate';

const User = () => {
  const users = useAppSelector((state) => state.users.users);
  const { userId } = useParams();
  const [selectedUser, setSelectedUser] = useState<UserInterfaceWithId | null>(
    null
  );

  useEffect(() => {
    const userFound = users.find((user) => user.id === userId);

    if (userFound) {
      setSelectedUser(userFound);
    }
  }, [users, userId]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          m: 4,
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 360,
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              {selectedUser?.conditions}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Box>
                <img
                  style={{ width: 80 }}
                  src={`http://openweathermap.org/img/wn/${selectedUser?.icon}@2x.png`}
                  alt={selectedUser?.conditions}
                />
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: 220,
                }}
              >
                <Typography variant="h2">{selectedUser?.temp} °</Typography>
                <Typography>
                  <strong>{selectedUser?.city}</strong>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography>Humedad: {selectedUser?.humidity}%</Typography>
              <Typography>Viento: {selectedUser?.windspeed} mph</Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography>{getFormatDate(selectedUser?.date)}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography>
                Nombre: <strong>{selectedUser?.name}</strong>
              </Typography>
              <Typography>
                Correo: <strong>{selectedUser?.email}</strong>
              </Typography>
            </Box>
          </CardActions>
        </Card>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {selectedUser?.days.slice(1).map((day) => (
            <WeatherCard key={day.datetime} {...day} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default User;
