import React from 'react';


function Food({ fav }) {
  return <h1>I love {fav}</h1> 
}


function App() {
  return (
    <div>
      <h1>HELLO!!!</h1>
      <Food fav = "kimchi" />
      <Food fav = "ramen" />
      <Food fav = "chukumi" />
      <Food fav = "samgiopsal" />
    </div>
  ); 
}

export default App;
