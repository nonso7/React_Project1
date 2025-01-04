import React from 'react'
import { useState, useEffect } from 'react'
import Tours from './Tours'
import Loading from '../../final/src/Loading'


const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [loading, setloading] = useState(false)
  const [tours, setTours] = useState([]);
  

  const removeTours = async (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setloading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false);
      setTours(tours)
    } catch (error) {
      setloading(false)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTours}/>
    </div>
  )
}



export default App
