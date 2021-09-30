import React from "react";
import * as ContactInterface from "../Shared/Contact.interface";
import { Contact } from "./Contact";

interface Props {
  contacts: ContactInterface.Contact[];
}

export const Contacts: React.FC<Props> = ({ contacts }) => {
  return (
    <div className="contacts mt-4">
      {contacts.map((contact) => {
        return <Contact key={contact.id} name={contact.name} />;
      })}
    </div>
  );
};
