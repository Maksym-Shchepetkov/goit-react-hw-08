import s from './Contact.module.css';
import { BiSolidUser } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contacts/operations';
import Modal from '../Modal/Modal';
import { nanoid } from '@reduxjs/toolkit';

const Contact = ({ info }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleOpenEdit = () => {
    setShowEdit(true);
    setEditName(info.name);
    setEditNumber(info.number);
  };

  const handleCloseEdit = e => {
    if (e.target === e.currentTarget) {
      setShowEdit(false);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleNameChange = e => setEditName(e.target.value);
  const handleNumberChange = e => setEditNumber(e.target.value);

  const handleSaveEdit = () => {
    const editContact = {
      id: info.id,
      name: editName,
      number: editNumber,
    };
    dispatch(addContact(editContact));
    setShowEdit(false);
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
        <button type="submit" className={s.editBtn} onClick={handleOpenEdit}>
          {<FaPen />}
        </button>
        <button onClick={() => handleOpenModal(info.id)} className={s.button}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal close={handleCloseModal} onKeyDown={setShowModal}>
          <p className={s.par}>
            You want to delete this contact: <br />
            {info.name}
          </p>
          <button
            type="button"
            className={s.delBtn}
            onClick={() => handleDeleteContact(info.id)}
          >
            Delete
          </button>
          <button type="button" className={s.canBtn} onClick={handleCloseModal}>
            Cancel
          </button>
        </Modal>
      )}
      {showEdit && (
        <Modal close={handleCloseEdit} onKeyDown={setShowEdit}>
          <input
            type="text"
            name="name"
            value={editName}
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="number"
            value={editNumber}
            onChange={handleNumberChange}
          />
          <button type="button" className={s.aprBtn} onClick={handleSaveEdit}>
            Aprove
          </button>
          <button type="button" onClick={handleCloseEdit} className={s.canBtn}>
            Cancel
          </button>
        </Modal>
      )}
    </>
  );
};

export default Contact;
