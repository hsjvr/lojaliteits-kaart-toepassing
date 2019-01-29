import React from 'react';
import { Paper, Button } from '@material-ui/core';
import { TEXT_VALUES } from './../TextValues';
import { Link } from 'react-router-dom';

export class SignIn extends React.Component {
  render() {
    return (
      <Paper style={{ margin: '8px', padding: '20px', textAlign: 'center' }}>
        <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="Logo" />

        <br />
        <Button variant="contained" color="primary" component={Link} to="/">
          {TEXT_VALUES.ENTER_BUTTON}
        </Button>
      </Paper>
    );
  }
}
