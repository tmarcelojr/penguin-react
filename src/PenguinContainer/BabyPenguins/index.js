import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './index.css'

export default function BabyPenguins(props) {
	let colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]
	const babyPenguins = props.babyPenguins.map((babyPenguin) => {
		let color = colors[Math.floor(Math.random() * colors.length) - 1]
		return(
			<div key={babyPenguin.id} className='baby-penguins-container'>
				<Card color={color}>
					<Card.Content>
						<Card.Header>{babyPenguin.name}</Card.Header>
						<Card.Description>
							Parent: {babyPenguin.parent.username}
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
	        	<Button onClick={() => props.deleteBabyPenguin(babyPenguin.id)}>Delete</Button>
	        	<Button onClick={() => props.editBabyPenguin(babyPenguin.id)}>Edit Baby Penguin</Button>
        </Card.Content>
				</Card>
			</div>
		)
	})
	return(
		<div>
			{babyPenguins}
		</div>
	)
}