import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';


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

                <Box className={classes.decorator}>
                    <Typography variant="span" className={classes.decoratorText}>
                        About Me
                    </Typography>
                    <Typography variant="span" className={classes.arrow}>
                        <ArrowDownwardRoundedIcon/>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default HeadersComponent;

