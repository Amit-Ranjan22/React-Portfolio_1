import { Box, Container, Grid, Hidden } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';
import image from "../../images/About.jpg"
import { RenderSectionHeading, CardMedia } from '../common/commonComponent';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';

export default function AboutMe() {
    const classes = useStyles();
    const cardMediaData = [
        { title: "Html", description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.", icon: <CodeIcon /> },
        { title: "CSS", description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.", icon: <AcUnitIcon /> },
        { title: "JavaScript", description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.", icon: <WebIcon /> },
        { title: "MySql", description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.", icon: <StorageIcon /> },
    ]
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
                        <br />
                        {/* {CardMedia({label:"label1",Desc:"Desc1",Icon:<AcUnitIcon/>})} */}
                        <Grid container>
                            {cardMediaData.map((item, i) => (
                                <Grid item xs={12} sm={6} key={i}>
                                    {CardMedia({
                                        label: item.title,
                                        Desc: item.description,
                                        Icon: item.icon,
                                    })}
                                </Grid>

                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
