import {useEffect, useState} from 'react'
import service from '../services/service'
function AllReviews(){
    const [allReviews, setAllReviews] = useState([])
    useEffect(() => {
        service.get("/reviews")
        .then((res) => {
            setAllReviews(res.data.reviews)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <h1>ey</h1>
    )
}
export default AllReviews
