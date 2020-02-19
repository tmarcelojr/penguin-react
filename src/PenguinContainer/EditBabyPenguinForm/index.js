import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import './index.css'

export default class EditBabyPenguinForm extends Component {
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
		this.props.updateBabyPenguin(this.state)
	}
	render() {
		return(
			<div className="edit-baby-penguin">
				<h2>Edit Baby Penguin</h2>
				<Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button type="Submit">Update</Button>
         </Form>
			</div>
		)
	}
}