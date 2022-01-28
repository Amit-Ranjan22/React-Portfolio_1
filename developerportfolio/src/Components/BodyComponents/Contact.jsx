import { Box, Container, Grid, Hidden, TextField } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';
import image from "../../images/contactus.jpg"
import { RenderSectionHeading } from '../common/commonComponent';
import { useState } from 'react';


export default function Contact() {
    const classes = useStyles();
    const [state, setState] =useState({
        data:{
            firstname: "",
            email: "",
            messages: "",
        },
    })

    const handleOnChange = ({target}) => {
        const {data} = state;
        data[target.name] = target.value
        setState({data: data});
    };
    

    return (
        <Box className={classes.section} id='Contact'>
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
                            heading: "Contact Me",
                            smallTxt: "Wish to contact me!",
                            description: "Please use the below given form to send me your message"
                        })}
                        <br />
                        <form>
                            <Grid container>
                                <Grid item xs={12} sm={8}></Grid>
                                <TextField
                                    label="firstname"
                                    variant="outlined"
                                    fullWidth={true}
                                    name='firstname'
                                    value={state.data.firstname}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
