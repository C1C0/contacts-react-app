export const AddingContactForm: React.FC = () => {
  return (
    <form className="my-4 row">
      <div className="col-5">
        <input type="text" placeholder="Add contact" className="h-100 w-100 p-1" />
      </div>
      <div className="col-2">
        <input type="submit" value="Add Contact" className="btn btn-primary" />
      </div>
    </form>
  );
};
