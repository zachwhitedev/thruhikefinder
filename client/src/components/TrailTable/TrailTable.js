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
        name: 'Pacific Crest Trail',
        year: 1968,
        distance: 2652,
        totalstates: 3,
        daysToFinish: 150,
        elevationPerMile: 184,
        region: 'West',
        highPoint: 'Forester Pass (13,153 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 26,
        avgResupplies: 102,
        political: 'N/A'
      },
      {
        name: 'Continental Divide Trail',
        year: 1978,
        distance: 3100,
        totalstates: 5,
        daysToFinish: 170,
        elevationPerMile: 172,
        region: 'Southwest/West',
        highPoint: 'Grays Peak (14,278 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Appalachian Trail',
        year: 1923,
        distance: 2189,
        totalstates: 14,
        daysToFinish: 165,
        elevationPerMile: 212,
        region: 'East',
        highPoint: 'Clingman\'s Dome (6,643 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Long Trail (VT)',
        year: 1910,
        distance: 273,
        totalstates: 1,
        daysToFinish: 20,
        elevationPerMile: 239,
        region: 'Northeast',
        highPoint: 'Mt. Mansfield (4,395 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'John Muir Trail',
        year: 1915,
        distance: 211,
        totalstates: 1,
        daysToFinish: 20,
        elevationPerMile: 221,
        region: 'West',
        highPoint: 'Mt. Whitney (14,505 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Arizona Trail',
        year: 2009,
        distance: 790,
        totalstates: 1,
        daysToFinish: 40,
        elevationPerMile: 'N/A',
        region: 'Southwest',
        highPoint: 'Kaibab Plateau (9,148 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Colorado Trail',
        year: 1987,
        distance: 483,
        totalstates: 1,
        daysToFinish: 30,
        elevationPerMile: 185,
        region: 'West',
        highPoint: 'Jarosa Mesa (13,271 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Pacific Northwest Trail',
        year: 1977,
        distance: 1200,
        totalstates: 3,
        daysToFinish: 60,
        elevationPerMile: 171,
        region: 'West',
        highPoint: 'Cathedral Pass (7,800 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Hayduke Trail',
        year: 2005,
        distance: 812,
        totalstates: 2,
        daysToFinish: 45,
        elevationPerMile: 125,
        region: 'Southwest',
        highPoint: 'Mt. Ellen (11,419 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Oregon Desert Trail',
        year: 2011,
        distance: 750,
        totalstates: 1,
        daysToFinish: 40,
        elevationPerMile: 91,
        region: 'West',
        highPoint: 'N/A',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Florida Trail',
        year: 1966,
        distance: 1300,
        totalstates: 1,
        daysToFinish: 70,
        elevationPerMile: '< 80',
        region: 'Southeast',
        highPoint: 'N/A (270 ft.)',
        avgTemp: 'N/A',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        political: 'N/A'
      },
      {
        name: 'Ozark Trail',
        year: 1981,
        distance: 350,
        totalstates: 1,
        daysToFinish: 25,
        elevationPerMile: 'N/A',
        region: 'Midwest',
        highPoint: 'Taum Sauk (1,772 ft.)',
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
                  <th>Trail Name</th>
                  <th>Year Established</th>
                  <th>Region</th>
                  <th>
                    Distance (mi)
                    <button
                      onClick={this.onSortChange}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortTypeNetWorth[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th># States Entered</th>
                  <th>Approx. Days to Finish</th>
                  <th>Elev. Gain/Mile (ft)</th>
                  <th>Highest Point</th>
                  <th>Avg. Temp (H/L)</th>
                  <th>Avg. Rainfall (in)</th>
                  <th>Predicted # Resupplies</th>
                  <th>Avg. Dist. Between Resupplies (mi)</th>
                  <th>Political Breakdown (% D/R)</th>
                </tr>
              </thead>
              <tbody>
                {[...this.state.tableData]
                  .sort(sortType[currentSort].fn)
                  .map(p => (
                    <tr className={styles.tr}>
                      <td>{p.name}</td>
                      <td>{p.year}</td>
                      <td>{p.region}</td>
                      <td>{p.distance}</td>
                      <td>{p.totalstates}</td>
                      <td>{p.daysToFinish}</td>
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
