import React from 'react'
import { useParams, Redirect } from 'react-router-dom'

function Review({reviews}) {

    const params = useParams()

console.log(params)

    const foundReview = reviews.find(review => review.id === parseInt(params.id))

if (foundReview) {
   return (
    <div>

        <h3>{foundReview.Movie}</h3>
        <p>{foundReview.rating} stars</p>
        <p>{foundReview.content}</p>


    </div>
) 

} else {
    alert("Review Not Found")
    return (<Redirect to="/" />)
}


}



export default Review