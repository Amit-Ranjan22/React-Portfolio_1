import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';


export default function AboutMe() {
    const classes = useStyles();
    return (
        <Box className={classes.section}>
            <h1>About section works</h1>
        </Box>
    )
}
