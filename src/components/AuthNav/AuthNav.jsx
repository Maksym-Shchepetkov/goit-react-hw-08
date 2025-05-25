import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return isActive ? s.active : s.link;
  };
  return (
    <nav className={s.nav}>
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
      <NavLink className={setActiveClass} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
