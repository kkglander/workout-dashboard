import { useState } from 'react'
import './App.css'
import WorkoutList from './components/workoutlist';
import DayCard from './components/daycard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WorkoutList />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            {count%2===0 ? "On" : "Off"}
        </button>
      </div>
    </>
  )
}

export default App
