import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './HeaderStyles';

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.Toolbar}>
                <Typography variant="h5" component="h6" >
                    {"<Amitabh Ranjan/>"}
                </Typography>

                {/* navlinks */}
                <Box>
                    <Button> link1 </Button>
                    <Button> link1 </Button>
                    <Button> link1 </Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
