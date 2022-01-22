import React from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/Error Boundary';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		}).then(users => {
			this.setState({robots : users})
		});
		//this.setState({robots: robots})
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		// console.log(this.state.searchfield)
	}

	render(){

		const filteredRobots = this.state.robots.filter(robot => {
			return(robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
		})	

		if (!this.state.robots.length)
			return (<h1 className = 'tc'>Loading</h1>);
		else
			return(		
			<div className = 'tc'>
				<h1 className = 'f1'>Robofriends</h1>
				<Searchbox
				onSearchChange = {this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<Cardlist robots = {filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
} 

export default App;