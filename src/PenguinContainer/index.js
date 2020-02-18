import React, { Component } from 'react'
import NavList from './NavList'

export default class PenguinContainer extends Component {
	state = {

	}

	render(){
		return(
			<React.Fragment>
				<h2>Hello this is our penguin container</h2>
			<NavList />
			</React.Fragment>
			)
	}
}