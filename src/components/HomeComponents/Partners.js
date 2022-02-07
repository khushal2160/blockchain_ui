import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import ChainBooster from "../../assets/images/logo-chainboost@2x.png";
import ChainGuardians from "../../assets/images/logo-chainguardians@2x.png";
import theme from "../../styles/global";

const useStyles = makeStyles((th) => ({
    root: {
        padding: "25px",
        color: "#fff",
        backgroundColor: "#3366CB",
        // width: "100vw"
    },
    headingContainer: {
        display: "flex",
        justifyContent: "center"
    },
    content: {
        textAlign: "center",
        fontFamily: theme.font.body,
        marginTop: -10,
        letterSpacing: .5,
        [th.breakpoints.down("md")]: {
            fontSize: 12,
            maxWidth: "40%"
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 12,
            maxWidth: "100%"
        },
    },
    partners: {
        maxHeight: 75,
        padding: "0 24px",
        [th.breakpoints.down("md")]: {
            maxHeight: 40
        }
    },
    heading: {
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        fontSize: 48,
        textAlign: "center",
        [th.breakpoints.down("md")]: {
            fontSize: 24
        }
    },
    partnerImages: {
        padding: "40px 0"
    }
}));

const Partners = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.headingContainer}>
                <h1 className={classes.heading}>
                    OUR PARTNERS
                </h1>
            </div>
            <div className={classes.headingContainer}>
                <p className={classes.content}>
                    We pride ourselved on creating meaningful partnerships
                    <Hidden smDown>
                        <br />
                    </Hidden>
                    and collaberations which bring added value to our community and players.
                </p>
            </div>
            <div className={`${classes.headingContainer} ${classes.partnerImages}`}>
                <img src={ChainBooster} alt="chain-booster" className={classes.partners} />
                <img src={ChainGuardians} alt="chain-booster" className={classes.partners} />
            </div>
        </div>
    );
};

export default Partners;