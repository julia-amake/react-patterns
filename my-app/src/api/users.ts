import { initialFormData } from '../components/form';
import { User } from '../types/user';

const API_USERS = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = (): Promise<User[]> =>
  fetch(API_USERS).then((response) => response.json());

export const fetchUser = (formData: typeof initialFormData): Promise<User> =>
  fetch(API_USERS, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
