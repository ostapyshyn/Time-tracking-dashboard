import { useState } from 'react'
import './App.css'
import data from './data.ts'
import Profile from './components/Profile'
import ActivityCard from './components/ActivityCard/'

import work from './assets/icon-work.svg'
import play from './assets/icon-play.svg'
import study from './assets/icon-study.svg'
import exercise from './assets/icon-exercise.svg'
import social from './assets/icon-social.svg'
import care from './assets/icon-self-care.svg'
export interface Icons {
  [key: string]: string
}
const icons: Icons = {
  work,
  play,
  study,
  exercise,
  social,
  'self care': care,
}

const colors: Icons = {
  work: '--light_redd',
  play: '--soft_blue',
  study: '--light_red',
  exercise: '--lime_green',
  social: '--violet',
  'self care': '--soft_orange',
}

function App() {
  const [period, setPeriod] = useState('Weekly')

  return (
    <main className="App">
      <Profile period={period} setPeriod={setPeriod} />
      <div className="cards">
        {data.map((item) => (
          <ActivityCard
            title={item.title}
            icon={icons[item.title.toLowerCase()]}
            bgColor={colors[item.title.toLowerCase()]}
          />
        ))}
      </div>
    </main>
  )
}

export default App
