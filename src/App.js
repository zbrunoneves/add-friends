import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import React, { useState, useEffect } from 'react';
import UserCard from './UserCard'
import Confirmation from './Confirmation';

const App = () => {

	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isRequestSent, setIsRequestSent] = useState(false);

	const fetchUser = () => {
		setIsLoading(true);
		fetch("https://randomuser.me/api/?noinfo")
			.then(res => res.json())
			.then(res => {
				const [item] = res.results;

				setUser({
					picture: item.picture.large,
					name: item.name.first + ' ' + item.name.last,
					age: item.dob.age,
					phone: item.cell,
					email: item.email,
					from: item.location.state + ', ' + item.location.country,
					birth: item.dob.date
				});
				setIsRequestSent(false);

				setIsLoading(false);
			});
	}

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<>
		{ isRequestSent && <Confirmation /> }
		<Container>
			<Row className="mt-5" style={{height: "560px", display: "flex", alignItems:"center"}}>
				<Col lg={{ span: 4, offset: 4 }}>
					{!isLoading ? (
						<UserCard
							picture={user.picture}
							name={user.name}
							age={user.age}
							description="I ❤️ Computer Science" 
							phone={user.phone}
							email={user.email}
							from={user.from}
							birth={new Date(user.birth).toLocaleDateString()}
							sendRequest={setIsRequestSent}
						/>
					):(
						<Spinner animation="border" role="status" className="d-block mx-auto">
							<span className="sr-only">Loading...</span>
						</Spinner>
					)}
				</Col>
				<Col className="pl-5" style={{display: "flex", alignItems:"center"}}>
					<Button variant="outline-info" size="lg" onClick={fetchUser}>
						<FontAwesomeIcon icon={faChevronCircleRight} size="lg"/>
					</Button>
				</Col>
			</Row>
		</Container>
		</>
	);
}
 
export default App;