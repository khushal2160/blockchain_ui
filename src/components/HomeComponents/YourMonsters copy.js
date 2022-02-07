import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Image1 from "../../assets/images/your-monster-list@2x.png";
import Image2 from "../../assets/images/shield-door@2x.png";
import Image3 from "../../assets/images/monster-hero-child@2x.png";
import BranchImg from "../../assets/images/vine@2x.png";
import TokenomicsButton from "../../assets/images/button-header-register@2x.png";
import theme from "../../styles/global";

const useStyles = makeStyles((th) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        padding: "20px 0"
    },
    img2: {
        marginTop: -110,
        marginLeft: -140,
        height: 675
    },
    img1: {
        height: 475
    },
    img1Container: {
        position: "relative"
    },
    absoluteButton: {
        top: 100,
        left: 45,
        position: "absolute",
        color: "#fff"
    },
    img3Container: {
        display: "flex",
        flexDirection: "column-reverse",
        position: "relative"
    },
    img3: {
        height: 350,
        marginLeft: -260
    },
    img2Container: {
        position: "relative",
        display: "flex",
        flexDirection: "column-reverse"
    },
    branchImg: {
        height: 75,
        width: 250,
        top: -50,
        right: 100,
        position: "absolute"
    },
    smallHeading: {
        fontFamily: theme.font.heading,
        fontSize: 32,
        letterSpacing: 2
    },
    bigHeading: {
        fontFamily: theme.font.heading,
        fontSize: 40,
        letterSpacing: 2
    },
    content: {
        fontFamily: theme.font.body,
        letterSpacing: 1
    },
    viewButtonContainer: {
        background: `url(${TokenomicsButton}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "15px 25px",
        cursor: "pointer",
        [th.breakpoints.up("md")]: {
            width: 100
        },
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.heading,
        letterSpacing: 1
    },
}));

const YourMonsters = () => {
    const classes = useStyles();
    return (
        <Hidden>
            <div className={classes.root}>
                <div className={classes.img1Container}>
                    <img src={Image1} alt="view-all" className={classes.img1} />
                    <div className={`${classes.viewButtonContainer} ${classes.absoluteButton}`}>
                        <span style={{ paddingBottom: 20, margin: "auto" }}>
                            VIEW ALL
                        </span>
                    </div>
                </div>
                <div className={classes.img2Container}>
                    <img src={Image2} alt="shield-door" className={classes.img2} />
                    <img src={BranchImg} alt="vine" className={classes.branchImg} />
                    <div style={{ position: "absolute", top: 65, color: "#fff" }}>
                        <div>
                            <span className={classes.smallHeading}>YOUR</span>
                            <br />
                            <span className={classes.bigHeading}>MONSTERS</span>

                            <p className={classes.content}>
                                BMH Monsters have provably
                                <br />
                                unique rarities, traits and elemental types,
                                <br />
                                with over 300 varialbles to catch
                            </p>

                            <div className={classes.viewButtonContainer}>
                                <span style={{ paddingBottom: 20, margin: "auto" }}>
                                    VIEW ALL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.img3Container}>
                    <img src={Image3} alt="chilren" className={classes.img3} />
                </div>
            </div>
        </Hidden>
    );
};

export default YourMonsters;