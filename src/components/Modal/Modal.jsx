import s from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ children, close, onKeyDown }) => {
  useEffect(() => {
    const handleKeyDown = e => {
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
      <div className={s.modal}>{children}</div>
    </div>
  );
};

export default Modal;
