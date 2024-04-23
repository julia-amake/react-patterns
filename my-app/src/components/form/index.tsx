import React, { ChangeEvent, memo, useCallback, useContext, useState } from 'react';
import { fetchUser } from '../../api/users';
import { TabsContext } from '../../context/tabs';
import { UserContext } from '../../context/user';
import { Button } from '../button';
import { TextField } from '../textField';
import s from './form.module.scss';

export const initialFormData = {
  username: '',
  phone: '',
  website: '',
};

export const Form = memo(() => {
  const [formData, setFormData] = useState(initialFormData);
  const { username, phone, website } = formData;
  const { tab } = useContext(TabsContext);
  const { setUser } = useContext(UserContext);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!setUser) return;
    fetchUser(formData).then((user) => setUser(user));
  }, [formData, setUser]);

  if (tab !== 'form') return null;

  return (
    <form className={s.form}>
      <TextField name="username" label="Username" value={username} onChange={handleChange} />
      <TextField name="phone" label="Phone" value={phone} onChange={handleChange} />
      <TextField
        name="website"
        label="Website"
        value={website}
        onChange={handleChange}
        type="email"
      />
      <Button className={s.button} onClick={handleSubmit}>
        submit
      </Button>
    </form>
  );
});

Form.displayName = 'Form';
