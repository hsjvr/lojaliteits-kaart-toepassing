import React from 'react';
import {
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItem,
  ListSubheader,
  ListItemSecondaryAction,
  LinearProgress,
} from '@material-ui/core';
import { Star } from '@material-ui/icons';
import { TEXT_VALUES } from './../TextValues';
import { getUsers } from './../Services';

export class Leaderboard extends React.Component {
  state = {
    users: null,
  };

  async componentDidMount() {
    this.setState({
      ...this.state,
      users: await getUsers(),
    });
  }

  render() {
    return (
      <div>
        <List
          dense={true}
          subheader={
            <ListSubheader disableSticky={true} component="div">
              {TEXT_VALUES.LEARDER_BOARD_MENU_ITEM}
            </ListSubheader>
          }
        >
          {this.state.users ? (
            this.state.users.map((user, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>{`${user.firstName[0]}${user.lastName[0]}`}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${user.firstName} ${user.lastName}`} />
                <ListItemSecondaryAction>
                  {[...new Array(user.numberOfLoyaltyCards)].map((x, index) => (
                    <Star key={index} />
                  ))}
                </ListItemSecondaryAction>
              </ListItem>
            ))
          ) : (
            <LinearProgress />
          )}
        </List>
      </div>
    );
  }
}
