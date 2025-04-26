import { useState } from 'react'
import CarForm from './component/Form'
import Cars from './component/Cars'
import './App.css'
import { store } from './store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Cars App</h2> 
      <CarForm />
      <Cars/>
    </>
  )
}

export default App
