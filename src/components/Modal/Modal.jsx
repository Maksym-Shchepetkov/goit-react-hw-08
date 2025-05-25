import { useDispatch } from 'react-redux';
import s from './Modal.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import clsx from 'clsx';

const Modal = ({ children, close, info, onKeyDown }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key);

      if (e.key === 'Escape') {
        onKeyDown(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);
  return (
    <div className={s.backdrop} onClick={close}>
      <div className={s.modal}>
        <p className={s.par}>
          You want to delete this contact: <br />
          {children}
        </p>
        <button
          type="button"
          className={s.delBtn}
          onClick={() => handleDeleteContact(info.id)}
        >
          Delete
        </button>
        <button type="button" className={clsx(s.canBtn, s.sub)} onClick={close}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
