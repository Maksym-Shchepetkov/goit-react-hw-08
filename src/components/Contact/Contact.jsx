import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { BiSolidUser } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ info }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className={s.info}>
        <p className={s.par}>
          {<BiSolidUser className={s.icon} />}
          {info.name}
        </p>
        <p className={s.par}>
          {<FaPhone className={s.icon} />}
          {info.number}
        </p>
      </div>
      <div className={s.buttonCont}>
        <button
          onClick={() => handleDeleteContact(info.id)}
          className={s.button}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
