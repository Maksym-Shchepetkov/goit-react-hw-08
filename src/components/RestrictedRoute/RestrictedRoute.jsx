import { useSelector } from 'react-redux';
import s from './RestrictedRoute.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }
  return component;
};

export default RestrictedRoute;
