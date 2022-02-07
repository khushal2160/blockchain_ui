import React from "react";
import { makeStyles } from "@material-ui/core";
import Image1 from "../../assets/images/Our-Monsters.png";
import Image2 from "../../assets/images/mobile-our-monsters.png";
import MonsterBanner from "../../assets/images/monster-banner@2x.png";
import theme from "../../styles/global";
import ViewButton from "../../assets/images/view-btn.png";
import "../../styles/responsive.css";
import "../../styles/style.css";

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
        fontSize: 48,
        letterSpacing: 2,
        [th.breakpoints.down("md")]: {
            fontSize: 34
        },
        [th.breakpoints.down("sm")]: {
            fontSize: 28
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 18
        },
    },
    bigHeading: {
        fontFamily: theme.font.heading,
        fontSize: 68,
        letterSpacing: 2,
        [th.breakpoints.down("md")]: {
            fontSize: 48
        },
        [th.breakpoints.down("sm")]: {
            fontSize: 36
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 20
        },
    },
    content: {
        fontFamily: theme.font.body,
        // letterSpacing: 1,
        padding: "30px 0",
        // [th.breakpoints.down("md")]: {
        //     fontSize: 12,
        //     padding: "10px 0",
        // },
        [th.breakpoints.down("sm")]: {
            fontSize: 12,
            padding: "10px 0",
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 5.5,
            padding: "10px 0",
        },
    },
    viewButtonContainer: {
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
    },
    viewButtonContainer1: {
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
        cursor: "pointer",
        color: "#fff",
        position: "absolute",
        top: "25%",
        left: "4%",
        zIndex: 99,
        height: 48,
        [th.breakpoints.down("sm")]: {
            fontSize: 12,
            padding: "10px 0",
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 5.5,
            padding: "10px 0",
        },
    },
    ourMonsterBanner: {
        position: 'relative',
        width: 706,
        height: 687,
        left: 683,
    }
}));

const YourMonsters = () => {
    const classes = useStyles();
    return (
        <section className="our_monsters_wrap">
            <div className="container">
                <div className="img_wrapper">
                    <div>
                        <img src={ViewButton} className={`${classes.viewButtonContainer1} view_btn1_wrapper`} alt="token-button" />
                    </div>
                    <img src={Image1} className="main_bg" alt="banner" />
                    <img src={Image2} className="responsive_bg" alt="banner" style={{ display: "none" }} />
                    <div className="description_box_wrapper">
                        <span className={`${classes.smallHeading} smallheading`}>YOUR</span>
                            <br />
                        <span className={classes.bigHeading}>MONSTERS..</span>
                        
                        <p className={`${classes.content} description`}>
                            BMH Monsters have provably
                            <br />
                            unique rarities, traits and elemental types,
                            <br />
                            with over 300 varialbles to catch
                        </p>
                        <div className={`view_btn`}>
                            <img src={ViewButton} className={classes.viewButtonContainer} alt="banner" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default YourMonsters;