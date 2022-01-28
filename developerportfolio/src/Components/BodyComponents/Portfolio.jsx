import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { RenderSectionHeading } from '../common/commonComponent';
import { useStyles } from '../HeaderComponents/HeaderStyles';

export default function Portfolio() {
    const classes = useStyles()
  return (
      <Box className={classes.sectionDark} id="Portfolio">
          <Grid container>
              <Grid item xs={12} sm={8}>
                  {RenderSectionHeading({})}
              </Grid>
          </Grid>
      </Box>
  ) 
}
