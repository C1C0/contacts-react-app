export const addContact = (e: React.FormEvent<HTMLFormElement>, addContactCallback: Function) => {
    e.preventDefault();

    const nameInput = (e.target as HTMLFormElement).querySelector('input[name="name"]');
    const name = (nameInput as HTMLInputElement).value;

    // create contact
    addContactCallback(name);
};
