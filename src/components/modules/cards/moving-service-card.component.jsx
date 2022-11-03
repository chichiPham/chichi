import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovingServiceCard(props) {
    const {logo,serviceName,distance,price}=props
    return (
        <Card sx={{ maxWidth: 345, height:"auto" }}>
            <CardMedia
                component="img"
                height="100%"
                image={logo}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {serviceName}
                </Typography>
                <Typography variant="body2" color="text.secondary">

                    <p>Distance: {distance} Km</p>
                    <p>Price: {price} $</p>

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
