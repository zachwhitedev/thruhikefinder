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
        class: 'sort',
        fn: (a, b) => a.distance - b.distance
      }
    },
    currentSort: 'default',
    tableData: [
      {
        name: 'Pacific Crest Trail 👑',
        distance: 2652,
        totalstates: 'N/A',
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Continental Divide Trail 👑',
        distance: 3100,
        totalstates: 'N/A',
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Appalachian Trail 👑',
        distance: 2189,
        totalstates: 'N/A',
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Long Trail (VT)',
        distance: 273,
        totalstates: 'N/A',
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'John Muir Trail',
        distance: 211,
        totalstates: 1,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Arizona Trail',
        distance: 790,
        totalstates: 1,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Colorado Trail',
        distance: 483,
        totalstates: 1,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Pacific Northwest Trail',
        distance: 1200,
        totalstates: 3,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Hayduke Trail',
        distance: 812,
        totalstates: 2,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Oregon Desert Trail',
        distance: 750,
        totalstates: 1,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Florida Trail',
        distance: 1000,
        totalstates: 1,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Ozark Trail',
        distance: 350,
        totalstates: 1,
        elevationPerMile: 'N/A',
        region: 'N/A',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
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

  // onSortChangeCock = () => {
  //   this.setState({
  //     sortType: {
  //       up: {
  //         class: 'sort-down',
  //         fn: (a, b) => a.waterSources - b.waterSources
  //       },
  //       down: {
  //         class: 'sort-up',
  //         fn: (a, b) => b.waterSources - a.waterSources
  //       },
  //       default: {
  //         class: 'sort-down',
  //         fn: (a, b) => a.waterSources - b.waterSources
  //       }
  //     }
  //   });

  //   const { currentSort } = this.state;
  //   let nextSort;

  //   if (currentSort === 'down') nextSort = 'up';
  //   else nextSort = 'down';

  //   this.setState({
  //     currentSort: nextSort
  //   });
  // };

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
        <h2>All Thru-Hikes</h2>
        <div className={styles.tableWrapper}>
          {this.state.tableData.length > 0 && (
            <table className='text-left'>
              <thead>
                <tr className={styles.th}>
                  <th> 🌲 Trail Name</th>
                  <th>Region</th>
                  <th>
                    🥾 Distance
                    <button onClick={this.onSortChange} aria-label='sort by distance'>
                      <i
                        className={`fas fa-${sortTypeNetWorth[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th># of States Entered</th>
                  <th>Elev. Per Mile</th>
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
                  <th>
                    Political Breakdown (% D/R)
                  </th>

                  
                </tr>
              </thead>
              <tbody>
                {[...this.state.tableData]
                  .sort(sortType[currentSort].fn)
                  .map(p => (
                    <tr className={styles.tr}>
                      <td>{p.name}</td>
                      <td>{p.region}</td>
                      <td>{p.distance}mi</td>
                      <td>{p.totalstates}</td>
                      <td>{p.elevationPerMile}</td>
                      <td>{p.highPoint}</td>
                      <td>{p.avgTemp}</td>
                      <td>{p.rainfall}</td>
                      <td>{p.predictedResupplies}</td>
                      <td>{p.avgResupplies}</td>
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
