import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import './index.css'

export default class EditActivityForm extends Component {
	state = {
		name: '',
		description: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateActivity(this.state)
	}
	render() {
		return(
			<div className="edit-activity">
				<h2>Edit Activity</h2>
				<Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />          
          <Label>Description:</Label>
          <Form.Input 
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Button type="Submit">Update</Button>
         </Form>
			</div>
		)
	}
}