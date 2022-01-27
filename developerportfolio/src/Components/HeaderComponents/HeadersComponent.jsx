import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
import { Decorator } from '../common/commonComponent';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';

function HeadersComponent() {
    const classes = useStyles();
    return (
        <Box className={classes.HeaderWrapper}>
            <Navbar />
            <Box className={classes.Headercontainer}>
                <Typography variant='h3' component="h4" className={classes.headerTitle}>
                    Hello!! I Am Full-Stack,|
                </Typography>
                <Typography variant='h3' component="h4" className={classes.headerDesc}>
                    Web-Developer
                </Typography>

                {Decorator({
                    label: "About Me",
                    withIcon: true,
                    Icon: <ArrowDownwardRoundedIcon />
                })}
                
            </Box>
        </Box>
    )
}

export default HeadersComponent;

