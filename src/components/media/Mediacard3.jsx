import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blog4 from "../../assets/blog4.jpg"

const MediaCard3 = () => {
  return (
    <Card sx={{ maxWidth: 360,height:"400px",margin:"2rem",marginTop:"130px" }}>
      <CardMedia
        sx={{ height: '170px',width:"100%"}}
        image={blog4}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Political Partners
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:"700",fontSize:"15px"}}>
        Company is a Best Political Campaign Management Company in Delhi NCR and Haryana.The company is working with political leaders and parties to make election management easier.
        </Typography>
      </CardContent>
      <CardActions>

       <a href="https://jansampark.org/Best-Political-Campaign-Management-Company-in-Delhi-NCR.html"><Button size="small">Read More</Button></a>
      </CardActions>
    </Card>
  );
};

export default MediaCard3;
