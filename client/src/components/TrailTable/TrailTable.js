import React from 'react';
import styles from './TrailTable.module.css';

export default class TrailTable extends React.Component {
	// declaring the default state
	state = {
        sortType: {
            up: {
                class: 'sort-up',
                fn: (a, b) => a.distance - b.distance
            },
            down: {
                class: 'sort-down',
                fn: (a, b) => b.distance - a.distance
            },
            default: {
                class: 'sort-down',
                fn: (a, b) => a.distance - b.distance
            }
        },
		currentSort: 'default',     
        tableData: [
            {
                name: 'Pacific Crest Trail',
                distance: 2652,
                waterSources: 3
            },
            {
                name: 'Continental Divide Trail',
                distance: 3120,
                waterSources: 4
            },
            {
                name: 'Appalachian Trail',
                distance: 2140,
                waterSources: 6
            },
            {
                name: 'Long Trail (VT)',
                distance: 215,
                waterSources: 7
            }
        ]
        
    };
        // method called every time the sort button is clicked
        // it will change the currentSort value to the next one
        onSortChange = () => {
            this.setState({
                sortType: {
                    up: {
                        class: 'sort-up',
                        fn: (a, b) => a.distance - b.distance
                    },
                    down: {
                        class: 'sort-down',
                        fn: (a, b) => b.distance - a.distance
                    },
                    default: {
                        class: 'sort-down',
                        fn: (a, b) => a.distance - b.distance
                    }
                }
            })
            
            const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
    };
        onSortChangeCock = () => {
            this.setState({
                sortType: {
                    up: {
                        class: 'sort-up',
                        fn: (a, b) => a.waterSources - b.waterSources
                    },
                    down: {
                        class: 'sort-down',
                        fn: (a, b) => b.waterSources - a.waterSources
                    },
                    default: {
                        class: 'sort-down',
                        fn: (a, b) => a.waterSources - b.waterSources
                    }
                }
            });
            
            const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
    };

	render() {
        const { currentSort, sortType } = this.state;
        const sortTypeNetWorth = {
            up: {
                class: 'sort-up',
                fn: (a, b) => a.distance - b.distance
            },
            down: {
                class: 'sort-down',
                fn: (a, b) => b.distance - a.distance
            },
            default: {
                class: 'sort-down',
                fn: (a, b) => a.distance - b.distance
            }
        };
        const sortTypeCock = {
            up: {
                class: 'sort-up',
                fn: (a, b) => a.waterSources - b.waterSources
            },
            down: {
                class: 'sort-down',
                fn: (a, b) => b.waterSources - a.waterSources
            },
            default: {
                class: 'sort-down',
                fn: (a, b) => a.waterSources - b.waterSources
            }
        };

		return (
			this.state.tableData.length > 0 && (
				<table className='text-left'>
					<thead>
						<tr>
							<th>Trail Name</th>
							<th>
								Distance
								<button onClick={this.onSortChange}>
									<i className={`fas fa-${sortTypeNetWorth[currentSort].class}`} />
								</button>
							</th>
							<th>
								Water Sources Per 10 Miles
								<button onClick={this.onSortChangeCock}>
									<i className={`fas fa-${sortTypeCock[currentSort].class}`} />
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						{[...this.state.tableData].sort(sortType[currentSort].fn).map(p => (
							<tr className={styles.td}>
								<td>{p.name}</td>
								<td>{p.distance}mi</td>
                                <td>{p.waterSources}</td>
							</tr>
						))}
					</tbody>
				</table>
			)
		);
	}
}