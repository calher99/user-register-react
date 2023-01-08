
import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';

const DUMMY_NAMES = [
  {
    id:'u1',
    name: 'Carlos',
    age: 27
  },
  {
    id:'u2',
    name: 'Claudia',
    age: 27
  }
]
function App() {
  const [users, setUser] = useState(DUMMY_NAMES);
  
  return(
  <div>
    <UserForm/>
  </div>
  );
}

export default App;
