import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addContact } from '../../redux/contactsOps';
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
        <label htmlFor={nameId} className={s.label}>
          Name :<Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </label>
        <label htmlFor={phoneId} className={s.label}>
          Number:
          <Field type="tel" name="number" id={phoneId} />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
