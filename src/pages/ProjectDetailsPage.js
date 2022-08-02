import { useState, useEffect } from 'react';
import { getProjectDetailsService } from '../services/project.services';

import { Link, useParams } from 'react-router-dom';
import AddReview from '../components/AddReview';
import TaskCard from '../components/TaskCard';

function ProjectDetailsPage(props) {
	const [ review, setProject ] = useState(null);
	const { id } = useParams();
	const projectId = id;

	const getReview = async () => {
		localStorage.getItem('authToken');
		try {
			const response = await getProjectDetailsService(id);
			setProject(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getReview();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="ProjectDetails">
			{review && (
				<div>
					<h1>Project: {review.title}</h1>
					<p>Description: {review.description}</p>
				</div>
			)}

			<AddReview refreshReview={getReview} reviewId={projectId} />

			{review &&
				review.tasks.map((task) => {
					return <TaskCard key={task._id} {...task} />;
				})}

			<Link to="/projects">
				<button>Back to projects</button>
			</Link>
		</div>
	);
}

export default ProjectDetailsPage;
