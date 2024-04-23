import { InputHTMLAttributes, memo } from 'react';
import s from './textField.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField = memo(({ label, type = 'text', ...rest }: TextFieldProps) => {
  return (
    <div>
      <label className={s.label}>
        {label}:
        <input className={s.field} type={type} {...rest} />
      </label>
    </div>
  );
});

TextField.displayName = 'TextField';
