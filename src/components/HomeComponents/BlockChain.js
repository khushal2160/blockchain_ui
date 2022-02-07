import React from "react";
import { Grid, Hidden, makeStyles, Box } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BCMCLogo from "../../assets/images/bcmc-token@2x.png";
import BCMCMain from "../../assets/images/Group19.png";
import TokenomicsButton from "../../assets/images/button-large@2x.png";
import CatchImg from "../../assets/images/icon-potion@2x.png";
import ExtraLifeImg from "../../assets/images/icon-extra-life@2x.png";
import shape from "../../assets/images/combined_shape.svg";
import theme from "../../styles/global";
import ActiveIndicator from "../../assets/images/pip-active@2x.png";
import InactiveIndicator from "../../assets/images/pip-inactive@2x.png";

const useStyles = makeStyles((th) => ({
    rootContainer: {
        // backgroundColor: theme.palette.primary.footer,
        background: `url(${shape})`,
        backgroundSize: "contain",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        paddingBottom: 100,
        [th.breakpoints.down("md")]: {
            backgroundSize: "cover"
        }
    },
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px 35px"
    },
    buttonContainer: {
        background: `url(${TokenomicsButton}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px 80px",
        cursor: "pointer",
        [th.breakpoints.up("md")]: {
            height: 75
        },
        [th.breakpoints.up("xs")]: {
            height: 50,
            padding: "20px 50px"
        },
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
        transform: "scale(1.05)",
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.heading,
        letterSpacing: 1,
        fontSize: 10,
        margin: "25px 0"
    },
    logoContainer: {
        marginTop: -110,
        [th.breakpoints.down("sm")]: {
            marginTop: -70   
        }
    },
    logo: {
        maxHeight: 175,
        [th.breakpoints.down("sm")]: {
            maxHeight: 90    
        }
    },
    heading: {
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        // padding: "0 44rem",
        textAlign: "center",
        fontSize: 48,
        [th.breakpoints.down("sm")]: {
            fontSize: 24    
        }
    },
    contentContainer: {
        fontFamily: theme.font.body,
        // padding: "0 45rem",
        color: "#dfdfdf",
        letterSpacing: .5,
        textAlign: "center",
        [th.breakpoints.down("xl")]: {
            maxWidth: "37%"
        },
        [th.breakpoints.down("lg")]: {
            maxWidth: "41%"
        },
        [th.breakpoints.down("md")]: {
            maxWidth: "50%"
        },
        [th.breakpoints.down("sm")]: {
            maxWidth: "66%"
        },
        [th.breakpoints.down("xs")]: {
            maxWidth: "100%",
            fontSize: 14
        },
        maxWidth: "40%"
    },
    cartItem: {
        border: "1px dashed #dfdfdf",
        backgroundColor: "#073283",
        borderRadius: 24
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    itemLogo: {
        marginTop: -60,
        [th.breakpoints.down("xs")]: {
            marginTop: -45
        },
    },
    cardContainer: {
        paddingTop: "1rem"
    },
    cardContent: {
        textAlign: "center",
        fontFamily: theme.font.body,
        letterSpacing: 1,
        color: "#dfdfdf"
    },
    itemHeading: {
        fontFamily: theme.font.heading,
        letterSpacing: 2
    },
    indicatorItem: {
        height: 35,
        [th.breakpoints.down("sm")]: {
            height: 25
        }
    },
    buttontext: {
        fontSize: 15,
        [th.breakpoints.down("md")]: {
            fontSize: 12
        },
        [th.breakpoints.down("xs")]: {
            fontSize: 9
        }
    }
}));

const CustomDot = ({ ...rest }) => {
    const {
      active,
      onClick
    } = rest;
    const classes = useStyles();
    return (
      <Box onClick={onClick} style={{ cursor: "pointer", margin: 1 }}>
        {
          active ? (
            <img src={ActiveIndicator} alt="indicator" className={classes.indicatorItem} />
          ) : (
            <img src={InactiveIndicator} alt="indicator" className={classes.indicatorItem} />
          )
        }
      </Box>
    );
  };

const BlockChain = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    const classes = useStyles();
    return (
        <div className={classes.rootContainer}>
            <div className={classes.root}>
                <div className={classes.logoContainer}>
                    <img src={BCMCMain} className={classes.logo} alt="bcmc-logo" />
                </div>
                <div className={classes.headingContainer}>
                    <h1 className={classes.heading}>
                        BLOCKCHAIN <br /> MONSTER COIN
                    </h1>
                </div>
                <div className={classes.contentContainer}>
                    BCMC is an ERC-20 token which users can play to earn and spend in-game. 
                    Users are free to move BCMC onto any chain without the need for bridging their tokens
                    via 3rd party platforms.
                </div>
                <div className={classes.buttonContainer}>
                    <span style={{ textShadow: "1px 2px 2px #03200c"}} className={classes.buttontext}>
                        VIEW TOKENOMICS
                    </span>
                </div>
            </div>
            <Hidden smDown>
                <div className={classes.cardContainer}>
                    <Grid container justifyContent="space-evenly">
                        <Grid item className={classes.cartItem} style={{ padding: "25px 65px" }}>
                            <div className={classes.card}>
                                <img src={CatchImg} className={classes.itemLogo} height="75" alt="catch-logo" />
                                <h2 className={classes.itemHeading}>
                                    CATCH POWER
                                </h2>
                                <p className={classes.cardContent}>
                                    Catch rare monsters and <br /> boost your chances of <br /> success!
                                </p>
                            </div>
                        </Grid>

                        <Grid item className={classes.cartItem} style={{ padding: "25px 60px" }}>
                            <div className={classes.card}>
                                <img src={ExtraLifeImg} className={classes.itemLogo} height="75" alt="catch-logo" />
                                <h2 className={classes.itemHeading}>
                                    EXTRA LIFE
                                </h2>
                                <p className={classes.cardContent}>
                                    Prevent your monster from <br /> dying or losing experience <br /> with an extra life.
                                </p>
                            </div>
                        </Grid>

                        <Grid item className={classes.cartItem} style={{ padding: "25px 50px" }}>
                            <div className={classes.card}>
                                <img src={BCMCLogo} className={classes.itemLogo} height="75" alt="catch-logo" />
                                <h2 className={classes.itemHeading}>
                                    GOVERANANCE
                                </h2>
                                <p className={classes.cardContent}>
                                    Cast your vote on ecosystem <br /> design and reward balancing.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Hidden>

            <Hidden mdUp>
                <div>
                    <Carousel
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        showDots
                        customDot={<CustomDot />}
                    >
                        <div className={classes.cartItem} style={{ padding: "14px", margin: "40px 20px" }}>
                            <div className={classes.card}>
                                <img src={CatchImg} className={classes.itemLogo} height="75" alt="catch-logo" />
                                <h2 className={classes.itemHeading}>
                                    CATCH POWER
                                </h2>
                                <p className={classes.cardContent}>
                                    Catch rare monsters and <br /> boost your chances of <br /> success!
                                </p>
                            </div>
                        </div>

                        <div className={classes.cartItem} style={{ padding: "14px", margin: "40px 20px" }}>
                            <div className={classes.card}>
                                <img src={ExtraLifeImg} className={classes.itemLogo} height="75" alt="catch-logo" />
                                <h2 className={classes.itemHeading}>
                                    EXTRA LIFE
                                </h2>
                                <p className={classes.cardContent}>
                                    Prevent your monster from <br /> dying or losing experience <br /> with an extra life.
                                </p>
                            </div>
                        </div>

                        <div className={classes.cartItem} style={{ padding: "14px", margin: "40px 20px" }}>
                            <div className={classes.card}>
                                <img src={BCMCLogo} className={classes.itemLogo} height="75" alt="catch-logo" />
                                <h2 className={classes.itemHeading}>
                                    GOVERANANCE
                                </h2>
                                <p className={classes.cardContent}>
                                    Cast your vote on ecosystem <br /> design and reward balancing. <br /> &nbsp;
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </Hidden>
        </div>
    );
};

export default BlockChain;