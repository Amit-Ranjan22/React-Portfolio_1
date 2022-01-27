import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: Theme.colors.base1,
        padding: theme.spacing(10, 0, 8, 0),
    },

    //common
    divider:{
        width: "65px",
        height: "4px",
        backgroundColor: Theme.colors.primary,
    },

    responsiveImg:{
        width: "100%",
        height: "auto",
    },
}));