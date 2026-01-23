import { useState } from 'react'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {


  return (
    <>
      <UsercontextProvider>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque necessitatibus sit illo fugit! Molestias deserunt minus voluptatibus veniam. Vero sapiente maxime nostrum itaque alias pariatur eligendi reiciendis corporis mollitia nemo!</h1>
        <Login />
        <Profile />
      </UsercontextProvider>
    </>
  )
}

export default App
