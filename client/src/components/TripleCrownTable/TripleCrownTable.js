import React from 'react';
import styles from './TripleCrownTable.module.css';

export default class TripleCrownTable extends React.Component {
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
        class: 'sort',
        fn: (a, b) => a.distance - b.distance
      }
    },
    currentSort: 'default',
    tableData: [
      {
        name: 'Pacific Crest Trail',
        year: 'N/A',
        distance: 2652,
        totalstates: 3,
        elevationPerMile: 119,
        region: 'West',
        highpoint: 'Forester Pass (13,153 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        noWater: 'N/A',
        political: 'N/A',
        longBetweenResupplies: 'N/A',
        avgDistanceBetweenResupplies: 'N/A'
      },
      {
        name: 'Continental Divide Trail',
        year: 'N/A',
        distance: 3100,
        totalstates: 5,
        elevationPerMile: 129,
        region: 'Southwest/West',
        highpoint: "Gray's Peak (14,278 ft.)",
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        noWater: 'N/A',
        political: 'N/A',
        longBetweenResupplies: 'N/A',
        avgDistanceBetweenResupplies: 'N/A'
      },
      {
        name: 'Appalachian Trail',
        year: 'N/A',
        distance: 2189,
        totalstates: 14,
        elevationPerMile: 235,
        region: 'East',
        highpoint: "Clingman's Dome (6,643 ft.)",
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        noWater: 'N/A',
        political: 'N/A',
        longBetweenResupplies: 'N/A',
        avgDistanceBetweenResupplies: 'N/A'
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
          class: 'sort',
          fn: (a, b) => a.distance - b.distance
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
  onSortChangeCock = () => {
    this.setState({
      sortType: {
        up: {
          class: 'sort-down',
          fn: (a, b) => a.elpermile - b.elpermile
        },
        down: {
          class: 'sort-up',
          fn: (a, b) => b.elpermile - a.elpermile
        },
        default: {
          class: 'sort-down',
          fn: (a, b) => a.elpermile - b.elpermile
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
        fn: (a, b) => a.elpermile - b.elpermile
      },
      down: {
        class: 'sort-down',
        fn: (a, b) => b.elpermile - a.elpermile
      },
      default: {
        class: 'sort-down',
        fn: (a, b) => a.elpermile - b.elpermile
      }
    };

    return (
      <div className={styles.compWrapperCrown}>
        <h2>Triple Crown Trails</h2>
        <div className={styles.tableWrapperCrown}>
          {this.state.tableData.length > 0 && (
            <table className='text-left'>
              <thead>
                <tr>
                  <th> 🌲 Trail Name</th>
                  <th>Year Established</th>
                  <th> 🗺️ Region</th>
                  <th>
                    🥾 Distance
                    <button onClick={this.onSortChange} aria-label='sort by distance'>
                      <i
                        className={`fas fa-${sortTypeNetWorth[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th># of States Entered</th>
                  <th>
                    ⛰️ Elevation Per Mile
                    <button onClick={this.onSortChangeCock} aria-label='sort by elevation per mile'>
                      <i
                        className={`fas fa-${sortTypeCock[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Highest Point</th>
                  <th>
                    Avg. Temp (H/L)
                  </th>
                  <th>
                    Avg. Rainfall (in.)
                  </th>
                  <th>Predicted # of Resupplies</th>
                  <th>
                    Avg. Distance Between Resupplies
                  </th>
                  <th>Longest Distance Between Resupplies</th>
                  <th>Avg. Distance Between Water Sources</th>
                  <th>
                    Longest Stretch of No Water
                  </th>
                  <th>
                    Political Breakdown (% D/R)
                  </th>

                </tr>
              </thead>
              <tbody>
                {[...this.state.tableData]
                  .sort(sortType[currentSort].fn)
                  .map(p => (
                    <tr className={styles.tdcrown}>
                      <td>{p.name}</td>
                      <td>{p.year}</td>
                      <td>{p.region}</td>
                      <td>{p.distance} mi.</td>
                      <td>{p.totalstates}</td>
                      <td>{p.elevationPerMile} ft.</td>
                      <td>{p.highpoint}</td>
                      <td>{p.avgTemp}</td>
                      <td>{p.rainfall}</td>
                      <td>{p.predictedResupplies}</td>
                      <td>{p.avgResupplies}</td>
                      <td>{p.longBetweenResupplies}</td>
                      <td>{p.avgDistanceBetweenResupplies}</td>
                      <td>{p.noWater}</td>
                      <td>{p.political}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}
