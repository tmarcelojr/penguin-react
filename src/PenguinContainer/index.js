import React, { Component } from 'react'
import NavList from './NavList'
import Home from './Home'

export default class PenguinContainer extends Component {
	state = {
		home: false
	}

	home = () => {
		console.log('We are inside home in NavList');
		this.setState({
			home: true
		})
	}

	render(){
		return(
			<React.Fragment>
				<h2>Hello this is our penguin container</h2>
			<NavList home={this.home}/>
			{
				this.state.home
				? <Home />
				: null
			}
			</React.Fragment>
			)
	}
}