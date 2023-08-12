import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blog5 from "../../assets/blog5.jpg"

const MediaCard4 = () => {
  return (
    <Card sx={{ maxWidth: 360,height:"400px",margin:"2rem",marginTop:"130px" }}>
      <CardMedia
        sx={{ height: '170px',width:"100%"}}
        image={blog5}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Best Advertising agency in Bihar | The Political Partners
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontWeight:"700",fontSize:"15px"}}>
        India's leading Election Committee Management Company, Public Relation Agencies are the organization that helps a business to get individual publicity among 
        </Typography>
      </CardContent>
      <CardActions>

        <a href="https://jansampark.org/Best-Election-Branding-and-Advertising-Agency-Delhi.html"><Button size="small">Read More</Button></a>
      </CardActions>
    </Card>
  );
};

export default MediaCard4;
