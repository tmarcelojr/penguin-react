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
		this.setState({
			homePage: true
		})
	}

	babyPenguins = () => {
		this.off()
		this.setState({
			babyPenguinsPage: true
		})
	}

	activities = () => {
		this.off()
		this.setState({
			activitiesPage: true
		})
	}

	createBabyPenguin = async (babyPenguinToAdd) => {
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

	deleteBabyPenguin = async (id) => {
		try {
      const deleteBabyPenguinRes = await fetch(process.env.REACT_APP_API_URL + "/api/v1/baby_penguins/" + id, {
        credentials: 'include',
        method: 'DELETE'
      })
      const deleteBabyPenguinJson = await deleteBabyPenguinRes.json();
      if(deleteBabyPenguinJson.status === 200) {
        this.setState({
          babyPenguins: this.state.babyPenguins.filter(baby_penguin => baby_penguin.id !== id) 
        })        
      }
      else {
        throw new Error("Could not delete baby penguin.")
      }
    } catch(err) {
      console.error(err)
    }
	}

	register = async (registerInfo) => {
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
      console.log(registerJson);
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
      this.home()
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

			{/* Create baby form */}
			{
				this.state.babyPenguinsPage === true
				?
				<NewBabyPenguinForm 
					createBabyPenguin={this.createBabyPenguin}
				/>
				: null
			}

			{/* List of baby penguins*/}
			{
				this.state.babyPenguinsPage
				? <BabyPenguins 
						babyPenguins={this.state.babyPenguins}
						deleteBabyPenguin={this.deleteBabyPenguin}
					/>
				: null
			}
			{
				this.state.activitiesPage
				? <Activities />
				: null
			}


			{/* Login form*/}
			{
        this.state.login === true
        ?
        <LoginRegisterForm 
        	login={this.login}
        />
        : null
      }
			</React.Fragment>
		)
	}
}
