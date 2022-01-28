import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { RenderSectionHeading } from '../common/commonComponent';
// import { useStyles } from '../HeaderComponents/HeaderStyles';
import { useStyles } from "./BodyStyles";

export default function Portfolio() {
    const classes = useStyles()
    return (
        <Box className={classes.sectionDark} id="Portfolio">
            <Grid 
            container 
            style={{
                display:"flex", 
                justifyContent:"center", 
                alignContent:"center",
                }}>
                <Grid item xs={12} sm={8}>
                    {RenderSectionHeading({
                        smallTxt: "Portfolio",
                        heading: "My Boot-camp Projects",
                        alignCenter: true,
                    })}
                </Grid>
            </Grid>
        </Box>
    )
}
