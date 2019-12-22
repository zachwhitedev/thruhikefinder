import React from 'react';
import styles from './AllTrailsTable.module.css';
import { Link } from 'react-router-dom';

export default class AllTrailsTable extends React.Component {
  // declaring the default state
  state = {
    sortType: {
      up: {
        class: 'sort',
        fn: (a, b) => a.distance - b.distance
      },
      down: {
        class: 'sort',
        fn: (a, b) => b.distance - a.distance
      },
      default: {
        class: 'sort',
        fn: (a, b) => a.alphabetical - b.alphabetical
      }
    },
    currentSort: 'default',
    tableData: [
      {
        name: 'Pacific Crest Trail',
        year: 1968,
        distance: 2650,
        totalstates: 3,
        daysToFinish: 150,
        elevationPerMile: 184,
        region: 'West',
        highPoint: 13153,
        rainfall: 1.15,
        predictedResupplies: 27,
        avgResupplies: 98,
        route: '/pct',
        alphabetical: 11
      },
      {
        name: 'Continental Divide Trail',
        year: 1978,
        distance: 3019,
        totalstates: 5,
        daysToFinish: 170,
        elevationPerMile: 172,
        region: 'Southwest/West',
        highPoint: 14278,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        route: '/cdt',
        alphabetical: 4
      },
      {
        name: 'Appalachian Trail',
        year: 1923,
        distance: 2192,
        totalstates: 14,
        daysToFinish: 165,
        elevationPerMile: 212,
        region: 'East',
        highPoint: 6643,
        rainfall: 'N/A',
        predictedResupplies: 69,
        avgResupplies: 'N/A',
        route: '/at',
        alphabetical: 2
      },
      {
        name: 'Long Trail (VT)',
        year: 1910,
        distance: 273,
        totalstates: 1,
        daysToFinish: 20,
        elevationPerMile: 239,
        region: 'Northeast',
        highPoint: 4395,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        route: '/longtrail',
        alphabetical: 8
      },
      {
        name: 'John Muir Trail',
        year: 1915,
        distance: 211,
        totalstates: 1,
        daysToFinish: 20,
        elevationPerMile: 221,
        region: 'West',
        highPoint: 14505,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        route: '/jmt',
        alphabetical: 7
      },
      {
        name: 'Arizona Trail',
        year: 2009,
        distance: 790,
        totalstates: 1,
        daysToFinish: 40,
        elevationPerMile: 'N/A',
        region: 'Southwest',
        highPoint: 9148,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        alphabetical: 1
      },
      {
        name: 'Colorado Trail',
        year: 1987,
        distance: 483,
        totalstates: 1,
        daysToFinish: 30,
        elevationPerMile: 185,
        region: 'West',
        highPoint: 13271,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        alphabetical: 3
      },
      {
        name: 'Pacific Northwest Trail',
        year: 1977,
        distance: 1200,
        totalstates: 3,
        daysToFinish: 60,
        elevationPerMile: 171,
        region: 'West',
        highPoint: 7800,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        alphabetical: 12
      },
      {
        name: 'Hayduke Trail',
        year: 2005,
        distance: 812,
        totalstates: 2,
        daysToFinish: 45,
        elevationPerMile: 125,
        region: 'Southwest',
        highPoint: 11419,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        alphabetical: 6
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
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        alphabetical: 9
      },
      {
        name: 'Florida Trail',
        year: 1966,
        distance: 1300,
        totalstates: 1,
        daysToFinish: 70,
        elevationPerMile: '< 80',
        region: 'Southeast',
        highPoint: 'N/A (270)',
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        alphabetical: 5
      },
      {
        name: 'Ozark Trail',
        year: 1981,
        distance: 350,
        totalstates: 1,
        daysToFinish: 25,
        elevationPerMile: 'N/A',
        region: 'Midwest',
        highPoint: 1772,
        rainfall: 'N/A',
        predictedResupplies: 'N/A',
        avgResupplies: 'N/A',
        alphabetical: 10
      }
    ]
  };

  // method called every time the sort button is clicked
  // it will change the currentSort value to the next one
  onSortChange = (attribute) => {
    if(attribute == 'distance'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.distance - b.distance
          },
          down: {
            class: 'sort',
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
    }
    if(attribute == 'totalstates'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.totalstates - b.totalstates
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.totalstates - a.totalstates
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.totalstates - b.totalstates
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
    }
    if(attribute == 'year'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.year - b.year
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.year - a.year
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.year - b.year
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
    }
    if(attribute == 'elevationPerMile'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.elevationPerMile - b.elevationPerMile
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.elevationPerMile - a.elevationPerMile
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.elevationPerMile - b.elevationPerMile
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
    }
    if(attribute == 'highPoint'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.highPoint - b.highPoint
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.highPoint - a.highPoint
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.highPoint - b.highPoint
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
    }
    if(attribute == 'daysToFinish'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.daysToFinish - b.daysToFinish
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.daysToFinish - a.daysToFinish
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.daysToFinish - b.daysToFinish
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
    }
    if(attribute == 'rainfall'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.rainfall - b.rainfall
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.rainfall - a.rainfall
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.rainfall - b.rainfall
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
    }
    if(attribute == 'predictedResupplies'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.predictedResupplies - b.predictedResupplies
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.predictedResupplies - a.predictedResupplies
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.predictedResupplies - b.predictedResupplies
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
    }
    if(attribute == 'avgResupplies'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.avgResupplies - b.avgResupplies
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.avgResupplies - a.avgResupplies
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.avgResupplies - b.avgResupplies
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
    }

  };

  render() {
    const { currentSort, sortType } = this.state;

    return (
      <div className={styles.compWrapper}>
        <div className={styles.tableTitle}>All Thru-Hikes</div>
        <div id={styles.AllTrailsTableWrapper}>
          {this.state.tableData.length > 0 && (
            <table id={styles.AllTrailsTable}>
              <thead>
                <tr className={styles.allTrailsTH}>
                  <th>Trail Name</th>
                  <th>Year Established
                  <button
                      onClick={() => this.onSortChange('year')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Region</th>
                  <th>
                    Distance (mi)
                    <button
                      onClick={() => this.onSortChange('distance')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th># States Entered
                  <button
                      onClick={() => this.onSortChange('totalstates')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>~ Days to Finish
                  <button
                      onClick={() => this.onSortChange('daysToFinish')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Elev. Gain/Mile (ft)
                  <button
                      onClick={() => this.onSortChange('elevationPerMile')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Highest Point (ft)
                  <button
                      onClick={() => this.onSortChange('highPoint')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Avg. Rainfall (in)
                  <button
                      onClick={() => this.onSortChange('rainfall')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Predicted # Resupplies
                  <button
                      onClick={() => this.onSortChange('predictedResupplies')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Avg. Resupply Distance (mi)
                  <button
                      onClick={() => this.onSortChange('avgResupplies')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...this.state.tableData]
                  .sort(sortType[currentSort].fn)
                  .map(p => (
                    <tr className={styles.allTrailsTD}>
                      <td>
                        <Link to={p.route} style={{ textDecoration: 'none', color: 'rgb(26, 49, 23)', cursor: 'pointer' }}>{p.name}</Link>
                      </td>
                      <td>{p.year}</td>
                      <td>{p.region}</td>
                      <td>{p.distance}</td>
                      <td>{p.totalstates}</td>
                      <td>{p.daysToFinish}</td>
                      <td>{p.elevationPerMile}</td>
                      <td>{p.highPoint}</td>
                      <td>{p.rainfall}</td>
                      <td>{p.predictedResupplies}</td>
                      <td>{p.avgResupplies}</td>
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
