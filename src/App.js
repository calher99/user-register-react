
import { useState } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';
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
  const [users, setUsers] = useState(DUMMY_NAMES);

  const submitFormHandler = (data) =>{
    setUsers((prevUsers) =>{
      return [data, ...prevUsers];
    })
  }

  return(
  <div>
    <UserForm onSubmitForm = {submitFormHandler}/>
    <UserCardList userList={users}/>
  </div>
  );
}

export default App;
