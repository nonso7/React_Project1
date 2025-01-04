<<<<<<< HEAD
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
=======
import React from "react";
import data from "./data";
import List from "./List";
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(data)

  return(
  //   <>
  //   <section className="container">
  //     <h3>{people.length}birthdays today</h3>
  //     <List people={people}/>
  //     <button onClick={() => setPeople([])}>close button</button>
  //   </section>
  // </>

    <>
      <section className="container">
        <h3>{people.length}birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>close button</button>
      </section>
    </>
  );
  
}

export default App;
>>>>>>> 0e71d758176ca1c46852e922b74d25199ab04720
