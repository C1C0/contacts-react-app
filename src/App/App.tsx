import './App.scss';
import { Header } from '../Components/Header';
import { AddingContactForm } from '../Components/AddingContactForm/AddingContactForm';
import { Contacts } from '../Components/Contacts';
import { useContacts } from './AppLogic';

function App() {
  const {addContact}= useContacts([]); 

  return (
    <div className="App container">
      <Header />

      <AddingContactForm onAddContact={addContact}/>

      <Contacts />
    </div>
  );
}

export default App;
