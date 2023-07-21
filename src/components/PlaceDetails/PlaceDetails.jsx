import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import PhoneIcon from '@material-ui/icons/Phone';
// import Rating from '@material-ui/icons/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  
  console.log(place);
  return(
    <>
    <Card elevation={6}>
      <CardMedia
       style= {{ height: 350 }}
       image = {place.photo ? place.photo.images.large.url : 'https://media.gettyimages.com/id/472959445/video/site-under-construction.jpg?s=640x640&k=20&c=VHY0xTHLivI0j1dYzjyVjknDe0FVCQI-w40KjzsGFsU='}
       title={place.name}
       />
       <CardContent>
          <Typography gutterBottom variant="h5">{place.name}</Typography>
       </CardContent>
    </Card>
    </>
  )
}

export default PlaceDetails;