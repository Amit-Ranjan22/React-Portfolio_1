import { makeStyles } from '@material-ui/styles';
import { Theme } from '../Theme';
import Image from "../../images/brandBanner.jpg"

export const useStyles = makeStyles(() => ({
    HeaderWrapper:{
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    Headercontainer:{
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        padding: "20px",
        color: Theme.colors.base2,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        fontFamily: "roboto",
    },
    headerTitle: {
        fontSize: "3rem",
        // testAlign: "left"
    },
    headerDesc: {
        fontSize: "2rem",
    },
    navbar:{
        backgroundColor:Theme.colors.base1,
        color: Theme.colors.base2,
    },
    ToolBar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
    },
    navlinks:{
        color: Theme.colors.base2,
    },

    //decorator
    decorator: {
        display: "flex",
        fontWeight: "bolder",
        fontFamily: "roboto",
        position: "relative",
        marginTop: "20px",
        '&:before':{
            width:"45px",
            height: "45px",
            backgroundColor: Theme.colors.primary,
            content: '""',
            borderRadius: "50%",
        },
    },
    decoratorText: {
        lineHeight: "45px",
        position: "absolute",
        left: "25px",
    }
}));
