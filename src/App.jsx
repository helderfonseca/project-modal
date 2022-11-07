import { useState } from 'react'
import { Users } from './components/Users/Users'
import { AddUser } from './components/Users/AddUser'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className='app'>
        <AddUser />
        <Users />
    </div>
  )
}

export default App
