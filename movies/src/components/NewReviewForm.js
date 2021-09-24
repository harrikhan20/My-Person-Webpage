import React, {useState} from "react";


function NewReviewForm({addReview}) {

const [formData, setFormData] = useState({
    Movie: '',
    content: '',
    rating: 0
})

function handleSubmit(event) {
    event.preventDefault()
    addReview(formData)

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

            <input type="submit" value="Add A New Review" />



        </form>
    )
}





export default NewReviewForm