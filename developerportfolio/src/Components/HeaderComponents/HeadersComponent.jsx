import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';


function HeadersComponent() {
    const classes = useStyles()
    return (
        <Box className={classes.HeaderWrapper}>
            <Navbar/>
           <Box className={classes.Headercontainer}>
               <Typography variant='h2'>Hello webdevelopers</Typography>
           </Box>
        </Box>
    )
}

export default HeadersComponent;

