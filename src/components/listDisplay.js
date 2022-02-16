import BasicCard from './Card'
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



export default function ListDisplay({productList}){

  let productCards = [];

  for(let i = 0; i < productList.length; ++i){
    productCards.push(<BasicCard key={i} item={productList[i]} />);
  }

  return(

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {Array.from(productCards).map((product, index) => (
      <Grid item xs={2} sm={4} md={4} key={index}>
        {product}
      </Grid>
    ))}
  </Grid>


    )

}