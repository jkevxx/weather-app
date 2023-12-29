import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/storeHook';

const User = () => {
  const users = useAppSelector((state) => state.users.users);

  const { userId } = useParams();

  return (
    <div>
      <h1>User </h1>

      {users.map((user) => {
        if (user.id === userId) {
          return (
            <div key={user.id}>
              <span>{user.name} </span>
              <span>correo: {user.email} </span>
              <span>ciudad: {user.city} </span>
              <span>lat: {user.lat} </span>
              <span>long: {user.long} </span>
              <span>fecha: {user.date} </span>
              <span>temp: {user.temp} </span>
              <span>humedad: {user.humidity} </span>
              <span>viento: {user.windspeed} </span>
              {user.days.map((day, index) => (
                <div key={day.datetime}>
                  <span>
                    fecha dia {index}: {day.datetime}
                  </span>
                  <span>temp: {day.temp} </span>
                  <span>humedad: {day.humidity} </span>
                  <span>viento: {day.windspeed} </span>
                  <span>condiciones: {day.conditions} </span>
                </div>
              ))}
            </div>
          );
        }
      })}

      <h3>Users</h3>

      {users.map((user) => (
        <div key={user.id}>
          <span>{user.name} </span>
          <span>correo: {user.email} </span>
          <span>ciudad: {user.city} </span>
          <span>lat: {user.lat} </span>
          <span>long: {user.long} </span>
          <span>fecha: {user.date} </span>
          <span>temp: {user.temp} </span>
          <span>humedad: {user.humidity} </span>
          <span>viento: {user.windspeed} </span>
        </div>
      ))}
    </div>
  );
};

export default User;
