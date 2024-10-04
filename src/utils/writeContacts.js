import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  const data = await readContacts();

  let array = JSON.parse(data || '[]');

  if (updatedContacts !== '[]' && !Array.isArray(updatedContacts)) {
    array.push(updatedContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(array, null, 2), (err) => {
      if (err) throw err;
      console.log(`Successfully created contacts ${updatedContacts}`);
    });
  } else if (updatedContacts === '[]') {
    await fs.writeFile(PATH_DB, updatedContacts, (err) => {
      if (err) throw err;
      console.log(`Successfully updated contacts`);
    });
  } else if (Array.isArray(updatedContacts)) {
    array = updatedContacts;
    await fs.writeFile(PATH_DB, JSON.stringify(array, null, 2), (err) => {
      if (err) throw err;
      console.log(`Successfully updated contacts`);
    });
  }
};
