import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

export default class LoginRegisterForm extends Component {
	state = {
		username: '',
		password: '',
		action: 'login'
	}

	switchForm = () => {
		this.setState({
			action: this.state.action === 'register' ? 'login' : 'register'
		})
	}

	onChange = (e) => {
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('We are in handleSubmit');
		this.loginRegister()
	}

	loginRegister = () => {
		console.log('WE are in login register conditional func');
		if(this.state.action === 'register') {
			this.props.register(this.state)
		}
		else {
			this.props.login(this.state)
		}
	}

	render() {
		return(
			<div>
				<h2>{this.state.action + ' here'}</h2>
				<form onSubmit={this.handleSubmit}>
					<Label>Username:</Label>
					<Form.Input
						type="text"
						name="username"
						placeholder="Enter username"
						onChange={this.onChange}
						value={this.state.username}
					/>					
					<Label>Password:</Label>
					<Form.Input
						type="password"
						name="password"
						placeholder="Enter password"
						onChange={this.onChange}
						value={this.state.password}
					/>
					<Button type="Submit">{this.state.action === 'register' ? 'register' : 'login'}</Button>
				</form>
				{
					this.state.action === 'register'
					?
					<small>Already have an account? Log in <span className="fake-link" onClick={this.switchForm} >here</span>.</small>
					:
					<small>Need an account? Sign up <span className="fake-link" onClick={this.switchForm} >here</span>.</small>
				}
			</div>
		)
	}
}