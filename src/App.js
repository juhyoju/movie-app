import React from 'react';
import PropTypes from 'prop-types';



const foodILike = [
  {
    id: 1,
    name : "kimchi",
    rating: 5,
  },
  {
    id: 2,
    name : "kimbab",
    rating: 3,
  },
];

function Food({ name, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          name = {dish.name}
          key = {dish.id} 
          rating = {dish.rating} 
        />
      ))}
    </div>
  ); 
}

export default App;
