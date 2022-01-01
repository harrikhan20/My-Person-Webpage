import React, {useState} from "react";
import { useParams } from 'react-router-dom'

function EditReviewForm({reviews, editReview}) {

    const params = useParams()

console.log(params)

    const foundReview = reviews.find(review => review.id === parseInt(params.id))

const [formData, setFormData] = useState({
    Movie: foundReview.Movie, 
    content: foundReview.content,
    rating: foundReview.rating
})

function handleSubmit(event) {
    event.preventDefault()
    editReview({...formData, id: foundReview.id})

}
    return (
        <form onSubmit={handleSubmit}>


            <input type="text"
            onChange={event => setFormData({...formData, Movie: event.target.value})}
            value={formData.Movie}
            placeholder='Movie Name'
            />

            <br/>

            <input type="text"
            onChange={event => setFormData({...formData, content: event.target.value})}
            value={formData.content}
            placeholder='Your Review Goes Here'
            />

            <br/>

            <input type="number"
            onChange={event => setFormData({...formData, rating: event.target.value})}
            value={formData.rating}
            placeholder='Rating'
            max="5"
            min="0"
            />

            <br/>

            <input type="submit" value="Edit This Review" />



        </form>
    )
}





export default EditReviewForm