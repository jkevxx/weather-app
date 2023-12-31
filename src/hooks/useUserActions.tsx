import {
  UserId,
  UserInterface,
  UserInterfaceWithId,
} from '../interfaces/UserInterface';
import {
  createUser,
  deleteUserById,
  updateUserById,
} from '../redux/user/userSlice';
import { useAppDispatch } from './storeHook';

const useUserActions = () => {
  const dispatch = useAppDispatch();

  const addUser = ({
    name,
    email,
    city,
    lat,
    long,
    date,
    conditions,
    icon,
    temp,
    humidity,
    windspeed,
    days,
  }: UserInterface) => {
    dispatch(
      createUser({
        name,
        email,
        city,
        lat,
        long,
        date,
        conditions,
        icon,
        temp,
        humidity,
        windspeed,
        days,
      })
    );
  };

  const updateUser = ({
    id,
    name,
    email,
    city,
    lat,
    long,
    date,
    conditions,
    icon,
    temp,
    humidity,
    windspeed,
    days,
  }: UserInterfaceWithId) => {
    dispatch(
      updateUserById({
        id,
        name,
        email,
        city,
        lat,
        long,
        date,
        conditions,
        icon,
        temp,
        humidity,
        windspeed,
        days,
      })
    );
  };

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return {
    addUser,
    updateUser,
    removeUser,
  };
};

export default useUserActions;
