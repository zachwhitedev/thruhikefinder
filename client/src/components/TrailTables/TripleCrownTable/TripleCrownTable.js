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
        highpoint: '6,643',
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
        highpoint: '13,153',
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
        highpoint: '14,278',
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
          fn: (a, b) => a.waterSources - b.waterSources
        },
        down: {
          class: 'sort-up',
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
      <div className={styles.compWrapper}>
        <h2>Triple Crown Trails</h2>
        <div id={styles.AllTrailsTableWrapper}>
          {this.state.tableData.length > 0 && (
            <table id={styles.AllTrailsTable}>
              <thead>
                <tr className={styles.allTrailsTH}>
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
                  <th>Highest Point (ft)</th>
                  <th>
                    Avg. Rainfall (in)
                  </th>
                  <th>
                    Longest No Water Stretch (mi)
                  </th>
                  <th>Predicted # Resupplies</th>
                  <th>
                    Avg. Resupply Distance (mi)
                  </th>
                  <th>Longest Resupply Distance (mi)</th>
                </tr>
              </thead>
              <tbody>
                {[...this.state.tableData]
                  .sort(sortType[currentSort].fn)
                  .map(p => (
                    <tr className={styles.allTrailsTD}>
                      <td>{p.name}</td>
                      <td>{p.year}</td>
                      <td>{p.region}</td>
                      <td>{p.distance}</td>
                      <td>{p.totalstates}</td>
                      <td>{p.daysToFinish}</td>
                      <td>{p.elevationPerMile}</td>
                      <td>{p.highpoint}</td>
                      <td>{p.rainfall}</td>
                      <td>{p.noWater}</td>
                      <td>{p.predictedResupplies}</td>
                      <td>{p.avgDistBetweenResupplies}</td>
                      <td>{p.longBetweenResupplies}</td>
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
