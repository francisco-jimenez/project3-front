import { useState, useEffect } from 'react';
import service from '../services/service';

function AddReview(props) {
	const [title, setTitle] = useState("");
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(0);
	const { foodId } = props

	const handleFormComments = () => {
		service
		.post(`/review`, {foodId, rating, title, review})
		.then ((response)=>{
			setReview([...review, response.data])
			
		}) 
	}

	  
    
	// useEffect(() => {
	// 	service.get(
	// 	`/review/${foodId}`)
	// 	.then((response)=>{
	// 		setReview(response.data)
	// 	})
	// }, []); 
    


    return (
        <div>
			{/* {review.map((comment)=>(
			<div>
				{comment.text}
				<br/>
				{comment.date}
			</div>
			))} */}

			<form onSubmit={handleFormComments}>
				<label>Rating:</label>	
				<input
				type="number"
				max="5"
				name="rating"
				onChange={(e) => setRating(e.target.value)}
				/>
				<label>Title:</label>
				<input
				type="text"
				name="title"
				onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Comment:</label>
				<input
				type="text"
				name="comment"
				onChange={(e) => setReview(e.target.value)}
				/>
				<button type="submit">Add Comment</button>
			</form>
        </div>
    )
		}	
export default AddReview;
