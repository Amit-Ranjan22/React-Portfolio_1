import { Box, Container, Grid, Hidden } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';
import image from "../../images/About.jpg"
import { RenderSectionHeading } from '../common/commonComponent';

export default function AboutMe() {
    const classes = useStyles();
    return (
        <Box className={classes.section}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={5} >
                        <Box component={Hidden} xsDown>
                            <img
                                src={image}
                                alt="about me"
                                className={classes.responsiveImg}
                            />
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={7}>
                        {RenderSectionHeading({
                            smallTxt: "ABOUT ME",
                            heading: "Hello! I'm Amitabh Ranjan",
                            description: "Adaptability is the keyword which has become the all encompassing factor touching upon every aspect of my life since last few years of my life, be it social, personal or professional!"
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
