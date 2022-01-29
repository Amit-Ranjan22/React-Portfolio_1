import React, { useState } from 'react';
import { Box, Drawer, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
import { Decorator } from '../common/commonComponent';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import DrawerComponent from './DrawerComponent';

function HeadersComponent() {
    const classes = useStyles();
    const [initialState, setInitialState] = useState(false)
    const handleDrawerToggler = () => {
        setInitialState(initialState);
    };

    const navlinks = [
        { label: "About", Id: "About" },
        { label: "Portfolio", Id: "Portfolio" },
        { label: "Contact", Id: "Contact" },
    ]

    return (
        <Box className={classes.HeaderWrapper} id="Header">
            <Navbar navlinks={navlinks} handleDrawerToggler={handleDrawerToggler} />
            <DrawerComponent initialState={initialState} navlinks={navlinks} handleDrawerToggler={handleDrawerToggler} />
            <DrawerComponent
                initialState={initialState}
                navlinks={navlinks}
                handleDrawerToggler={handleDrawerToggler}
            />

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

