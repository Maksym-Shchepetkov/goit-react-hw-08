import LogInForm from '../../components/LogInForm/LogInForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <LogInForm />
    </div>
  );
};

export default LoginPage;
