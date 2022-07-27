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
        <div>
            {
                allReviews.map((review) => {
                    return(
                        <>
                        
                    <h1>{review.title}</h1>
                    <h2>{review.rating}</h2>
                    
                        </>
                                    )
                })
            }
              <AddReview foodId={foodId} /> 
        </div>
    
    )
}
export default AllReviews
