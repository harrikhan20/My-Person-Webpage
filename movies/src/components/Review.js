import React from "react"
import { useParams, Redirect, useHistory } from 'react-router-dom'


function Review({reviews}) {

const params = useParams()
const history = useHistory()

console.log(params)

    const foundReview = reviews.find(review => review.id === parseInt(params.id))

    if (foundReview) {
        
 return (
        <div>

            <h3>{foundReview.movie}</h3>
            <p>{foundReview.rating} stars</p>
            <p>{foundReview.content}</p>


            <button onClick={() => history.push(`/reviews/${foundReview.id}/edit`)}>Edit</button>
            

        </div>
    )

    } else {
        alert("Reivew was Not Found")
        return(<Redirect to="/" />)
    }

   
}





export default Review