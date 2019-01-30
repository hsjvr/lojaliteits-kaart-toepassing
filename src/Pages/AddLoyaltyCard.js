import React from 'react';
import { FormControl, InputLabel, Input, Fab } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { TEXT_VALUES } from './../TextValues';

export class AddLoyaltyCard extends React.Component {
  render() {
    return (
      <div style={{ padding: '16px' }}>
        <FormControl style={{ width: '100%' }}>
          <InputLabel>{TEXT_VALUES.LOYALTY_CARD_CODE}</InputLabel>
          <Input />
        </FormControl>
        <Fab color="primary" style={{ bottom: '15px', outline: 'none', position: 'fixed', right: '15px' }}>
          <Check />
        </Fab>
      </div>
    );
  }
}
