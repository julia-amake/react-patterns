import { ButtonHTMLAttributes, memo } from 'react';
import s from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: string;
}

export const Button = memo(({ label, type = 'button', children, ...rest }: ButtonProps) => {
  return (
    <div className={s.buttonWithLabel}>
      {label && <p className={s.text}>{label}</p>}
      <button className={s.button} type={type} {...rest}>
        {children}
      </button>
    </div>
  );
});

Button.displayName = 'Button';
