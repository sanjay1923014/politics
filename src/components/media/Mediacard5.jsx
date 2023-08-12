import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blog6 from "../../assets/blog6.jpg"

const MediaCard5 = () => {
  return (
    <Card sx={{ maxWidth: 360,height:"400px",margin:"2rem",marginTop:"130px" }}>
      <CardMedia
        sx={{ height: '170px',width:"100%"}}
        image={blog6}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Best Election Campaign Company in Delhi NCR 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:"700",fontSize:"15px"}}>
        Power to the people is the core potential in elections, but how do you get it there when the election process and rules can be complicated and difficult.
        </Typography>
      </CardContent>
      <CardActions>

        <a href="https://jansampark.org/Election-Campaign-Company-in-Delhi-NCR.html"><Button size="small">Read More</Button></a>
      </CardActions>
    </Card>
  );
};

export default MediaCard5;
