import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';


function HeadersComponent() {
    const classes = useStyles()
    return (
        <Box className={classes.HeaderWrapper}>
            <Navbar />
            <Box className={classes.Headercontainer}>
                <Typography variant='h3' component="h4" className={classes.headerTitle}>
                    Hello!!
                </Typography>
                <Typography variant='h3' component="h4" className={classes.headerDesc}>
                    I'm A Full-Stack Web-Developer
                </Typography>
            </Box>
        </Box>
    )
}

export default HeadersComponent;

