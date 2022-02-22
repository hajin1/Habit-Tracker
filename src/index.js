import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import '@fortawesome/fontawesome-free/js/all.js';
import HabitPresenter from './app/habit_presenter';
const habits = [
  { id: 1, name: 'Reading', count: 0 },
  { id: 2, name: 'Swimming', count: 0 },
  { id: 3, name: 'Climbing', count: 0 },
];

const habitPresenter = new HabitPresenter(habits);

ReactDOM.render(
  <React.StrictMode>
    <App presenter={habitPresenter} />
  </React.StrictMode>,
  document.getElementById('root')
);
