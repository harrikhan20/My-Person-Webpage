import { useHistory } from 'react-router-dom'

function ReviewSummary({review}) {

const history = useHistory()

function handleClick() {
    history.push(`/reviews/${review.id}`)
}

    return (
        <div>

            <p>{review.Movie}</p>

            <button onClick={handleClick}>Go to this review</button>



        </div>


    )
}

export default ReviewSummary