import { useEffect, useState } from 'react';
import './App.css';
import Review from './Review'

function App() {
  const [people ,setPeople] = useState([]);

  useEffect(()=>{
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPeople(data));
      
  },[])
  return (
    <section className="container" style={{margin:'0 auto'}}>
      <h2 style={{textAlign:'center'}}>total Revirewer : {people.length}</h2>
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
     
      {
        people.slice(0,1).map((person)=><Review key={person.id} people={people}></Review>)
      }
    </section>
  );
}

export default App;
