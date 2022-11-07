import { useState } from 'react'
import { Users } from './components/Users/Users'
import { AddUser } from './components/Users/AddUser'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

    const [users, setUsers] = useState([
        {id: 1, name: "Helder Fonseca", age: 31},
    ]);

    const saveNewUserHandler = newUser => {
        setUsers(prevUsers => {
            return [...prevUsers, newUser];
        });
    };

  return (
    <div className='app'>
        <AddUser addNewUser={saveNewUserHandler} />
        <Users users={users}/>
    </div>
  )
}

export default App
