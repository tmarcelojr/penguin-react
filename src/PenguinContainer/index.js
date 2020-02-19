import React, { Component } from 'react'
import NavList from './NavList'
import Home from './Home'
import BabyPenguins from './BabyPenguins'
import Activities from './Activities'
import NewBabyPenguinForm from './NewBabyPenguinForm'
import LoginRegisterForm from '../LoginRegisterForm'

export default class PenguinContainer extends Component {
	state = {
		homePage: false,
		babyPenguinsPage: false,
		activitiesPage: false,
		babyPenguins: [],
		login: false,
		loggedIn: false,
    loggedInUsername: null
	}

	off = () => {
		this.setState({
			homePage: false,
			babyPenguinsPage: false,
			activitiesPage: false,
			login: false
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

	register = async (registerInfo) => {
    // console.log('We are in register with', registerInfo);
    try{
      const registerRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/penguins/register', {
        credentials: 'include', // Required for cookies
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const registerJson = await registerRes.json()
      console.log('this is our register json', registerJson);
    } catch(err) {
      console.log(err);
    }
  }

  loginLink = () => {
  	this.off()
  	this.setState({
  		login: true
  	})
  }

  login = async (loginInfo) => {
    console.log('we are in login with this info', loginInfo);
    try{
      const loginRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/penguins/login', {
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: {
            'Content-Type': 'application/json'
        }
      })
      const loginJson = await loginRes.json()
      if(loginRes.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUsername: loginJson.data.username // helpful for good UI
        })
      }
      console.log(this.state.loggedIn);
      console.log(this.state.loggedInUsername);
    } catch(err) {
      console.log(err);
    }
  }

	render(){
		return(
			<React.Fragment>
			<NavList 
				home={this.home}
				babyPenguins={this.babyPenguins}
				activities={this.activities}
				loginLink={this.loginLink}
			/>

			{/* Navigation links*/}
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

			{/* Create baby form */}
			{
				this.state.babyPenguinsPage === true
				?
				<NewBabyPenguinForm 
				createBabyPenguin={this.createBabyPenguin}
				/>
				: null
			}

			{/* Login form*/}
			{
        this.state.login === true
        ?
        <LoginRegisterForm />
        : null
      }
			</React.Fragment>
		)
	}
}
