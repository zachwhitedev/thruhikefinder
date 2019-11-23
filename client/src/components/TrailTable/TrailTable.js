import React, {Component} from 'react';


const tableData = [
	{
		name: 'Amancio Ortega',
		net_worth: 62.7
	}, {
		name: 'Bernard Arnault',
		net_worth: 76,
	}, {
		name: 'Bill Gates',
		net_worth: 96.5,
	}, {
		name: 'Carlos Sim Helu',
		net_worth: 64
	}, {
		name: 'Jeff Bezos',
		net_worth: 131
	}, {
		name: 'Larry Ellison',
		net_worth: 58
	}, {
		name: 'Larry Page',
		net_worth: 50.8
	}, {
		name: 'Mark Zuckerberg',
		net_worth: 62.3
	}, {
		name: 'Michael Bloomberg',
		net_worth: 55.5
	}, {
		name: 'Warren Buffet',
		net_worth: 82.5
	}
];
const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.net_worth - b.net_worth
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.net_worth - a.net_worth
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
}

class TrailTable extends Component {
	state = {
		currentSort: 'default'
	}
	
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;
		
		if(currentSort === 'down') nextSort = 'up';
		else if(currentSort === 'up') nextSort = 'default';
		else if(currentSort === 'default') nextSort = 'down';
		
		this.setState({
			currentSort: nextSort
		})
	}
	
	render() {
		const { currentSort } = this.state;
		
		return (
			<table className="text-left">
				<thead>
					<tr>
						<th>Name</th>
						<th>
							Net Worth
							<button onClick={this.onSortChange}>
								<i className={`fas fa-${sortTypes[currentSort].class}`}></i>
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
						<tr>
							<td>Name</td>
							<td>$80bn</td>
						</tr>
				</tbody>
			</table>
		)
	}
}


export default TrailTable;
