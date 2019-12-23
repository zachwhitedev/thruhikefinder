import React from 'react';
import styles from './TripleCrownTable.module.css';
import { Link } from 'react-router-dom';

export default class TripleCrownTable extends React.Component {
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
        name: 'Appalachian Trail',
        year: 1923,
        region: 'East',
        distance: 2192,
        totalstates: 14,
        daysToFinish: 165,
        elevationPerMile: 212,
        highPoint: 6643,
        rainfall: 'N/A',
        noWater: 'N/A',
        predictedResupplies: 66,
        avgDistBetweenResupplies: 33,
        longBetweenResupplies: 100,
        political: 'N/A',
        route: '/at',
        alphabetical: 1
      },
      {
        name: 'Continental Divide Trail',
        year: 1978,
        region: 'Southwest/West',
        distance: 3019,
        totalstates: 5,
        daysToFinish: 170,
        elevationPerMile: 172,
        highPoint: 14278,
        rainfall: 'N/A',
        noWater: 'N/A',
        predictedResupplies: 29,
        avgDistBetweenResupplies: 104,
        longBetweenResupplies: 155,
        political: 'N/A',
        route: '/cdt',
        alphabetical: 2
      },
      {
        name: 'Pacific Crest Trail',
        year: 1968,
        region: 'West',
        distance: 2650,
        totalstates: 3,
        daysToFinish: 150,
        elevationPerMile: 184,
        highPoint: 13153,
        rainfall: 1.15,
        noWater: 42,
        predictedResupplies: 27,
        avgDistBetweenResupplies: 98,
        longBetweenResupplies: 154,
        political: 'N/A',
        route: '/pct',
        alphabetical: 3
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
    if(attribute == 'avgDistBetweenResupplies'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.avgDistBetweenResupplies - b.avgDistBetweenResupplies
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.avgDistBetweenResupplies - a.avgDistBetweenResupplies
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.avgDistBetweenResupplies - b.avgDistBetweenResupplies
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
    if(attribute == 'noWater'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.noWater - b.noWater
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.noWater - a.noWater
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.noWater - b.noWater
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
    if(attribute == 'longBetweenResupplies'){
      this.setState({
        sortType: {
          up: {
            class: 'sort',
            fn: (a, b) => a.longBetweenResupplies - b.longBetweenResupplies
          },
          down: {
            class: 'sort',
            fn: (a, b) => b.longBetweenResupplies - a.longBetweenResupplies
          },
          default: {
            class: 'sort',
            fn: (a, b) => a.longBetweenResupplies - b.longBetweenResupplies
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
        <div className={styles.tableTitle}>Triple Crown Trails</div>
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
                  <th>Approx. Days to Finish
                  <button
                      onClick={() => this.onSortChange('daysToFinish')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>
                    Elevation Gain/Mile (ft)
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
                  <th>Longest No Water Stretch (mi)
                  <button
                      onClick={() => this.onSortChange('noWater')}
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
                      onClick={() => this.onSortChange('avgDistBetweenResupplies')}
                      aria-label='sort by distance'
                    >
                      <i
                        className={`fas fa-${sortType[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Longest Resupply Distance (mi)
                  <button
                      onClick={() => this.onSortChange('longBetweenResupplies')}
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
                        <Link
                          to={p.route}
                          style={{
                            textDecoration: 'none',
                            color: 'rgb(26, 49, 23)',
                            cursor: 'pointer'
                          }}
                        >
                          {p.name}
                        </Link>
                      </td>
                      <td>{p.year}</td>
                      <td>{p.region}</td>
                      <td>{p.distance}</td>
                      <td>{p.totalstates}</td>
                      <td>{p.daysToFinish}</td>
                      <td>{p.elevationPerMile}</td>
                      <td>{p.highPoint}</td>
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
