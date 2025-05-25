import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigate = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const setActiveClass = ({ isActive }) => {
    return isActive ? s.active : s.link;
  };
  return (
    <nav className={s.nav}>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={setActiveClass} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigate;
