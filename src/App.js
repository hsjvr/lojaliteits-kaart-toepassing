import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { CustomMenuAppBarWithStyles } from './Components';
import { AddLoyaltyCardWithRouter, Leaderboard, LoyaltyCards, SignIn } from './Pages';
import * as moment from 'moment';
import { getGeolocation } from './Services';

moment.locale('af', {
  months: [
    'Januarie',
    'Februarie',
    'Maart',
    'April',
    'Mei',
    'Junie',
    'Julie',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
});

moment.locale('af');

class App extends Component {
  componentDidMount() {
    getGeolocation().catch(() => {
      // TODO: Add snackbar
    });
  }

  render() {
    return (
      <Router>
        <div>
          <CustomMenuAppBarWithStyles />
          <Route path="/add-loyalty-card" component={AddLoyaltyCardWithRouter} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route exact path="/" component={LoyaltyCards} />
          <Route path="/sign-in" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
