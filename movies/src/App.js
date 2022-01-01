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
import EditReviewForm from './components/EditReviwForm';
import Navbar from './components/Navbar';
import { useHistory } from 'react-router-dom';


const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}

function App() {

  const [reviews, setReviews] = useState([])

  const history = useHistory()

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
    history.push('/')
  })
  
}

function editReview(editedReview) {
  
  fetch(`http://localhost:3000/reviews/${editedReview.id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(editedReview)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setReviews(reviews.map(review => data.id === review.id ? data : review))
    history.push('/')
  })
}


  return(
    <div className="App">

      <h1>Movie Reviews</h1>
      
      <h3>Get All Your Movie Needs Here!!</h3>


      

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


          <Route exact path="/reviews/:id/edit">
            <EditReviewForm reviews={reviews} editReview={editReview} />
         </Route>
      </Switch>
      



    </div>
  );
}

export default App;