import { Field, Form, Formik } from 'formik';
import s from './LogInForm.module.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const LogInForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const hadleSubmit = (value, action) => {
    dispatch(login(value));
    action.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hadleSubmit}>
      <Form className={s.form}>
        <h2 className={s.title}>Log In</h2>
        <Link className={s.link} to="/register">
          or Sign Up
        </Link>
        <div className={s.inpBox}>
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className={s.inpBox}>
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <Button>Log In</Button>
      </Form>
    </Formik>
  );
};

export default LogInForm;
