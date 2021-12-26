import * as React from 'react';
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../Product-data';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
    //const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
          {
              products.map(e =>(
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Product key={e.id} product={e}/>
              </Grid> 
              ))
          }
      </Grid>
    </div>
  );
}


