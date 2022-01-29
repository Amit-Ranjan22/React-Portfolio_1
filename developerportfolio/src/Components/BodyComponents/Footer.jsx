import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../HeaderComponents/HeaderStyles';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Footer() {
    const classes = useStyles();
    var date = new Date();
    return (
        <Box className={classes.footerContainer}>
        <IconButton className={classes.IconButton}>
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
