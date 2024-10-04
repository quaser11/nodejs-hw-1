import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const data = await readContacts();

  let array = JSON.parse(data);

  if (Array.isArray(array) && array.length > 0) {
    array = '[]';
    await writeContacts(array);
  }
};

removeAllContacts();
