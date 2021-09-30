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
    setContact([...contacts, contact]);
  };

  return { contacts, addContact };
};

export { useContacts };
