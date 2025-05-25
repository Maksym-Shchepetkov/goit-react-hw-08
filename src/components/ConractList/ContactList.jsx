import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ul className={s.list}>
      {loading === true && <p>Loading...</p>}
      {items?.map(info => {
        return (
          <li className={s.item} key={info.id}>
            <Contact info={info} />
          </li>
        );
      })}
      {error && <p>Something went wrong</p>}
    </ul>
  );
};

export default ContactList;
