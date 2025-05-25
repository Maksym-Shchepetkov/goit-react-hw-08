import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
