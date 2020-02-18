import React from 'react'
import NewBabyPenguinForm from './NewBabyPenguinForm'
export default function BabyPenguins(props) {
	console.log('we are in babypenguins list');
	const babyPenguins = props.babyPenguins.map((babyPenguin) => {
		console.log('this is our penguin', babyPenguin);
		return(
			<li key={babyPenguin.id}>
				{babyPenguin.name} is a cute baby penguin.
			</li>
		)
	})
	console.log('this is our baby penguins', babyPenguins);
	return(
		<div>
			<h2> baby penguins list </h2>
			{babyPenguins}
			<NewBabyPenguinForm />
		</div>
	)
}