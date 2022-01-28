import { Box, Container, Grid, Hidden, TextField } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';
import image from "../../images/contactus.jpg"
import { RenderSectionHeading } from '../common/commonComponent';
import { useState } from 'react';
import { RenderInputText } from '../common/FormComponent';


export default function Contact() {
    const classes = useStyles();
    const [state, setState] = useState({
        data: {
            firstname: "",
            email: "",
            messages: "",
        },
        errors:{}
    })

    const handleOnChange = ({ target }) => {
        const { data, errors } = state;
        //setting error
        target.value.length < 3 ? errors[target.name] = `${target.name} must have at-least 3 character` : (errors[target.name] = "");

        data[target.name] = target.value
        setState({ data: data, errors: errors });
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
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center">
                                <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>
                                    {RenderInputText({
                                        label: "First Name",
                                        name: "firstName",
                                        state: state,
                                        onChange: handleOnChange,
                                    })}
                                </Grid>
                                <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>
                                    {RenderInputText({
                                        label: "Email",
                                        name: "email",
                                        state: state,
                                        onChange: handleOnChange,
                                    })}
                                </Grid>
                                <Grid item xs={12} sm={10} style={{marginBottom:"16px"}}>
                                    {RenderInputText({
                                        label: "Messages",
                                        name: "messages",
                                        state: state,
                                        onChange: handleOnChange,
                                        multiline: true,
                                        rows: 5,
                                    })}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
