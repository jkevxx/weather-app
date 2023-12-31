import { Box, Card, CardContent, Typography } from '@mui/material';
import { getDayOfWeek } from '../utils/getDate';

interface Props {
  datetime: string;
  conditions: string;
  temp: number;
  humidity: number;
  windspeed: number;
  icon: string;
}

const WeatherCard = ({
  datetime,
  conditions,
  temp,
  humidity,
  windspeed,
  icon,
}: Props) => {
  return (
    <Card sx={{ width: 180 }}>
      <CardContent>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {getDayOfWeek(datetime)}
        </Typography>

        <Typography sx={{ textAlign: 'center' }}>{conditions}</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <img
              style={{ width: 64 }}
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={conditions}
            />
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h5">{temp} °</Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography>Humedad: {humidity}%</Typography>
          <Typography>Viento: {windspeed} mph</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
