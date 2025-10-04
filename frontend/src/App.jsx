import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import AdminView from "./Components/Adminview.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminView/>
    </>
  )
}

export default App
