import React, { Component } from 'react'
import { Card, Form, Button } from 'semantic-ui-react'
import './index.css'

export default class NewScheduledActivityForm extends Component {
	state = {
		checked: ''
	}

	handleChange = (e) => {
		console.log(this.state.checked);
		this.setState({
			[e.target.checked]: e.target.value
		})
	}
	render() {
		// {console.log(this.props)}
		// {console.log(this.props.activities)}
		// {console.log('name', this.props.activities[0].name);}
		// {console.log('description', this.props.activities[0].description);}
		// {console.log('id', this.props.activities[0].id);}
		// {console.log(this.props.babyPenguins)}
		// {console.log('baby p name', this.props.babyPenguins[0].name);}
		// {console.log('baby p id', this.props.babyPenguins[0].id);}

		const activitiesToSchedule = this.props.activities.map(activity => {
			return (
				<div key={activity.id} className='activities-container'>
				<Card>
					<Card.Content>
					<Card.Header>{activity.name}</Card.Header>
					<h5>Choose Baby Penguin:</h5>
					</Card.Content>
					{this.props.babyPenguins.map(babyPenguin => {
						return(
							<Form.Group grouped key={babyPenguin.id}>
								{babyPenguin.name} : 
			        <Button onClick={() => this.props.scheduleActivity(activity.id, babyPenguin.id)}>Schedule</Button>				
							</Form.Group>
						)
					})}
				</Card>
			</div>
			)
		})
		return(
			<div>
			<h2>Scheduled Activities</h2>
			{activitiesToSchedule}
			</div>
			)		
	}
}