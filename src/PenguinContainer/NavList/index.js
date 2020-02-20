import React, { Component } from 'react'
import './index.css'

export default class NavList extends Component {
	state = {
		name: ''
	}

	handleClick = (e) => {
		e.preventDefault()
		if (e.target.name === 'home') this.props.home()
		if (e.target.name === 'babyPenguins') this.props.babyPenguins()
		if (e.target.name === 'activities') this.props.activities()
		if (e.target.name === 'login') this.props.loginLink()
		if (e.target.name === 'logout') this.props.logout()
		if (e.target.name === 'schedule') this.props.schedule()
	}

	render() {
		console.log('this is our login checker', this.state.checkLoggedIn);
		console.log('this is our props', this.props.loggedIn);
		return(
			<div className='nav-bar'>
				<div>
					<button
						name='home'
						onClick={this.handleClick}>
						Home
					</button>
					<button
						name='babyPenguins'
						onClick={this.handleClick}>
						Baby Penguins
					</button>
					<button
						name='activities'
						onClick={this.handleClick}>
						Activities
					</button>					
					<button
						name='schedule'
						onClick={this.handleClick}>
						Schedule
					</button>
				</div>
				<div>
				{
					this.props.loggedIn === true
					?
					<button
						name='logout'
						onClick={this.handleClick}>
						Logout
					</button>
					:
					<button
						name='login'
						onClick={this.handleClick}>
						Login
					</button>
				}
				</div>
			</div>
		)
	}
}