import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../HeaderComponents/HeaderStyles';

export default function Footer() {
    const classes = useStyles();
  return <Box className={classes.footerContainer}>Footer Works</Box>;
  
}
