import s from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import OpenBook from '../../components/OpenBook/OpenBook';

const PhoneBook = () => {
  return (
    <div className={s.wrapper}>
      <ContactForm />
      <SearchBox />
      <OpenBook />
    </div>
  );
};

export default PhoneBook;
