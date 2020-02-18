import React, { Component } from 'react'
import './index.css'

export default class NavList extends Component {
	state = {
		name: ''
	}

	handleClick = (e) => {
		console.log('You clicked on', e.target.name);
		e.preventDefault()
		if (e.target.name === 'home') this.props.home()
	}

	render() {
		return(
			<div className='nav-bar'>
				<div>
					<button
						name='home'
						onClick={this.handleClick}>
						Home
					</button>
					<button
						name='penguins'
						onClick={this.handleClick}>
						Penguins
					</button>
					<button
						name='activities'
						onClick={this.handleClick}>
						Activities
					</button>
				</div>
				<div>
					<button
						name='login'
						onClick={this.handleClick}>
						Login
					</button>
					<button
						name='register'
						onClick={this.handleClick}>
						Register
					</button>
				</div>
			</div>
			)
	}
}