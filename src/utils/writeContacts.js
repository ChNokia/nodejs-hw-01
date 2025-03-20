import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  if (!updatedContacts) {
    return;
  }
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
};
