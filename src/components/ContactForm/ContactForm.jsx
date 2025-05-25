import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addContact } from '../../redux/contacts/operations';
import Button from '../Button/Button';
const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneId = useId();
  const initialValue = {
    name: '',
    number: '',
  };

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'To Short!')
      .max(50, 'To Long!')
      .required('Fill this field!'),
    number: Yup.string()
      .min(3, 'To Short!')
      .max(50, 'To Long!')
      .required('Fill this field!'),
  });

  const handleAddContacts = (values, action) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleAddContacts}
      validationSchema={feedbackSchema}
    >
      <Form className={s.form}>
        <Field
          type="text"
          name="name"
          id={nameId}
          className={s.input}
          placeholder="Name"
        />
        <ErrorMessage name="name" component="span" className={s.mess} />
        <Field
          type="tel"
          name="number"
          id={phoneId}
          className={s.input}
          placeholder="Number"
        />
        <ErrorMessage name="number" component="span" className={s.mess} />
        <Button>Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
