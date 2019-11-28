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
        name: 'Appalachian Trail',
        year: 1923,
        region: 'East',
        distance: 2189,
        totalstates: 14,
        daysToFinish: 165,
        elevationPerMile: 212,
        highpoint: 'Clingman\'s Dome (6,643 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        avgDistBetweenWaterSources: 'N/A',
        noWater: 'N/A',
        predictedResupplies: 'N/A',
        avgDistBetweenResupplies: 'N/A',
        longBetweenResupplies: 100,
        political: 'N/A',
      },
      {
        name: 'Pacific Crest Trail',
        year: 1968,
        region: 'West',
        distance: 2652,
        totalstates: 3,
        daysToFinish: 150,
        elevationPerMile: 184,
        highpoint: 'Forester Pass (13,153 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        avgDistBetweenWaterSources: 'N/A',
        noWater: 42,
        predictedResupplies: 26,
        avgDistBetweenResupplies: 102,
        longBetweenResupplies: 154,
        political: 'N/A',
      },
      {
        name: 'Continental Divide Trail',
        year: 1978,
        region: 'Southwest/West',
        distance: 3100,
        totalstates: 5,
        daysToFinish: 170,
        elevationPerMile: 172,
        highpoint: 'Grays Peak (14,278 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        avgDistBetweenWaterSources: 'N/A',
        noWater: 'N/A',
        predictedResupplies: 'N/A',
        avgDistBetweenResupplies: 'N/A',
        longBetweenResupplies: 'N/A',
        political: 'N/A',
      },
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
                  <th>Trail Name</th>
                  <th>Year Established</th>
                  <th>Region</th>
                  <th>
                    Distance (mi)
                    <button onClick={this.onSortChange} aria-label='sort by distance'>
                      <i
                        className={`fas fa-${sortTypeNetWorth[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th># States Entered</th>
                  <th>Approx. Days to Finish</th>
                  <th>
                    Elevation Gain/Mile (ft)
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
                    Avg. Rainfall (in)
                  </th>
                  <th>Avg. Dist. Between Water Sources (mi)</th>
                  <th>
                    Longest No Water Stretch (mi)
                  </th>
                  <th>Predicted # Resupplies</th>
                  <th>
                    Avg. Dist. Between Resupplies (mi)
                  </th>
                  <th>Longest Dist. Between Resupplies (mi)</th>
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
                      <td>{p.distance}</td>
                      <td>{p.totalstates}</td>
                      <td>{p.daysToFinish}</td>
                      <td>{p.elevationPerMile}</td>
                      <td>{p.highpoint}</td>
                      <td>{p.avgTemp}</td>
                      <td>{p.rainfall}</td>
                      <td>{p.avgDistBetweenWaterSources}</td>
                      <td>{p.noWater}</td>
                      <td>{p.predictedResupplies}</td>
                      <td>{p.avgDistBetweenResupplies}</td>
                      <td>{p.longBetweenResupplies}</td>
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
