import React from 'react';
import { Box, makeStyles } from '@material-ui/core'
import { useStyles } from './HeaderStyles';


function HeadersComponent() {
    const classes = useStyles()
    return (
        <Box className={classes.HeaderWrapper}>
           Hello From Header Wrapper
        </Box>
    )
}

export default HeadersComponent;

