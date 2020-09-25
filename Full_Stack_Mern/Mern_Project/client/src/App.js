import React from 'react';
import './App.css';
import { Link, Router } from '@reach/router';

import Main from './views/Main';
import NewAthleteForm from './components/NewAthleteForm';
import AthleteDetail from './components/AthleteDetail';
import AthleteEdit from './components/AthleteEdit';
import SnatchList from './components/SnatchList';
import CleanAndJerkList from './components/CleanAndJerkList';
import DeadliftList from './components/DeadliftList';
import BacksquatList from './components/BacksquatList';

function App() {
  return (
    <div className="App">
      <h1>Lifters United</h1>
      <Link to="/snatch">Snatch</Link>  |  <Link to="/cleanandjerk">Clean & Jerk</Link>  |  <Link to="/deadlift">Deadlift</Link>  |  <Link to="/backsquat">Back Squat</Link>
      <br></br>
      <br></br>
      <Router>
        <Main path="/" />
        <NewAthleteForm path="/create" />
        <AthleteDetail path="/:id" />
        <AthleteEdit path="/:id/edit" />
        <SnatchList path="/snatch" />
        <CleanAndJerkList path="/cleanandjerk" />
        <DeadliftList path="/deadlift" />
        <BacksquatList path="/backsquat" />
      </Router>
    </div>
  );
}

export default App;
