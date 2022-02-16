import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({item}) {



   return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.category}
        </Typography>
        <Typography variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e) => handleProductClick(item.id)}>View Product</Button>
      </CardActions>
    </Card>
  );
}