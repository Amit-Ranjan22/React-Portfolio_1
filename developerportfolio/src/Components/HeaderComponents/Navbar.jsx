import { AppBar, Box, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './HeaderStyles';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

export default function Navbar() {
    const classes = useStyles();

    const navlinks = [
        { label: "About", Id: "About" },
        { label: "Portfolio", Id: "Portfolio" },
        { label: "Contact", Id: "Contact" },
    ]

    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.ToolBar}>
                <Typography variant="h5" component="h6" >
                    {"<Amitabh Ranjan/>"}
                </Typography>

                {/* navlinks */}
                <Box component={Hidden} xsDown>
                    <Box>
                        {navlinks.map((item, i) => (
                            <Button className={classes.navlinks}>{item.label}</Button>
                        ))}
                    </Box>
                </Box>
                <Box component={Hidden} smUp>
                    <IconButton color="inherit">
                        <MenuOpenRoundedIcon/>
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
