import React, { FormEventHandler } from "react";
import { Contact } from "../../Shared/Contact.interface";
import * as Logic from "./AddingContactFormLogic";

interface Props {
  onAddContact: (contact: Contact) => void;
}

export const AddingContactForm: React.FC<Props> = ({ onAddContact }) => {
  return (
    <form
      className="my-4 row"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => Logic.addContact(e, onAddContact)}
    >
      <div className="col-5">
        <input
          type="text"
          placeholder="Add contact"
          className="h-100 w-100 p-1"
          name="name"
        />
      </div>
      <div className="col-2">
        <input type="submit" value="Add Contact" className="btn btn-primary" />
      </div>
    </form>
  );
};
