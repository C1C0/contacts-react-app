import './App.scss';
import { Header } from './Components/Header';
import { AddingContactForm } from './Components/AddingContactForm';
import { Contacts } from './Components/Contacts';

function App() {
  return (
    <div className="App container">
      <Header />

      <AddingContactForm />

      <Contacts />
    </div>
  );
}

export default App;
