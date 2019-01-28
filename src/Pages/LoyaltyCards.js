import React from 'react';
import { LoyaltyCard } from '../Components';

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
    ],
  };

  render() {
    return this.state.loyaltyCards.map((loyaltyCard) => <LoyaltyCard key={loyaltyCard.id} loyaltyCard={loyaltyCard} />);
  }
}
