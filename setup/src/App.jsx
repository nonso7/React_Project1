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
