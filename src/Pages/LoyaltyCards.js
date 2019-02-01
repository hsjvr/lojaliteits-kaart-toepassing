import React from 'react';
import { LoyaltyCard } from '../Components';
import { Add } from '@material-ui/icons';
import { List, ListItem, ListSubheader, Fab, LinearProgress, Snackbar, Button } from '@material-ui/core';
import { TEXT_VALUES } from './../TextValues';
import { Link } from 'react-router-dom';
import { getLoyaltyCards, deleteLoyaltyCard } from './../Services';

export class LoyaltyCards extends React.Component {
  state = {
    loyaltyCards: null,
    message: null,
  };

  async componentDidMount() {
    this.setState({
      ...this.state,
      loyaltyCards: await getLoyaltyCards(),
    });
  }

  onCloseSnackbar = () => {
    this.setState({
      ...this.state,
      message: null,
    });
  };

  onClickLoyaltyCard = (loyaltyCard) => {
    this.setState({
      ...this.state,
      message: {
        action: [
          <Button key="yes" onClick={() => this.onClickLoyaltyCardYes(loyaltyCard)} color="secondary" size="small">
            {TEXT_VALUES.TOAST_MESSAGE_3_ACTION_BUTTON_1}
          </Button>,
        ],
        text: TEXT_VALUES.TOAST_MESSAGE_3,
      },
    });
  };

  onClickLoyaltyCardYes = async (loyaltyCard) => {
    this.setState({
      ...this.state,
      loyaltyCards: null,
      message: null,
    });

    await deleteLoyaltyCard(loyaltyCard);

    this.setState({
      ...this.state,
      loyaltyCards: await getLoyaltyCards(),
    });
  };

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
                <LoyaltyCard action={this.onClickLoyaltyCard} loyaltyCard={loyaltyCard} />
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
        <Snackbar
          open={this.state.message ? true : false}
          autoHideDuration={6000}
          onClose={this.onCloseSnackbar}
          message={this.state.message ? <span>{this.state.message.text}</span> : null}
          action={this.state.message ? this.state.message.action : null}
        />
      </div>
    );
  }
}
