import React, { useState } from "react";
import { AppBar, Drawer, Grid, Hidden, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import MenuImg from "../assets/images/menu-icon.png";
import CloseImg from "../assets/images/close.png";
import Logo from "../assets/images/logo@2x.png";
import PlayBG from "../assets/images/button-header-play@2x.png";
import RegisterBG from "../assets/images/button-header-register@2x.png";
import MonsterIcon from "../assets/images/monster-icon@2x.png";
import BCMCIcon from "../assets/images/bcmc-token@2x.png";
import AccountIcon from "../assets/images/account@2x.png";
import theme from "../styles/global";

const useStyles = makeStyles((th) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        padding: "0px 75px 20px",
        display: "block",
        [th.breakpoints.down("md")]: {
            padding: "20px"
        }
    },
    title: {
        maxHeight: 125,
        [th.breakpoints.down("md")]: {
            marginTop: -10,
            paddingTop: "20%"
        }
    },
    playButtonContainer: {
        background: `url(${PlayBG}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "unset",
        padding: "20px 40px",
        cursor: "pointer",
        [th.breakpoints.up("md")]: {
            height: 75
        },
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.05)",
        }
    },
    registerButtonContainer: {
        backgroundImage: `url(${RegisterBG})`,
        backgroundSize: "cover",
        backgroundPosition: "unset",
        padding: "20px 25px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            transform: "scale(1.05)",
            mixBlendMode: "hard-light"
        },
        [th.breakpoints.down("sm")]: {
            padding: "23px 25px",
        },
    },
    menusContainer: {
        display: "flex",
        alignItems: "center",
        marginLeft: "1rem"
    },
    menuItem: {
        margin: "0 10px",
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        fontSize: 14,
        transition: "0.3s",
    },
    menuItemTop: {
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        fontSize: 14,
        transition: "0.3s",
    },
    mobileMenuItem: {
        margin: "0 10px",
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        fontSize: 24,
        color: "#fff"
    },
    buttonTextMenu: {
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        fontSize: 18,
        color: "#fff",
        textShadow: "1px 2px 4px rgb(0 0 128 / 50%)"
    },
    textMenus: {
        border: "1px solid rgb(255 255 255 / 40%)",
        padding: "15px 20px",
        borderRadius: 24,
        boxShadow: "1px 2px 8px 1px rgb(0 0 0 / 20%)",
        cursor: "pointer",
        "&:hover": {
            boxShadow: "1px 2px 8px 3px rgb(0, 0, 0 / 0.2) !important",
            backgroundColor: theme.palette.primary.hover
        }
    },
    textTop: {
        padding: "7px 20px",
        // boxShadow: "1px 2px 8px 1px rgb(0 0 0 / 20%)",
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
            boxShadow: "1px 2px 8px 3px rgb(0, 0, 0 / 0.2) !important",
            backgroundColor: theme.palette.primary.hover
        }
    },
    iconStyle: {
        height: 20
    },
    drawer: {
        [th.breakpoints.up('md')]: {
          width: "100%",
          flexShrink: 0,
        },
      },
    appBar: {
        zIndex: th.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: th.spacing(2),
        [th.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: "100%",
        backgroundColor: "#1b4699",
        overflowX: "hidden"
    },
    content: {
        flexGrow: 1,
        padding: th.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
        display: "flex",
        justifyContent: "center"
    },
    mobileLogo: {
        maxHeight: 100,
        marginTop: -25
    }
}));

const Appbar = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <AppBar position="static" elevation={0} style={{ backgroundColor: "transparent" }}>
            <Toolbar className={classes.toolbar}>
                <Hidden mdDown>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <span className={`${classes.menuItemTop} ${classes.textTop}`} style={{ borderLeft: "1px solid rgb(255 255 255 / 40%)", borderBottom: "1px solid rgb(255 255 255 / 40%)", borderBottomLeftRadius: 16 }}>
                            <img src={BCMCIcon} className={classes.iconStyle} alt="bcmc" />
                            &nbsp;
                            200 BCMC 
                            &nbsp;
                            <span style={{ textDecoration: "underline", color: "#ed4a27", fontFamily: theme.font.body }}>(TOPUP)</span>
                        </span>
                        <span className={`${classes.menuItemTop} ${classes.textTop}`} style={{ borderLeft: "1px solid rgb(255 255 255 / 40%)", borderRight: "1px solid rgb(255 255 255 / 40%)", borderBottom: "1px solid rgb(255 255 255 / 40%)" }}>
                            <img src={MonsterIcon} className={classes.iconStyle} alt="monster" />
                            &nbsp;
                            20 MON
                            &nbsp;
                            <span style={{ textDecoration: "underline", color: "#ed4a27", fontFamily: theme.font.body }}>(TOPUP)</span>
                        </span>
                        <span className={`${classes.menuItemTop} ${classes.textTop}`}  style={{ borderRight: "1px solid rgb(255 255 255 / 40%)", borderBottom: "1px solid rgb(255 255 255 / 40%)", borderBottomRightRadius: 16 }}>
                            <img src={AccountIcon} className={classes.iconStyle} alt="account" />
                            &nbsp;
                            <span>
                                JAKEMON
                                <br />
                                <span style={{ fontFamily: theme.font.body, color: "#dfdfdf", letterSpacing: 0 }}>
                                    jake@BCMH.io
                                </span>
                            </span>
                            &nbsp;
                            <span style={{ textDecoration: "underline", color: "#ed4a27", fontFamily: theme.font.body }}>(EDIT)</span>
                        </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <img src={Logo} alt="logo" className={classes.title} />
                        <div className={classes.menusContainer}>
                            <span className={`${classes.menuItem} ${classes.textMenus}`}>
                                MONSTERS
                            </span>
                            <span className={`${classes.menuItem} ${classes.textMenus}`}>
                                OUR GAME
                            </span>
                            <span className={`${classes.menuItem} ${classes.textMenus}`}>
                                HOW TO PLAY
                            </span>
                            <span className={`${classes.menuItem} ${classes.textMenus}`}>
                                BCMC TOKEN
                            </span>
                            <span className={`${classes.menuItem}`} style={{ marginTop: 10 }}>
                                <Grid container justifyContent="flex-end">
                                    <Grid item className={classes.playButtonContainer}>
                                        <span style={{ paddingBottom: 5, fontSize: 16 }}>
                                            &nbsp;PLAY&nbsp;
                                        </span>
                                    </Grid>
                                    <Grid item className={classes.registerButtonContainer}>
                                        <span style={{ paddingBottom: 5, fontSize: 16 }}>
                                            REGISTER
                                        </span>
                                    </Grid>
                                </Grid>
                            </span>
                        </div>
                    </div>
                </Hidden>
                <Hidden lgUp>
                    <Grid container justifyContent="flex-end" style={{ position: "relative" }}>
                        <img src={MenuImg} alt="menu-logo" style={{ color: "#fff", position: "absolute", top: "2vh", right: "4%", height: 20 }} onClick={handleDrawerToggle} />
                    </Grid>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <Grid container justifyContent="flex-end" style={{ position: "absolute", top: "4%", right: "7%" }}>
                            <Grid item>
                                <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                                    <img src={CloseImg} style={{ color: "#fff", height: 20, position: "absolute", top: "2%", right: "6%" }} alt="close-logo" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" style={{ height: "inherit", paddingBottom: 24 }} justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <img src={Logo} className={classes.title} alt="logo" />
                            </Grid>
                            <Grid item container direction="column" justifyContent="space-between" alignItems="center" spacing={7}>
                                <Grid item>
                                    <span className={classes.mobileMenuItem}>
                                        MONSTERS
                                    </span>
                                </Grid>
                                <Grid item>
                                    <span className={classes.mobileMenuItem}>
                                        OUR GAME
                                    </span>
                                </Grid>
                                <Grid item>
                                    <span className={classes.mobileMenuItem}>
                                        HOW TO PLAY
                                    </span>
                                </Grid>
                                <Grid item>
                                    <span className={classes.mobileMenuItem}>
                                        BCMC TOKEN
                                    </span>
                                </Grid>
                            </Grid>
                            <Grid item container justifyContent="center" style={{ paddingBottom: 10 }}>
                                <Grid item className={classes.playButtonContainer}>
                                    <span className={classes.buttonTextMenu}>
                                        &nbsp;PLAY&nbsp;
                                    </span>
                                </Grid>
                                <Grid item className={classes.registerButtonContainer}>
                                    <span className={classes.buttonTextMenu}>
                                        REGISTER
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Drawer>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Appbar;
