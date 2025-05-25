import s from './Contact.module.css';
import { BiSolidUser } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Contact = ({ info }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
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
        <button onClick={() => handleOpenModal(info.id)} className={s.button}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal close={handleCloseModal} info={info} onKeyDown={setShowModal}>
          {info.name}
        </Modal>
      )}
    </>
  );
};

export default Contact;
