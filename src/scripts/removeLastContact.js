import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const data = await readContacts();
  const array = JSON.parse(data);
  console.log(array.pop());
  if (Array.isArray(array) && array.length > 0) {
    array.pop();

    await writeContacts(array);
  }
};

removeLastContact();
