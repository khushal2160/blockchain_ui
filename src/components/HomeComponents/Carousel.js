import React, { useState } from "react";
import CarouselSlider from "react-material-ui-carousel";
import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import Banner from "../../assets/images/hero-splash-1@2x.jpg";
import ArrowLeft from "../../assets/images/arrow-left@2x.png";
import ArrowRight from "../../assets/images/arrow-right@2x.png";
import ActiveIndicator from "../../assets/images/pip-active@2x.png";
import InactiveIndicator from "../../assets/images/pip-inactive@2x.png";
import Logo from "../../assets/images/logo@2x.png";
import "../../styles/slider.css";

const useStyles = makeStyles((th) => ({
    rootContainer: {
        [th.breakpoints.down("md")]: {
            marginTop: "-4%"
        }
    },
    item: {
        maxHeight: "70vh",
        borderRadius: 24,
        // [th.breakpoints.down("lg")]: {
        //     maxHeight: "90vh"
        // },
        // [th.breakpoints.down("md")]: {
        //     maxHeight: "80vh"
        // },
        // [th.breakpoints.down("sm")]: {
        //     maxHeight: "60vh",
        //     borderRadius: 8
        // },
        // [th.breakpoints.down("xs")]: {
        //     maxHeight: "22vh",
        //     borderRadius: 8
        // },
    },
    itemContainer: {
        padding: "0 75px",
        [th.breakpoints.down("md")]: {
            padding: 0
        },
    },
    iconSize: {
        height: 80,
        [th.breakpoints.down("md")]: {
            display: "none"
        },
    },
    indicatorItem: {
        height: 35,
        [th.breakpoints.down("sm")]: {
            height: 25
        }
    },
    indicatorsContainer: {
        display: "flex", padding: "7px 10px", borderRadius: 32, backgroundColor: "#0B43AE", position: "absolute", top: -35,
        [th.breakpoints.down("sm")]: {
            padding: "0 5px",
            top: -20
        }
    },
    mobileLogo: {
        maxHeight: 100,
        marginTop: -55,
        position: "absolute"
    }
}));

const PrevIcon = () => {
    const classes = useStyles();
    return (
        <img src={ArrowLeft} className={classes.iconSize} alt="indicator" />
    );
};

const NextIcon = () => {
    const classes = useStyles();
    return (
        <img src={ArrowRight} className={classes.iconSize} alt="indicator" />
    );
};

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

const Carousel = () => {
    const classes = useStyles();
    const [sliderIndex, setSliderIndex] = useState(0);
    const renderIndicators = () => {
        const indicators = [];
        for (let i = 0; i < 3; i++) {
            indicators.push(
                <CustomDot active={i === sliderIndex} onClick={() => setSliderIndex(i)} key={i} />
            );
        }

        return indicators;
    };
    return (
        <Grid container justifyContent="center" className={`${classes.rootContainer} slider-root`}>
            <Grid item>
                <Hidden lgUp>
                    <Grid container justifyContent="center" style={{ position: "relative", zIndex: 1 }}>
                        <img src={Logo} className={classes.mobileLogo} alt="small" />
                    </Grid>
                </Hidden>
                <CarouselSlider
                    NextIcon={<NextIcon />}
                    PrevIcon={<PrevIcon />}
                    indicators={false}
                    navButtonsWrapperProps={{
                        style: {
                            height: 50
                        }
                    }}
                    navButtonsProps={{
                        style: {
                            background: "transparent",
                            margin: "0 25px"
                        }
                    }}
                    animation="slide"
                    autoPlay={false}
                    swipe={true}
                    navButtonsAlwaysVisible
                    fullHeightHover={false}
                    index={sliderIndex}
                    onChange={(index, active) => {
                      setSliderIndex(index);
                    }}
                >   
                    <div className={classes.itemContainer}>
                        <img src={Banner} className={`slider-item ${classes.item}`} alt="banner" />
                    </div>
                    <div className={classes.itemContainer}>
                        <img src={Banner} className={`slider-item ${classes.item}`} alt="banner" />
                    </div>
                    <div className={classes.itemContainer}>
                        <img src={Banner} className={`slider-item ${classes.item}`} alt="banner" />
                    </div>
                </CarouselSlider>
                <div style={{ display: "flex", justifyContent: "center", position: "relative", paddingBottom: 48 }}>
                    <div className={classes.indicatorsContainer}>
                        {
                            renderIndicators()
                        }
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Carousel;
