import ContactList from '../ConractList/ContactList';
import s from './openBook.module.css';

const OpenBook = () => {
  return (
    <div className={s.body}>
      <div className={s.page}>
        <ContactList />
      </div>
    </div>
  );
};

export default OpenBook;
