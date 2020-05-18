import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap'
import UserCard from './UserCard'
import Confirmation from './Confirmation';

const App = () => {

	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isRequestSent, setIsRequestSent] = useState(false);


	const URL = "https://randomuser.me/api/?noinfo";

	useEffect( () => {
		setIsLoading(true);
		fetch(URL)
			.then(res => res.json())
			.then(res => {
				const data = res.results[0];

				setData({
					picture: data.picture.large,
					name: data.name.first + ' ' + data.name.last,
					age: data.dob.age,
					phone: data.cell,
					email: data.email,
					from: data.location.state + ', ' + data.location.country,
					birth: data.dob.date
				});

				setIsLoading(false);
			})
	}, []);

	return (
		<>
		{ isRequestSent && <Confirmation /> }
		<Container>
			<Row className="justify-content-center mt-5">
				{!isLoading ? (
					<UserCard 
						picture={data.picture}
						name={data.name}
						age={data.age}
						description="I ❤️ Computer Science" 
						phone={data.phone}
						email={data.email}
						from={data.from}
						birth={new Date(data.birth).toLocaleDateString()}
						sendRequest={setIsRequestSent}
					/>
				):(
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
			</Row>
		</Container>
		</>
	);
}
 
export default App;