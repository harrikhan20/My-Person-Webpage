import React, { useState, useEffect } from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom'
import ReviewsList from './components/ReviewsList';
import Review from './components/Review';
import NewReviewForm from './components/NewReviewForm';
import Navbar from './components/Navbar';

const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}

function App() {

  const [reviews, setReviews] = useState([])

useEffect(() => {
fetch('http://localhost:3000/reviews')
.then(res => res.json())
.then(data => setReviews(data))
}, [])


function addReview(newReview) {
  fetch('http://localhost:3000/reviews', {
    method: 'POST', 
    headers,
    body: JSON.stringify(newReview) 
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setReviews([...reviews, data])
  })
  
}

  return(
    <div className="App">

      <h1>Movie Reviews</h1>
      
      <h3>Get All Your Movie Needs Here!!</h3>


      <Router>

        <Navbar />

        <Switch>


          <Route exact path="/">
            <ReviewsList reviews={reviews} />
          </Route>

          <Route exact path="/reviews/new">
            <NewReviewForm addReview={addReview} />
          </Route>

          <Route exact path="/reviews/:id">
            <Review reviews={reviews} />
          </Route>


          


        </Switch>
      </Router>



    </div>
  );
}

export default App;