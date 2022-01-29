import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../HeaderComponents/HeaderStyles';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from 'react-scroll';

export default function Footer() {
    const classes = useStyles();
    var date = new Date();
    return (
        <Box className={classes.footerContainer} id="Footer">
            <IconButton className={classes.IconButton}
                to="Header"
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                component={Link}

            >
                <ArrowUpwardRoundedIcon />
            </IconButton>
            <Typography
                variant='body1'
                component="h4"
                align="center"
                color="inherit" >
                Developed and designed with <FavoriteIcon style={{ color: "red" }} /> by
                Amitabh Ranjan , All Right Reserved © {date.getFullYear()}
            </Typography>
        </Box>
    )

}
