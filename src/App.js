import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CustomMenuAppBarWithStyles } from './Components';
import { LoyaltyCards, SignIn } from './Pages';
import * as moment from 'moment';

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
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <CustomMenuAppBarWithStyles />
          <Route exact path="/" component={LoyaltyCards} />
          <Route path="/sign-in" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
