import './App.css';
import Hello from './components/Hello';
// How to create a component in React
// 1. Create a function that returns JSX
// 2. Name the function with a capital letter
// 3. Export the function
// 4. Import the function into another file
// 5. Use the function in the other file

function App() {
  return (
    <div className='App'>
      <Hello />
    </div>
  );
}

export default App;
