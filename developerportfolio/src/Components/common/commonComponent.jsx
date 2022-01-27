import { Box, Typography } from "@material-ui/core"
import { useStyles } from "../HeaderComponents/HeaderStyles"


export const Decorator = ({ label, withIcon, Icon }) => {
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

export const RenderSectionHeading = () => {
    
}