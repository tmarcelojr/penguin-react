import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewBabyPenguiForm extends Component {
	state = {
		name: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createBabyPenguin(this.state)
	}
	render() {
		return(
			<Segment>
				<h2>Add a baby penguin!</h2>
				<Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Baby Penguin</Button>
         </Form>
			</Segment>
		)
	}
}