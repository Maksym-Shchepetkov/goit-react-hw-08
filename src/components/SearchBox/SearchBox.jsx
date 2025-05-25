import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { useId } from 'react';
import { changeFilter } from '../../redux/filters/slice';

const SearchBar = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleChangeQuery = e => {
    const inputValue = e.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <label htmlFor={searchId} className={s.label}>
      Find contacts by name:
      <input
        type="text"
        name="search"
        id={searchId}
        onChange={handleChangeQuery}
        className={s.input}
      />
    </label>
  );
};

export default SearchBar;
