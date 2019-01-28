import React from 'react';
import { LoyaltyCard } from '../Components';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export class LoyaltyCards extends React.Component {
  state = {
    loyaltyCards: [
      {
        id: 1,
        date: new Date(2019, 1, 14),
      },
      {
        id: 2,
        date: new Date(2019, 4, 22),
      },
      {
        id: 3,
        date: new Date(2019, 7, 17),
      },
    ],
  };

  render() {
    return (<div>
      {this.state.loyaltyCards.map((loyaltyCard) => <LoyaltyCard key={loyaltyCard.id} loyaltyCard={loyaltyCard} />)}
      <Fab color="primary" style={{bottom: '10px', position: 'fixed', right: '10px'}}>
        <Add />
      </Fab>
    </div>)
  }
}
