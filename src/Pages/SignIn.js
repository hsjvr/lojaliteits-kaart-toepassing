import React from 'react';
import { TextField, Paper, FormControl, InputLabel, Input } from '@material-ui/core';

export class SignIn extends React.Component {
  render() {
    return (
      <Paper style={{ margin: '8px', textAlign: 'center' }}>
        <img src="../images/logo.jpg" alt="Logo" />
        <form>
          <FormControl>
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" />
          </FormControl>

          {/* <TextField label="Username" />
          <TextField label="Password" /> */}
        </form>
      </Paper>
    );
  }
}
