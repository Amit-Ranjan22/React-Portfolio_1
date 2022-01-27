import { Box, Typography } from "@material-ui/core"
import { useStyles } from "../HeaderComponents/HeaderStyles"


export const Decorator = ({ label, withIcon, Icon, styles }) => {
    const classes = useStyles();
    return (
        <Box className={classes.decorator}>
            <Typography variant="span" className={classes.decoratorText}>
                {label}
            </Typography>
            {withIcon ? (
                <Typography variant="span" className={classes.arrow}>
                    {Icon}
                </Typography>
            ) : null}
        </Box>
    );
};

export const Divider = () => {
    const classes = useStyles();
    return <Typography variant="span" className={classes.divider}></Typography>
}

export const RenderSectionHeading = ({smallTxt, heading}) => {
    //decorator
    //heading
    //line
    //Description
    Decorator({label:smallTxt, withIcon:false });
    <Typography variant="h4" >{heading}</Typography>
}