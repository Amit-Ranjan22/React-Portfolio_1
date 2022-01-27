import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: Theme.colors.base1,
        padding: theme.spacing(10, 0, 8, 0),
    }
}));