import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { CreditCard, FormatListNumbered, Bookmark, Lock } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
};

class CustomDrawerItems extends React.Component {
  onClickListItem = (link, windowNavigation) => {
    if (windowNavigation) {
      window.location.href = link;
      this.props.onClose();

      return;
    }

    this.props.history.push(link);

    this.props.onClose();
  };

  render() {
    return (
      <div className={this.props.classes.list}>
        <List>
          <ListItem button component="a" onClick={() => this.onClickListItem('/', false)}>
            <ListItemIcon>
              <CreditCard />
            </ListItemIcon>
            <ListItemText> Lojaliteits Kaarte </ListItemText>
          </ListItem>
          <ListItem button component="a" onClick={() => this.onClickListItem('/', false)}>
            <ListItemIcon>
              <FormatListNumbered />
            </ListItemIcon>
            <ListItemText> Ranglys </ListItemText>
          </ListItem>
          <ListItem button component="a" onClick={() => this.onClickListItem('https://janvanriebeeck.co.za', true)}>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText> Webwerf </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component="a" onClick={() => this.onClickListItem('/sign-in', false)}>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText> Teken Uit </ListItemText>
          </ListItem>
        </List>
      </div>
    );
  }
}

CustomDrawerItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CustomDrawerItemsWithStyles = withStyles(styles)(CustomDrawerItems);

export const CustomDrawerItemsWithStylesWithRouter = withRouter(CustomDrawerItemsWithStyles);