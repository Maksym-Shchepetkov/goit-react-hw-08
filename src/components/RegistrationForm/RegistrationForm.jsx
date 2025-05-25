import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const signUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'To Short!')
      .max(20, 'To Long!')
      .required('Fill this field!'),
    email: Yup.string()
      .email('Please fill correctly')
      .required('Fill this field!'),
    password: Yup.string()
      .min(3, 'To Short!')
      .max(20, 'To Long!')
      .required('Fill this field!'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSignUp = (values, action) => {
    console.log(values);
    dispatch(register(values));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSignUp}
    >
      <Form className={s.form}>
        <h2 className={s.title}>Registration</h2>
        <Link className={s.link} to="/login">
          or Login
        </Link>
        <div className={s.inpBox}>
          <Field
            type="text"
            name="name"
            className={s.input}
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" className={s.mes} />
        </div>

        <div className={s.inpBox}>
          <Field
            type="email"
            name="email"
            className={s.input}
            placeholder="Email"
          />
          <ErrorMessage name="email" component="span" className={s.mes} />
        </div>

        <div className={s.inpBox}>
          <Field
            type="password"
            name="password"
            className={s.input}
            placeholder="Password"
          />
          <ErrorMessage name="password" component="span" className={s.mes} />
        </div>

        <Button>Sign Up</Button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
