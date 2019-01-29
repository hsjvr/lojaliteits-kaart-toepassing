import React from 'react';
import { LoyaltyCard } from '../Components';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { List, ListItem, ListSubheader } from '@material-ui/core';

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
    return (
      <div>
        <List
          dense={true}
          subheader={
            <ListSubheader disableSticky={true} component="div">
              Loyalty Cards
            </ListSubheader>
          }
        >
          {this.state.loyaltyCards.map((loyaltyCard) => (
            <ListItem key={loyaltyCard.id}>
              <LoyaltyCard loyaltyCard={loyaltyCard} />
            </ListItem>
          ))}
        </List>
        <Fab color="primary" style={{ bottom: '15px', outline: 'none', position: 'fixed', right: '15px' }}>
          <Add />
        </Fab>
      </div>
    );
  }
}
