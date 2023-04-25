import Profile from './components/Profile'
import './App.css'
import { useState } from 'react'
import ActivityCard from './components/ActivityCard/'

function App() {
  const [period, setPeriod] = useState('Weekly')

  return (
    <main className="App">
      <Profile period={period} setPeriod={setPeriod} />
      <ActivityCard />
    </main>
  )
}

export default App
