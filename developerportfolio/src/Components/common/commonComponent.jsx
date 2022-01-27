import { Box, Typography } from "@material-ui/core"
import { useStyles } from "../HeaderComponents/HeaderStyles"
import { useStyles as BodyStyles } from "../BodyComponents/BodyStyles";

export const Decorator = ({ label, withIcon, Icon, styles }) => {
    const classes = useStyles();
    return (
        <Box className={classes.decorator} style={styles}>
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

export const Divider = ({style}) => {
    const classes = BodyStyles();
    // return <Typography variant="span" className={classes.divider}></Typography>
    return <div className={classes.divider} style={style}></div>;
}

export const RenderSectionHeading = ({ smallTxt, heading, description, alignCenter }) => {
    const classes = BodyStyles();
    return (
        <Box className={classes.sectionHeadingCont}>
            {Decorator({
                label: smallTxt,
                withIcon: false,
                styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
            })}
            <Typography
                variant="h4"
                align={alignCenter ? "center" : "left"}
                className={classes.sectionHeading}>
                {heading}
            </Typography>
            {/* {Divider()} */}
            {Divider({
        style: alignCenter ? { margin: "16px auto" } : { margin: "16px 0px" },
      })}

            <Typography
                variant="body1"
                component="h6"
                align={alignCenter ? "center" : "left"}
                className={classes.sectionDesc}>
                {description}
            </Typography>
        </Box>
    )
}