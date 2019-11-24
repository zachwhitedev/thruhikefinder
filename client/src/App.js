import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainDashboard from './containers/MainDashboard/MainDashboard';

export default function App(){
  return (
        <div>
          <MainDashboard />
        </div>
    )
}