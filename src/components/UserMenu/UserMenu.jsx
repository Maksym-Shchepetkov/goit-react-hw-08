import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={s.logoutWrapper}>
      <h2 className={s.title}>Hello, {userName.name}</h2>
      <button type="button" onClick={handleLogOut} className={s.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
