import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card1 from "../../assets/blog1.jpg";
import './Mediacard.css';
/* import { snackbarClasses } from '@mui/material'; */


const MediaCard = () => {

  return (
    <Card className="card" sx={{ maxWidth: 360,height:"400px",margin:"2rem",marginTop:"130px" }}>
      <CardMedia className="cardmedia"
        sx={{ height: '170px',width:"100%"}}
        image={card1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Political Advertising Agency in Delhi | Political Survey Agency
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:"700",fontSize:"15px"}}>
        Political Advertising Agency in Delhi: Are you looking for the Political Advertising Agency in Delhi and Best Advertising agency in Bihar?
        </Typography>
      </CardContent>
      <CardActions>

        <a href="https://jansampark.org/Political-Advertising-Agency-in-Delhi.html"><Button size="small">Read More</Button></a>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
