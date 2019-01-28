import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CustomMenuAppBarWithStyles, LoyaltyCard } from './Components';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomMenuAppBarWithStyles />
          {/* <Route exact path="/" component={HomePage} />
          <Route path="/features/:id" component={FeaturesEditPageWithStyles} /> */}

          <LoyaltyCard></LoyaltyCard>

          <LoyaltyCard></LoyaltyCard>
        </div>
      </Router>
    );
  }
}

export default App;