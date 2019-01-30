import React from 'react';
import { FormControl, InputLabel, Input, Fab, LinearProgress } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { TEXT_VALUES } from './../TextValues';
import { postLoyaltyCard, getGeolocation } from './../Services';
import { withRouter } from 'react-router-dom';

export class AddLoyaltyCard extends React.Component {
  state = {
    loading: false,
    loyaltyCardCode: '',
  };

  onChangeLoyaltyCardCode = (event) => {
    this.setState({
      ...this.state,
      loyaltyCardCode: event.target.value,
    });
  };

  onClickFab = async () => {
    if (!this.state.loyaltyCardCode) {
      // TODO: Add snackbar

      return;
    }

    let geolocation;

    try {
      geolocation = await getGeolocation();
    } catch {
      // TODO: Add snackbar

      return;
    }

    this.setState({
      ...this.state,
      loading: true,
    });

    await postLoyaltyCard(
      this.state.loyaltyCardCode,
      geolocation.coords.latitude,
      geolocation.coords.longitude,
      geolocation.coords.accuracy,
    );

    this.props.history.push('/');

    this.setState({
      ...this.state,
      loading: false,
    });
  };

  render() {
    return (
      <div style={{ padding: '16px' }}>
        {this.state.loading ? <LinearProgress /> : null}
        <FormControl style={{ width: '100%' }}>
          <InputLabel>{TEXT_VALUES.LOYALTY_CARD_CODE}</InputLabel>
          <Input value={this.state.loyaltyCardCode} onChange={this.onChangeLoyaltyCardCode} />
        </FormControl>
        <Fab
          onClick={this.onClickFab}
          color="primary"
          style={{ bottom: '15px', outline: 'none', position: 'fixed', right: '15px' }}
        >
          <Check />
        </Fab>
      </div>
    );
  }
}

export const AddLoyaltyCardWithRouter = withRouter(AddLoyaltyCard);
