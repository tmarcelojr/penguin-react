import React, { Component } from 'react'
import NavList from './NavList'
import Home from './Home'
import BabyPenguins from './BabyPenguins'
import NewBabyPenguinForm from './NewBabyPenguinForm'
import EditBabyPenguinForm from './EditBabyPenguinForm'
import Activities from './Activities'
import NewActivityForm from './NewActivityForm'
import ScheduledActivities from './ScheduledActivities'
import NewScheduledActivityForm from './NewScheduledActivityForm'
import EditActivityForm from './EditActivityForm'
import LoginRegisterForm from '../LoginRegisterForm'
import './index.css'

export default class PenguinContainer extends Component {
	state = {
		// Links
		homePage: false,
		babyPenguinsPage: false,
		activitiesPage: false,
		scheduledActivitiesPage: false,
		// Baby Penguins
		babyPenguins: [],
		idOfBabyPenguinToEdit: -1,
		// Activities
		activities: [],
		idOfActivityToEdit: -1,
		// Scheduled activities
		scheduledActivities: [],
		// Auth
		login: false,
		loggedIn: false,
    loggedInUsername: null
	}

	// ==============================
  // 			 	 	 NAVIGATION
  // ==============================

	off = () => {
		this.setState({
			homePage: false,
			babyPenguinsPage: false,
			activitiesPage: false,
			scheduledActivitiesPage: false,
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

	scheduledActivities = () => {
		this.off()
		this.setState({
			scheduledActivitiesPage: true
		})
	}

  // ==============================
  // 			 	 BABY PENGUINS
  // ==============================

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

	editBabyPenguin = async (idOfBabyPenguinToEdit) => {
		this.setState({
			idOfBabyPenguinToEdit: idOfBabyPenguinToEdit
		})
	}

	updateBabyPenguin = async (newInfo) => {
		try {
      const updateBabyPenguinRes = await fetch(process.env.REACT_APP_API_URL + "/api/v1/baby_penguins/" + this.state.idOfBabyPenguinToEdit, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(newInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const updateBabyPenguinJson = await updateBabyPenguinRes.json()
      if(updateBabyPenguinRes.status === 200) {
        const babyPenguins = this.state.babyPenguins
        const indexOfBabyPenguinToUpdate = this.state.babyPenguins.find(babyPenguin => babyPenguin.id === this.state.idOfBabyPenguinToEdit)
        babyPenguins[indexOfBabyPenguinToUpdate] = updateBabyPenguinJson.data
        this.setState({
          babyPenguins: babyPenguins
        })
	      const newBabyPenguinArray = this.state.babyPenguins.map((babyPenguin) => {
	        if(babyPenguin.id === this.state.idOfBabyPenguinToEdit) {
	          return updateBabyPenguinJson.data
	        }
	        else {
	          return babyPenguin
	        }
	      })
	      this.setState({
	        babyPenguins: newBabyPenguinArray
	      })       
      }
      else {
        throw new Error("Could not edit baby penguin.")
      }
      // Hides edit form after updating
      this.setState({
      	idOfBabyPenguinToEdit: -1
      })
    } catch(err) {
      console.log(err);
    }
  }

  // ==============================
  // 					 ACTIVITIES
  // ==============================

	createActivity = async (activityToAdd) => {
		const createActivityRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/activities/', {
			  credentials: 'include',
        method: 'POST',
        body: JSON.stringify(activityToAdd),
        headers: {
          'Content-Type': 'application/json'
        }
		})
		const createActivityJson = await createActivityRes.json()
		if(createActivityRes.status === 201) {
			this.setState({
				// Spread operator - takes current activities and adds new activity
				activities: [...this.state.activities, createActivityJson.data]
			})
		}
	}

	deleteActivity = async (id) => {
		try {
      const deleteActivityRes = await fetch(process.env.REACT_APP_API_URL + "/api/v1/activities/" + id, {
        credentials: 'include',
        method: 'DELETE'
      })
      const deleteActivityJson = await deleteActivityRes.json();
      if(deleteActivityJson.status === 200) {
        this.setState({
          activities: this.state.activities.filter(activity => activity.id !== id) 
        })        
      }
      else {
        throw new Error("Could not delete activity.")
      }
    } catch(err) {
      console.error(err)
    }
	}

	editActivity = async (idOfActivityToEdit) => {
		this.setState({
			idOfActivityToEdit: idOfActivityToEdit
		})
	}

	updateActivity = async (newInfo) => {
		try {
      const updateActivityRes = await fetch(process.env.REACT_APP_API_URL + "/api/v1/activities/" + this.state.idOfActivityToEdit, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(newInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const updateActivityJson = await updateActivityRes.json()
      if(updateActivityRes.status === 200) {
        const activities = this.state.activities
        const indexOfActivityToUpdate = this.state.activities.find(activity => activity.id === this.state.idOfActivityToEdit)
        activities[indexOfActivityToUpdate] = updateActivityJson.data
        this.setState({
          acitivites: activities
        })
	      const newActivityArray = this.state.activities.map((activity) => {
	        if(activity.id === this.state.idOfActivityToEdit) {
	          return updateActivityJson.data
	        }
	        else {
	          return activity
	        }
	      })
	      this.setState({
	        activities: newActivityArray
	      })       
      }
      else {
        throw new Error("Could not edit activity.")
      }
      // Hides edit form after updating
      this.setState({
      	idOfActivityToEdit: -1
      })
    } catch(err) {
      console.log(err);
    }
  }

  // ==============================
  // 			SCHEDULED ACTIVITIES
  // ==============================

  scheduleActivity = async (id) => {
  	try {
  		const scheduledActivityRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/scheduled_activities/' + id, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
          'Content-Type': 'application/json'
        }
  		})
  		const scheduledActivityJson = await scheduledActivityRes.json()
  		if(scheduledActivityRes.status === 201) {
			this.setState({
				scheduledActivities: [...this.state.scheduledActivities, scheduledActivityJson.data]
			})
		}
  	} catch(err) {

  	}
  }  


  // ==============================
  // 						 AUTH
  // ==============================

	register = async (registerInfo) => {
    try {
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
    try {
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

  logout = async () => {
  	try {
  		const logoutRes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/penguins/logout', {
  				credentials: 'include',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
  		})
  		const logoutJson = await logoutRes.json()
  		console.log(logoutJson);
  		if(logoutRes.status === 200) {
  			this.setState({
  				logged: false,
  				loggedInUsername: null
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
				logout={this.logout}
				schedule={this.scheduledActivities}
			/>

			{/* Navigation links */}
			{
				this.state.homePage
				? <Home />
				: null
			}

			{/* Form modals for baby penguins */}
			<div className='create-edit-baby-penguin-container'>
				{/* Create baby penguin form */}
				{
					this.state.babyPenguinsPage === true
					?
					<NewBabyPenguinForm 
						createBabyPenguin={this.createBabyPenguin}
					/>
					: null
				}

				{/* Edit baby penguin form */}
				{
					this.state.idOfBabyPenguinToEdit !== -1
					? <EditBabyPenguinForm 
							updateBabyPenguin={this.updateBabyPenguin}
						/>
					: null
				}
			</div>

			{/* List of baby penguins */}
			{
				this.state.babyPenguinsPage
				? <BabyPenguins 
						babyPenguins={this.state.babyPenguins}
						deleteBabyPenguin={this.deleteBabyPenguin}
						editBabyPenguin={this.editBabyPenguin}
					/>
				: null
			}

			{/* Form modals for activities*/}
			<div className='create-edit-baby-penguin-container'>
				{/* Create activity form */}
				{
					this.state.activitiesPage === true
					?
					<NewActivityForm 
						createActivity={this.createActivity}
					/>
					: null
				}

				{/* Edit activity form */}
				{
					this.state.idOfActivityToEdit !== -1
					? <EditActivityForm 
							updateActivity={this.updateActivity}
						/>
					: null
				}
			</div>

			{/* List of Activities */}
			{
				this.state.activitiesPage
				? <Activities 
						activities={this.state.activities}
						deleteActivity={this.deleteActivity}
						editActivity={this.editActivity}
					/>
				: null
			}

			{/* Schedule New Activity */}
			{
				this.state.scheduledActivitiesPage === true
				?
				<NewScheduledActivityForm />
				: null
			}

			{/* List of Scheduled Activities */}
			{
				this.state.scheduledActivitiesPage
				? <ScheduledActivities
						scheduledActivities={this.state.scheduledActivities}
					/>
				: null
			}

			{/* Login form */}
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
