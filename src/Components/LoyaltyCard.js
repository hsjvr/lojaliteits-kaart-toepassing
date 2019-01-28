import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import * as moment from 'moment';

export class LoyaltyCard extends React.Component {
  render() {
    return (
      <Card style={{ margin: '8px' }}>
        <CardActionArea>
          <CardMedia style={{ height: '150px' }} image="images/loyalty-card-bg.jpg" title="Loyalty Card Background" />
          <CardContent>
            <Typography gutterBottom variant="h6">
              Lojaliteits Kaart
            </Typography>
            <Typography color="textSecondary">{moment(this.props.loyaltyCard.date).format('DD MMMM YYYY')}</Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ex sollicitudin, dictum sapien
              eget, aliquam mi.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
