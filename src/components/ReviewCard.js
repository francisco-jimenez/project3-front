import {useEffect, useState} from 'react'
import service from '../services/service'
import {useParams} from "react-router-dom"
import AddReview from './AddReview'
function AllReviews(props){
    const {foodId} = useParams()
    const [allReviews, setAllReviews] = useState([])
    useEffect(() => {
        service.get(`/review/${foodId}`)
        .then((res) => {
            console.log(res.data[0])
            if(res.data[0].review !== undefined){
                setAllReviews(res.data[0].review)
            }
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
            <div >
            {
                allReviews.map((review, index) => {
                    return(
                        <div className='review'>
                            <h1>Comment #{index+1}</h1>
                            <h1>Title: {review.title}</h1>
                            <h2>Rating: {"⭐".repeat(review.rating)}</h2>
                            <h3>Review: {review.review}</h3>
                        </div>
                    )
                })
            }
              
            </div>
            <AddReview className="tweet" foodId={foodId} />
        </>
        
    
    )
}
export default AllReviews
