import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './index.css'

export default function Activities(props) {
	let colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
	const activities = props.activities.map((activity) => {
		let color = colors[Math.floor(Math.random() * colors.length) - 1]
		return(
			<div key={activity.id} className='activities-container'>
				<Card color={color}>
					<Card.Content>
						<Card.Header>{activity.name}</Card.Header>
						<Card.Description>
							Description: {activity.description}
						</Card.Description>
						<Card.Description>
							Parent: {activity.creator.username}
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
	        	<Button onClick={() => props.deleteActivity(activity.id)}>Delete</Button>
	        	<Button onClick={() => props.editActivity(activity.id)}>Edit Activity</Button>
        </Card.Content>
				</Card>
			</div>
		)
	})
	return(
		<div>
			{activities}
		</div>
	)
}