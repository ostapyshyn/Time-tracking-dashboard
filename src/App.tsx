import Profile from './components/Profile'
import './App.css'
import { useState } from 'react'
import ActivityCard from './components/ActivityCard/'
import data from './data.ts'

function App() {
  const [period, setPeriod] = useState('Weekly')

  return (
    <main className="App">
      <Profile period={period} setPeriod={setPeriod} />
      <div className="cards">
        {data.map((card) => (
          <ActivityCard title={card.title} />
        ))}
      </div>
    </main>
  )
}

export default App
