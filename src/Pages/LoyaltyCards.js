import React from 'react';
import { LoyaltyCard } from '../Components';
import { Add } from '@material-ui/icons';
import { List, ListItem, ListSubheader, Fab, LinearProgress } from '@material-ui/core';
import { TEXT_VALUES } from './../TextValues';
import { Link } from 'react-router-dom';
import { fetchLoyaltyCards } from './../Services';

export class LoyaltyCards extends React.Component {
  state = {
    loyaltyCards: null,
  };

  async componentDidMount() {
    this.setState({
      ...this.state,
      loyaltyCards: await fetchLoyaltyCards(),
    });
  }

  render() {
    return (
      <div>
        <List
          dense={true}
          subheader={
            <ListSubheader disableSticky={true} component="div">
              {TEXT_VALUES.LOYALTY_CARDS_MENU_ITEM}
            </ListSubheader>
          }
        >
          {this.state.loyaltyCards ? (
            this.state.loyaltyCards.map((loyaltyCard) => (
              <ListItem key={loyaltyCard.id}>
                <LoyaltyCard loyaltyCard={loyaltyCard} />
              </ListItem>
            ))
          ) : (
            <LinearProgress />
          )}
        </List>
        <Fab
          color="primary"
          style={{ bottom: '15px', outline: 'none', position: 'fixed', right: '15px' }}
          component={Link}
          to="/add-loyalty-card"
        >
          <Add />
        </Fab>
      </div>
    );
  }
}
