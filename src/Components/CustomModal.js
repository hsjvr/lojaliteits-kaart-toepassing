import React from 'react';
import { Modal, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class CustomModal extends React.Component {
  render() {
    return (
      <Modal open={this.props.open}>
        <div className={this.props.classes.paper}>
          aaa
        </div>
      </Modal>
    );
  }
}

export const CustomModalWithStyles = withStyles(styles)(CustomModal);
