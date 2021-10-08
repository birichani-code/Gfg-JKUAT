import React from 'react';
import { Link } from 'react-router-dom';

function TeamMeet() {
	return (
		<div className='section'>
			<h1>Meet the team</h1>
	

			<button>
				<Link to='/teams' style={{ textDecoration: 'none', color: '#fff' }}>
					Team
				</Link>
			</button>
		</div>
	);
}

export default TeamMeet;
