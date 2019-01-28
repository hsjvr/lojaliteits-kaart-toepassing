import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { CustomDrawerItemsWithStylesWithRouter } from './CustomDrawerItems';

export class CustomDrawer extends React.Component {
  render() {
    return (
      <Drawer open={this.props.open} onClose={this.props.onClose}>
        <CustomDrawerItemsWithStylesWithRouter onClose={this.props.onClose} />
      </Drawer>
    );
  }
}
