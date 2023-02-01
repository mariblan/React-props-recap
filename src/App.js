import './App.css';
import Hello from './components/Hello';

function App() {
  const name = 'Harry Potter';
  const person = { fname: 'Harry', lname: 'Potter' };
  const persons = [{ fname: 'Harry', lname: 'Potter' }, { fname: 'Hermione', lname: 'Granger' }, { fname: 'Ron', lname: 'Weasley' }]
  return (
    <div className='App'>
      <Hello fname="Harry" lname="Potter" name={name} person={person} persons={persons} />
    </div>
  );
}

export default App;
