import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import './index.css'

export default class Activities extends Component {
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
		this.props.createActivity(this.state)
	}
	render() {
		return(
			<div className="add-new-activity">
				<h2>Add New Activity</h2>
				<Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button type="Submit">Add</Button>
         </Form>
			</div>
		)
	}
}