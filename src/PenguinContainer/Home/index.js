import React, { Component } from 'react'
import penguinGif from './penguinGif.gif'
import './index.css'

export default class Home extends Component {
	state = {

	}

	render(){
		return(
			<div className='home-container'>
				<img src={penguinGif} />
			</div>
		)
	}
}