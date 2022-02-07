import React from "react";
import { Box, Grid, Hidden, makeStyles, Table, Paper } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import theme from "../../styles/global";
import Item1 from "../../assets/images/cross-chain-bg@2x.png";
import Item3 from "../../assets/images/cross-chain-bg2@2x.png";
import Item2 from "../../assets/images/image-2@2x.png";
import PlayNowBG from "../../assets/images/button-wide-secondary@2x.png";
import Divider from "../../assets/images/Divider.svg";
import ActiveIndicator from "../../assets/images/pip-active@2x.png";
import InactiveIndicator from "../../assets/images/pip-inactive@2x.png";
import Monster1 from "../../assets/images/monster1@2x.png";
import Monster2 from "../../assets/images/monster2@2x.png";
import Monster3 from "../../assets/images/monster3@2x.png";
import Monster4 from "../../assets/images/monster4@2x.png";
import Bitmap from "../../assets/images/bitmap@2x.png";

const useStyles = makeStyles((th) => ({
    rootContainer: {
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        paddingBottom: 100
    },
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 25
    },
    buttonContainer: {
        background: `url(${PlayNowBG}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "15px 40px",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
            transform: "scale(1.07)",
        },
        transform: "scale(1.05)",
        display: "flex",
        alignItems: "center",
        fontFamily: theme.font.heading,
        letterSpacing: 1
    },
    logoContainer: {
        marginTop: -110
    },
    logo: {
        maxHeight: 175
    },
    heading: {
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        // padding: "0 44rem",
        textAlign: "center",
        fontSize: 48,
        [th.breakpoints.down("sm")]: {
            fontSize: 24
        },
        textShadow: "1px 2px 3px rgb(0 0 128 / 50%)"
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    cardContainer: {
        paddingTop: "1rem"
    },
    cardContent: {
        textAlign: "center",
        fontFamily: theme.font.body,
        // letterSpacing: 1,
        color: "#dfdfdf"
    },
    itemHeading: {
        fontFamily: theme.font.heading,
        letterSpacing: 2,
        textAlign: "center"
    },
    playContainer: {
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${Divider})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    imgDesktop: {
        height: 300
    },
    monsterImgDesktop: {
        height: 275
    },
    indicatorItem: {
        height: 35,
        [th.breakpoints.down("sm")]: {
            height: 25
        }
    },
    blockhashedContain: {
        position: 'relative',
        marginTop: 36
    },
    monsterContain: {
        position: 'absolute',
        right: 24,
        top: 5
    },
    monsterPaper: {
        height: 'auto',
        maxWidth: 110,
        background: 'transparent',
        boxShadow: 'unset'
    },
    imgContent: {
        width: "100%",
        height: "auto",
      },
      crossChainBg: {
        position: 'relative'
      },
      crossChainContent: {
        top: 59,
        left: 62,
        position: 'absolute',
        maxWidth: 200,
        height: 'auto'
    },
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

const DNABlockChain = () => {
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
            <div className={classes.headingContainer}>
                <h1 className={classes.heading}>
                   THE DNA OF <br /> EVERY BLOCKCHAIN
                </h1>
            </div>
            <Hidden smDown>
                <div className={classes.cardContainer}>
                    <Grid container justifyContent="center">
                        <Grid item className={classes.cartItem} style={{ padding: "25px 65px" }}>
                            <div className={classes.card}>
                                <div className={classes.crossChainBg}>
                                    <div className={classes.crossChainContent}>
                                        <img className={classes.imgContent} src={Bitmap}/>
                                    </div>
                                    <img src={Item1} className={`${classes.itemLogo} ${classes.imgDesktop}`} alt="catch-logo" />
                                </div>
                                <h2 className={classes.itemHeading}>
                                    LIFE <br /> CROSS-CHAIN
                                </h2>
                                <p className={classes.cardContent}>
                                    BMH is a truly multi-chain <br /> enabled game. Life doesn't exist <br /> anywhere else.
                                </p>
                            </div>
                        </Grid>

                        <Grid item className={classes.cartItem} style={{ padding: "25px 60px" }}>
                            <div className={classes.card}>
                                <div className={classes.blockhashedContain}>
                                    <div className={classes.monsterContain}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6} className={classes.pb0}>
                                                <Paper className={classes.monsterPaper}>
                                                    <img className={classes.imgContent}  src={Monster1} />
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6} className={classes.pb0}>
                                                <Paper className={classes.monsterPaper}>
                                                <img className={classes.imgContent} src={Monster2} />
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6} className={classes.pt0}>
                                                <Paper className={classes.monsterPaper}>
                                                    <img className={classes.imgContent}  src={Monster3} />
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6} className={classes.bt0}>
                                                <Paper className={classes.monsterPaper}>
                                                <img className={classes.imgContent} src={Monster4} />
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <img src={Item2} className={`${classes.itemLogo} ${classes.monsterImgDesktop}`} alt="catch-logo" />
                                </div>
                                <h2 className={classes.itemHeading}>
                                    BLOCKHASHES AS <br /> THE DNA
                                </h2>
                                <p className={classes.cardContent}>
                                    With each new block a new <br /> monster is born. Each unique <br /> hash is the hearbeat of your <br /> monster.
                                </p>
                            </div>
                        </Grid>

                        <Grid item className={classes.cartItem} style={{ padding: "25px 50px" }}>
                            <div className={classes.card}>
                                <div className={classes.crossChainBg}>
                                    <div className={classes.crossChainContent}>
                                        <img className={classes.imgContent} src={Bitmap}/>
                                    </div>
                                    <img src={Item3} className={`${classes.itemLogo} ${classes.imgDesktop}`} alt="catch-logo" />
                                </div>
                                {/* <img src={Item3} className={`${classes.itemLogo} ${classes.imgDesktop}`} alt="catch-logo" /> */}
                                <h2 className={classes.itemHeading}>
                                    EXPLORE THE <br /> ON-CHAIN WORLD
                                </h2>
                                <p className={classes.cardContent}>
                                    Battle and catch <br /> monsters by traversing <br /> the on-chain world.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Hidden>
            <Hidden smDown>
                <div className={classes.playContainer}>
                    <div className={classes.buttonContainer}>
                        <span>
                            PLAY NOW FOR FREE!
                        </span>
                    </div>
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
                        <Grid item className={classes.cartItem} style={{ padding: "25px" }}>
                            <div className={classes.card}>
                                <div className={classes.crossChainBg}>
                                    <div className={classes.crossChainContent}>
                                        <img className={`${classes.imgContent} life_chain_bg`} src={Bitmap}/>
                                    </div>
                                    <img src={Item1} className={`${classes.itemLogo}`} height="200" alt="catch-logo" />
                                </div>
                                <h2 className={classes.itemHeading}>
                                    LIFE <br /> CROSS-CHAIN
                                </h2>
                                <p className={classes.cardContent}>
                                    BMH is a truly multi-chain <br /> enabled game. Life doesn't exist <br /> anywhere else.
                                </p>
                            </div>
                        </Grid>

                        <Grid item className={classes.cartItem} style={{ padding: "25px" }}>
                            <div className={classes.card}>
                            <div className={classes.blockhashedContain}>
                                    <div className={classes.monsterContain}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <Paper className={classes.monsterPaper}>
                                                    <img className={classes.imgContent}  src={Monster1} />
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Paper className={classes.imgContent} className={classes.monsterPaper}>
                                                <img src={Monster2} />
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <Paper className={classes.monsterPaper}>
                                                    <img className={classes.imgContent}  src={Monster3} />
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Paper className={classes.imgContent} className={classes.monsterPaper}>
                                                <img src={Monster4} />
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <img src={Item2} className={`${classes.itemLogo} ${classes.imgDesktop}`} alt="catch-logo" />
                                </div>
                                <h2 className={classes.itemHeading}>
                                    BLOCKHASHES AS <br /> THE DNA
                                </h2>
                                <p className={classes.cardContent}>
                                    With each new block a new <br /> monster is born. Each unique <br /> hash is the hearbeat of your <br /> monster.
                                </p>
                            </div>
                        </Grid>

                        <Grid item className={classes.cartItem} style={{ padding: "25px" }}>
                            <div className={classes.card}>
                            <div className={classes.crossChainBg}>
                                    <div className={classes.crossChainContent}>
                                        <img className={`${classes.imgContent} life_chain_bg`} src={Bitmap}/>
                                    </div>
                                    <img src={Item3} className={`${classes.itemLogo}`} height="200" alt="catch-logo" />
                                </div>
                                <h2 className={classes.itemHeading}>
                                    EXPLORE THE <br /> ON-CHAIN WORLD
                                </h2>
                                <p className={classes.cardContent}>
                                    Battle and catch <br /> monsters by traversing <br /> the on-chain world.
                                </p>
                            </div>
                        </Grid>
                    </Carousel>
                </div>
            </Hidden>
        </div>
    );
};

export default DNABlockChain;