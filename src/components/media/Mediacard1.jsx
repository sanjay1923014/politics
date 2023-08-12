import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blog2 from "../../assets/blog2.jpg"

const MediaCard1 = () => {
  return (
    <Card sx={{ maxWidth: 360,height:"400px",margin:"2rem",marginTop:"130px" }}>
      <CardMedia
        sx={{ height: '170px',width:"100%"}}
        image={blog2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Best PR Agency in Delhi NCR | Public Relation Service  
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:"700",fontSize:"15px"}}>
        Public relations is a way to build your business image. Even if your business is well established, now is not the time to start a new.
        </Typography>
      </CardContent>
      <CardActions>

        <a href="https://jansampark.org/PR-Agency-in-Delhi-NCR.html"><Button size="small">Read More</Button></a>
      </CardActions>
    </Card>
  );
};

export default MediaCard1;
