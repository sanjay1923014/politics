import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blog3 from "../../assets/blog3.jpg"

const MediaCard2 = () => {
  return (
    <Card sx={{ maxWidth: 360,height:"400px",margin:"2rem",marginTop:"130px" }}>
      <CardMedia
        sx={{ height: '170px',width:"100%"}}
        image={blog3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Best Election campaign Management company in Tamil Nadu
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:"700",fontSize:"15px"}}>
        We are Services Provide in Election, Political Election Campaign Management Company in 
        </Typography>
      </CardContent>
      <CardActions>

        <a href="https://jansampark.org/Political-Election-Campaign-Management-Company-in-Delhi-NCR.html"><Button size="small">Read More</Button></a>
      </CardActions>
    </Card>
  );
};

export default MediaCard2;
