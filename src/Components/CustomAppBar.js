import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { CustomDrawer } from './CustomDrawer';
import { TEXT_VALUES } from './../TextValues';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class CustomMenuAppBar extends React.Component {
  state = {
    drawer: {
      open: false,
    },
  };

  onClickMenu = () => {
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: !this.state.drawer.open,
      },
    });
  };

  onCloseDrawer = () => {
    this.setState({
      drawer: {
        ...this.state.drawer,
        open: false,
      },
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.onClickMenu}
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
              {TEXT_VALUES.APP_BAR}
            </Typography>
            {/* <IconButton color="inherit">
              <AccountCircle />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <CustomDrawer open={this.state.drawer.open} onClose={this.onCloseDrawer} />
      </div>
    );
  }
}

CustomMenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const CustomMenuAppBarWithStyles = withStyles(styles)(CustomMenuAppBar);
