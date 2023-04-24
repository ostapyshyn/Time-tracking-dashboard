import Profile from './components/Profile'
import './App.css'
import { useState } from 'react'

function App() {
  const [period, setPeriod] = useState('daily')

  return (
    <main className="App">
      <Profile period={period} setPeriod={setPeriod} />
    </main>
  )
}

export default App
