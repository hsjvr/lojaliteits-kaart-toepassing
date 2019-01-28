import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

export class LoyaltyCard extends React.Component {
  render() {
    return (
      <Card style={{ margin: '5px' }}>
        <CardActionArea>
          <CardMedia style={{ height: '150px' }} image="/images/loyalty-card-bg.jpg" title="Loyalty Card Background" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lojaliteits Kaart (2019/02/14)
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ex sollicitudin, dictum sapien
              eget, aliquam mi.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Redeem
          </Button>
        </CardActions>
      </Card>
    );
  }
}
