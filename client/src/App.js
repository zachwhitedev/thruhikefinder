import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PCT from './components/PCT/PCT';
import AT from './components/AT/AT';
import JMT from './components/JMT/JMT';
import CDT from './components/CDT/CDT';
import LT from './components/LT/LT';
import TrailTables from './components/TrailTables/TrailTables';
import Contact from './components/Contact/Contact';
import BlogMain from './blog/BlogMain';
import Post1ATghosts from './blog/posts/Post1ATMurders/Post1ATMurders';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

function Dropdown(props) {
  let history = useHistory();

  const handleTrailSelect = e => {
    history.push(e.target.value);
    props.receiveRoute(e.target.value);
  };

  return (
    <div id='the-dropdown-container'>
      <select id='the-dropdown' onChange={handleTrailSelect}>
        <option
          value='/'
          name='Compare all trails...'
          selected={props.beingViewed == '/'}
        >
          Choose a trail...
        </option>
        <option
          value='/pct'
          name='Pacific Crest Trail'
          selected={props.beingViewed == '/pct'}
        >
          Pacific Crest Trail
        </option>
        <option
          value='/at'
          name='Appalachian Trail'
          selected={props.beingViewed == '/at'}
        >
          Appalachian Trail
        </option>
        <option
          value='/cdt'
          name='Continental Divide Trail'
          selected={props.beingViewed == '/cdt'}
        >
          Continental Divide Trail
        </option>
        <option
          value='/longtrail'
          name='Long Trail'
          selected={props.beingViewed == '/longtrail'}
        >
          Long Trail
        </option>
        <option
          value='/jmt'
          name='John Muir Trail'
          selected={props.beingViewed == '/jmt'}
        >
          John Muir Trail
        </option>
      </select>
    </div>
  );
}

function App(props) {
  const [routeBeingViewed, setRouteBeingViewed] = useState('/');

  const receiveRoute = route => {
    setRouteBeingViewed(route);
  };

  return (
    <Router>
      <Switch>
        <div style={{ height: '100%' }}>
          <Navbar beingViewed={routeBeingViewed} />
          <main style={{ marginTop: '92px' }}>
            <Route path='/' exact>
              <Dropdown
                beingViewed={routeBeingViewed}
                receiveRoute={receiveRoute}
              />
              <TrailTables receiveRoute={receiveRoute} />
            </Route>
            <Route path='/pct' exact>
              <Dropdown
                beingViewed={routeBeingViewed}
                receiveRoute={receiveRoute}
              />
              <PCT />
            </Route>
            <Route path='/at' exact>
              <Dropdown
                beingViewed={routeBeingViewed}
                receiveRoute={receiveRoute}
              />
              <AT />
            </Route>
            <Route path='/cdt' exact>
              <Dropdown
                beingViewed={routeBeingViewed}
                receiveRoute={receiveRoute}
              />
              <CDT />
            </Route>
            <Route path='/longtrail' exact>
              <Dropdown
                beingViewed={routeBeingViewed}
                receiveRoute={receiveRoute}
              />
              <LT />
            </Route>
            <Route path='/jmt' exact>
              <Dropdown
                beingViewed={routeBeingViewed}
                receiveRoute={receiveRoute}
              />
              <JMT />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
            <Route path='/blog' exact>
              <BlogMain />
            </Route>
            <Route path='/blog/at-ghosts' exact>
              <Post1ATghosts />
            </Route>
          </main>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
