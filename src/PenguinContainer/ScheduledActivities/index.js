import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './index.css'

export default function ScheduledActivities(props) {
	let colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
	const scheduledActivities = props.scheduledActivities.map((scheduled_activity) => {
		let color = colors[Math.floor(Math.random() * colors.length) - 1]
		return(
			<div key={scheduled_activity.id} className='scheduled-activities-container'>
				<Card color={color}>
					<Card.Content>
						<Card.Header>{scheduled_activity.name}</Card.Header>
						<Card.Description>
							Participant: {scheduled_activity.participant.name}
						</Card.Description>
						<Card.Description>
							Parent: {scheduled_activity.parent.username}
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
	        	<Button onClick={() => props.deleteScheduledActivity(scheduled_activity.id)}>Delete</Button>
        </Card.Content>
				</Card>
			</div>
		)
	})
	return(
		<div>
			{scheduledActivities}
		</div>
	)
}