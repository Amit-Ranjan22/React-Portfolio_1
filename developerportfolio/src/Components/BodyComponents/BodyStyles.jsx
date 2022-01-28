import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: Theme.colors.base1,
        padding: theme.spacing(10, 0, 8, 0),
    },
    sectionDark: {
        backgroundColor: Theme.colors.primary1,
        padding: theme.spacing(10, 0, 8, 0),
    },

    //common
    divider: {
        width: "64px",
        height: "4px",
        backgroundColor: Theme.colors.primary,      
    },

    responsiveImg: {
        width: "100%",
        height: "auto",
    },
    sectionHeadingCont: {
        padding: theme.spacing(1),
        color: Theme.colors.base2,
    },
    sectionHeading: {
        color: Theme.colors.base2,
        margin: theme.spacing(1, 0),
    },
    // AvatarCont: {
    //     "element.style": {
    //         display: "flex",
    //         flexFlow: "row",
    //         justifyContent: "center",
    //         alignItems: "center"
    //     }
    // },
    AvatarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },
    avatar:{
        backgroundColor:Theme.colors.primary,
        color:Theme.colors.base2,
    },
    MediaText:{
        color: Theme.colors.base2,
    }
}));