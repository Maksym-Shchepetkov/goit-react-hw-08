import clsx from 'clsx';
import s from './Button.module.css';

const Button = ({ children }) => {
  return (
    <button className={clsx(s.customBtn, s.btn)} type="submit">
      <span>Click!</span>
      <span>{children}</span>
    </button>
  );
};

export default Button;
