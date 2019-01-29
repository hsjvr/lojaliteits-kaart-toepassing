import React from 'react';
import {
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItem,
  ListSubheader,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Star } from '@material-ui/icons';

export class Leaderboard extends React.Component {
  state = {
    users: [
      {
        firstName: 'Desmond',
        lastName: 'Murray',
        numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
      },
      {
        firstName: 'Aylin',
        lastName: 'Leonard',
        numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
      },
      {
        firstName: 'Harrison',
        lastName: 'Ellis',
        numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
      },
      {
        firstName: 'Octavio',
        lastName: 'Gilmore',
        numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
      },
      {
        firstName: 'Ean',
        lastName: 'Reese',
        numberOfLoyaltyCards: Math.floor(Math.random() * 7) + 1,
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
              Leaderboard
            </ListSubheader>
          }
        >
          {this.state.users.map((user) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>{`${user.firstName[0]}${user.lastName[0]}`}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${user.firstName} ${user.lastName}`} />
              <ListItemSecondaryAction>
                {[...new Array(user.numberOfLoyaltyCards)].map(() => (
                  <Star />
                ))}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
