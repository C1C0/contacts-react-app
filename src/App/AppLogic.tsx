import { useState } from "react";
import { Contact } from "../Shared/Contact.interface";

const useContacts = (initContacts: Contact[]) => {
  const [contacts, setContact] = useState<Contact[]>(initContacts);

  /**
   * Add contact to the AppState
   *
   * @param contact
   */
  const addContact = (contact: Contact): void => {
    console.log(contact);

    setContact([...contacts, contact]);
  };

  return { addContact };
};

export { useContacts };
