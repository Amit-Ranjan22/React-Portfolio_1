import React, { useState } from 'react';
import { Box, Drawer, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
import { Decorator } from '../common/commonComponent';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import DrawerComponent from './DrawerComponent';
import Typed from "react-typed";

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
                    Hello!! I am a <span style={{ paddingRight: "5px" }}></span>
                    <Typed
                        strings={[
                            "Web-Developer,",
                            "ASTQB Certified Tester,",
                            "ASTQB Certified Agile Tester,",
                        ]}
                        typeSpeed={60}
                        backSpeed={60}
                        loop
                    />
                </Typography>
                <Typography variant='h3' component="h4" className={classes.headerDesc}>
                    Full-Stack Web-Developer
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

