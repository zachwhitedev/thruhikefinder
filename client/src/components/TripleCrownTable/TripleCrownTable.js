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
        distance: 2652,
        totalstates: 3,
        elpermile: 119,
        region: 'West',
        highpoint: 'Forester Pass (13,153 ft.)'
      },
      {
        name: 'Continental Divide Trail',
        distance: 3100,
        totalstates: 5,
        elpermile: 129,
        region: 'Southwest/West',
        highpoint: "Gray's Peak (14,278 ft.)"
      },
      {
        name: 'Appalachian Trail',
        distance: 2189,
        totalstates: 14,
        elpermile: 235,
        region: 'East',
        highpoint: "Clingman's Dome (6,643 ft.)"
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
                  <th> 🗺️ Region</th>
                  <th>
                    🥾 Distance
                    <button onClick={this.onSortChange}>
                      <i
                        className={`fas fa-${sortTypeNetWorth[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th># of States Entered</th>
                  <th>
                    ⛰️ Elevation Per Mile
                    <button onClick={this.onSortChangeCock}>
                      <i
                        className={`fas fa-${sortTypeCock[currentSort].class}`}
                      />
                    </button>
                  </th>
                  <th>Highest Point</th>
                </tr>
              </thead>
              <tbody>
                {[...this.state.tableData]
                  .sort(sortType[currentSort].fn)
                  .map(p => (
                    <tr className={styles.tdcrown}>
                      <td>{p.name}</td>
                      <td>{p.region}</td>
                      <td>{p.distance} mi.</td>
                      <td>{p.totalstates}</td>
                      <td>{p.elpermile} ft.</td>
                      <td>{p.highpoint}</td>
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
