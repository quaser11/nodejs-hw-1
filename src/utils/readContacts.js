import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  return await fs.readFile(PATH_DB, 'utf8');
};
