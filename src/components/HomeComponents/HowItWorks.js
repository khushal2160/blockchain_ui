import React from "react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";
import SideImage from "../../assets/images/monster-side@2x.png";
import SideImageMobile from "../../assets/images/tree.svg";
import ListItem1 from "../../assets/images/list-item-1@2x.png";
import ListItem2 from "../../assets/images/list-item-2@2x.png";
import ListItem3 from "../../assets/images/list-item-3@2x.png";
import HeroImage from "../../assets/images/Image4.svg";
import theme from "../../styles/global";

const useStyles = makeStyles((th) => ({
    container: {
        padding: "48px 0 152px",
        [th.breakpoints.down("md")]: {
            paddingBottom: 152
        },
        [th.breakpoints.down("sm")]: {
            paddingBottom: 96
        },
    },
    root: {
        display: "flex",
    },
    sideImg: {
        height: 450,
        transform: "scale(1.5)",
        position: "absolute",
        top: 180,
        [th.breakpoints.down("md")]: {
            height: 250,
            transform: "scale(1)",
            top: -50,
            left: "-10%"
        },
        [th.breakpoints.down("sm")]: {
            height: 125,
            top: -18,
            left: "-6%"
        }
    },
    item1Container: {
        background: `url(${ListItem1}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "15px 40px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.heading,
        letterSpacing: 1,
        marginBottom: 15
    },
    item2Container: {
        background: `url(${ListItem1}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "15px 40px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.heading,
        letterSpacing: 1,
        marginBottom: 15
    },
    item3Container: {
        background: `url(${ListItem1}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "15px 40px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.heading,
        letterSpacing: 1,
        marginBottom: 15
    },
    content: {
        color: "#fff",
        fontFamily: theme.font.heading,
        letterSpacing: 2
    },
    heading: {
        fontSize: 48,
        paddingLeft: 20,
        fontFamily: theme.font.heading,
        color: "#fff",
        letterSpacing: 2,
        [th.breakpoints.down("md")]: {
            fontSize: 36
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 24
        },
        textShadow: "1px 2px 3px rgb(0 0 128 / 50%)"
    },
    contentMobile: {
        color: "#d8d8d8",
        fontFamily: theme.font.body,
        fontSize: 24,
        textAlign: "center",
        padding: "25px 0",
        [th.breakpoints.down("md")]: {
            fontSize: 18
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 12
        },
    },
    imgMobile: {
        height: 350,
        [th.breakpoints.down("sm")]: {
            height: 250
        },
        [th.breakpoints.down("xs")]: {
            height: 150
        },
        objectFit: "contain"
    }
}));

const HowItWorks = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Hidden mdDown>
                <Grid container style={{ position: "relative" }}>
                    <img src={SideImage} alt="side-logo" className={classes.sideImg} />
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item className={classes.content}>
                        <Grid container spacing={8}>
                            <Grid item>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h2 className={classes.heading}>
                                        HOW IT <br /> WORKS
                                    </h2>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ marginRight: 50 }}>
                                            <div className={classes.item1Container}>
                                                <span style={{ marginLeft: 9, paddingBottom: 18 }}>1</span>
                                                <span style={{ marginLeft: 40, paddingBottom: 15, fontSize: 12 }}>
                                                    BASICS
                                                </span>
                                            </div>

                                            <div className={classes.item2Container}>
                                                <span style={{ marginLeft: 9, paddingBottom: 18 }}>2</span>
                                                <span style={{ marginLeft: 40, paddingBottom: 15, fontSize: 12 }}>
                                                    BATTLE
                                                </span>
                                            </div>

                                            <div className={classes.item3Container}>
                                                <span style={{ marginLeft: 9, paddingBottom: 18 }}>3</span>
                                                <span style={{ marginLeft: 40, paddingBottom: 15, fontSize: 12 }}>
                                                    TOWER DEFENSE
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={HeroImage} alt="hero-splash" height="350" />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>

            <Hidden lgUp>
                <Grid container style={{ position: "relative" }}>
                    <img src={SideImageMobile} alt="side-logo" className={classes.sideImg} />
                </Grid>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2 className={classes.heading}>
                        HOW IT WORKS
                    </h2>
                    <div className={classes.contentMobile}>
                        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Phasellus varius <br />a tellus porta commodo. 
                        Sed vestibulum, felis at <br /> fermentum volutpat, enim enim vestibulum felis.
                    </div>
                    <div>
                        <img src={HeroImage} alt="hero-splash" className={classes.imgMobile} />
                    </div>
                </div>
            </Hidden>
        </div>
    );
};

export default HowItWorks;
