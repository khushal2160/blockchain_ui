import React from "react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";
import shape from "../assets/images/combined_shape.svg";
import Logo from "../assets/images/logo@2x.png";
import theme from "../styles/global";

const useStyles = makeStyles((th) => ({
    root: {
        padding: "75px",
        // backgroundColor: theme.palette.primary.footer,
        background: `url(${shape})`,
        display: "flex",
        [th.breakpoints.down("md")]: {
            padding: "25px 200px"
        },
        [th.breakpoints.down("sm")]: {
            padding: "25px 15px"
        },
        [th.breakpoints.up("xl")]: {
            justifyContent: "center",
        },
    },
    footerLogo: {
        maxHeight: 125,
        [th.breakpoints.down("md")]: {
            maxHeight: 50,
            width: 75
        }
    },
    menuItem: {
        margin: "0 10px",
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        fontSize: 14,
        color: "#fff",
        [th.breakpoints.down("md")]: {
            margin: "5px 0",
            fontSize: 8
        }
    },
    textMenus: {
        border: "1px solid rgb(255 255 255 / 40%)",
        padding: "15px 25px",
        borderRadius: 24,
        boxShadow: "1px 2px 8px 1px rgb(27 70 153)",
        cursor: "pointer",
        [th.breakpoints.down("md")]: {
            padding: "8px 5px",
        }
    },
    menuItemContainer: {
        display: "flex",
        flexDirection: "column",
        [th.breakpoints.down("md")]: {
            padding: "0 10px"
        }
    },
    menuChildren: {
        color: "#fff",
        fontFamily: theme.font.body,
        margin: "0 auto",
        letterSpacing: 1,
        fontSize: 14,
        marginTop: 40,
        [th.breakpoints.down("md")]: {
            marginTop: 15,
            fontSize: 12
        }
    },
    logoContainer: {
        margin: "0 10px 0 10px",
        [th.breakpoints.down("md")]: {
            marginRight: 5,
            display: "flex",
            // alignItems: "center"
        }
    },
    mobileMenus: {
        display: "flex",
        [th.breakpoints.down("md")]: {
            paddingLeft: 10
        }
    },
    childrenMenu: {
        cursor: "pointer"
    }
}));

const Footer = () => {
    const classes = useStyles();
    const menus = [
        {
            title: "MONSTERS",
            children: ["BSMC monsters", "Battle stats", "PVP"]
        },
        {
            title: "OUR GAME",
            children: ["How to play", "The Basics"]
        },
        {
            title: "ABOUT US",
            children: ["Our Team", "Partners"]
        },
        {
            title: "BCMC TOKEN",
            children: ["Tokenomics", "Token Utility"]
        },
        {
            title: "GET IN TOUCH",
            children: []
        }
    ];
    const mobileMenus = [
        {
            title: "MONSTERS",
            children: ["BSMC monsters", "Battle stats", "PVP"]
        },
        {
            title: "ABOUT US",
            children: ["Our Team", "Partners"]
        },
        {
            title: "OUR GAME",
            children: ["How to play", "The Basics"]
        },
        {
            title: "BCMC TOKEN",
            children: ["Tokenomics", "Token Utility"]
        },
        {
            title: "GET IN TOUCH",
            children: []
        }
    ];
    return (
        <div className={classes.root}>
            <Hidden xsDown>
                <div className={classes.logoContainer}>
                    <img src={Logo} className={classes.footerLogo} alt="footer-logo" />
                </div>
                {
                    menus.map((menu, index) => {
                        return (
                            <div className={classes.menuItemContainer} key={index}>
                                <div>
                                    <span className={`${classes.menuItem} ${classes.textMenus}`}>
                                        {menu.title}
                                    </span>
                                </div>
                                <div className={classes.menuChildren}>
                                {
                                    menu.children.map((child, i) => (
                                        <div className={classes.childrenMenu} key={i}>
                                            {child}
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </Hidden>
            <Hidden smUp>
                <div className={classes.logoContainer}>
                    <img src={Logo} className={classes.footerLogo} alt="footer-logo" />
                </div>
                <Grid container className={classes.mobileMenus}>
                    {
                        mobileMenus.map((menu, index) => (
                            <Grid item key={index} style={{ margin: "0 15px 15px" }}>
                                <span className={`${classes.menuItem} ${classes.textMenus}`}>
                                    {menu.title}
                                </span>
                            </Grid>
                        ))
                    }
                </Grid>
            </Hidden>
        </div>
    );
};

export default Footer;