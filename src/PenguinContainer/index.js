import React, { Component } from 'react'
import NavList from './NavList'
import Home from './Home'
import BabyPenguins from './BabyPenguins'
import Activities from './Activities'
import NewBabyPenguinForm from './NewBabyPenguinForm'

export default class PenguinContainer extends Component {
	state = {
		homePage: false,
		babyPenguinsPage: false,
		activitiesPage: false,
		babyPenguins: []
	}

	// componentDidMount = () => {
	// 	this.getBabyPenguins()
	// }

	// // HOLD OFF ON THIS RIGHT NOW BECAUSE YOU WILL NOT BE ABLE TO VIEW THE LIST IF A USER IS NOT LOGGED IN
	// getBabyPenguins = async () => {
	// 	try {
	// 		const babyPenguinsRes = await fetch(process.env.REACT_APP_API_URL + 'api/v1/baby_penguins/', { credentials: 'include' })
	// 		const babyPenguinsJson = await babyPenguinsRes.json()
	// 		this.setState({
	// 			babyPenguins: babyPenguinsJson.data
	// 		})
	// 	} catch(err) {
	// 		console.log(err);
	// 	}
	// }

	off = () => {
		this.setState({
			homePage: false,
			babyPenguinsPage: false,
			activitiesPage: false
		})
	}

	home = () => {
		this.off()
		// console.log('We are inside home in NavList');
		this.setState({
			homePage: true
		})
	}

	babyPenguins = () => {
		this.off()
		// console.log('We are inside babyPenguins in NavList');
		this.setState({
			babyPenguinsPage: true
		})
	}

	activities = () => {
		this.off()
		// console.log('Yay activities list');
		this.setState({
			activitiesPage: true
		})
	}

	createBabyPenguin = async (babyPenguinToAdd) => {
		console.log('we are in create baby penguin in p.container');
		const createBabyPenguinRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/baby_penguins/', {
			  credentials: 'include',
        method: 'POST',
        body: JSON.stringify(babyPenguinToAdd),
        headers: {
          'Content-Type': 'application/json'
        }
		})
		const createBabyPenguinJson = await createBabyPenguinRes.json()
		if(createBabyPenguinRes.status === 201) {
			this.setState({
				// Spread operator - takes current baby penguins and adds new baby penguin
				babyPenguins:[...this.state.babyPenguins, createBabyPenguinJson.data]
			})
		}
	}

	render(){
		return(
			<React.Fragment>
			<NavList 
				home={this.home}
				babyPenguins={this.babyPenguins}
				activities={this.activities}
			/>
			{
				this.state.homePage
				? <Home />
				: null
			}
			{
				this.state.babyPenguinsPage
				? <BabyPenguins 
						babyPenguins={this.state.babyPenguins}
					/>
				: null
			}
			{
				this.state.activitiesPage
				? <Activities />
				: null
			}
			<NewBabyPenguinForm 
				createBabyPenguin={this.createBabyPenguin}
			/>
			</React.Fragment>
		)
	}
}
