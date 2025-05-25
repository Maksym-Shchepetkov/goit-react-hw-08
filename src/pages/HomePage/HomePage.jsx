import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
import image from '../../assets/image.jpeg';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>With nature in mind - write smart. Online!</h1>
      <p className={s.par}>by Maksym Shchepetkov</p>
      <Link className={s.link} to={'contacts'}>
        To book
      </Link>
    </div>
  );
};

export default HomePage;
