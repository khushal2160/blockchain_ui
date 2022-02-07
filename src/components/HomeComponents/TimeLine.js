import React from "react";
import { makeStyles, withStyles, Slider, Fade } from "@material-ui/core";
import theme from "../../styles/global";
import Maigi from "../../assets/images/maigi.png";
import Dowat from "../../assets/images/Dowat.png";
import DowatGreen from "../../assets/images/DowatGreen.png";
import MaigiPurpule from "../../assets/images/MaigiPurpule.png";
import BlockGreen from "../../assets/images/block-green.svg";
import BlockBlue from "../../assets/images/block-blue.svg";
import BlockOrange from "../../assets/images/block-orange.svg";
import Bitmap1 from "../../assets/images/Bitmap-1.png";
import Bitmap2 from "../../assets/images/Bitmap-2.png";
import PlayerDetail1 from "../../assets/images/player-detail-1.png";
import PlayerDetail2 from "../../assets/images/player-detail-2.png";
import Detail1 from "../../assets/images/detail1.png";
import Detail2 from "../../assets/images/detail2.png";
import Detail3 from "../../assets/images/detail3.png";
import OrangeButton from "../../assets/images/orange-button.png";
import GreenButton from "../../assets/images/green-button.png";
import TokenomicsButton from "../../assets/images/button-large@2x.png";
import Message from "../../assets/images/message.png";
import MessageRight from "../../assets/images/message-right.png";
import FilterBG from "../../assets/images/filter-bg.png";
import FilterSearch from "../../assets/images/filter-search.png";
import GameType1 from "../../assets/images/game-type1.png";
import GameType2 from "../../assets/images/game-type2.png";
import GameElement1 from "../../assets/images/game-element1.png";
import GameElement2 from "../../assets/images/game-element2.png";
import GameElement3 from "../../assets/images/game-element3.png";
import GameElement4 from "../../assets/images/game-element4.png";
import GameElement5 from "../../assets/images/game-element5.png";
import GameElement6 from "../../assets/images/game-element6.png";
import RangeThumb from "../../assets/images/range-thumb.png";
import FilterCloseBtn from "../../assets/images/filter-close-btn.png";
import FilterShowBtn from "../../assets/images/filter-show-btn.png";
import PlayerCircleButton from "../../assets/images/play-circle-button.png";
import TimelineSuccess from "../timelineSuccess"
import TimelineBattel1 from "../timelineBattel1";
import TimelineBattel2 from "../timelineBattel2";
import CatchMaigiModal from "../catchMaigiModal";

const useStyles = makeStyles((th) => ({
    root: {
        padding: "25px",
        color: "#fff",
        backgroundColor: "#3366CB",
        // width: "100vw"
    },
    textCenter: {
        textAlign: "center"
    },
    timelineWrapper: {
        maxWidth: "100em",
        margin: "0 auto",
        fontFamily: theme.font.body,
        fontSize: "10px",
        [th.breakpoints.down("md")]: {
            fontSize: "6px",
        },
        [th.breakpoints.down("sm")]: {
            fontSize: "5px",
        },
        [th.breakpoints.down("xs")]: {
            fontSize: "4px",
            overflow: "hidden"
        },
    },
    timelineWrapperInner: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        [th.breakpoints.down("xs")]: {
            transform: "translateX(16%)",
        },
    },
    timelineStep: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-18em",
        position: "relative"
    },
    Bitmap: {
        position: "absolute",
        top: "25%",
        left: 0,
        maxWidth: '26em',
        maxHeight: '31.1em',
        objectFit: 'contain',
        transform: "translateX(-30%)",
    },
    BitmapEven: {
        left: 'auto',
        right: 0,
        transform: 'translateX(60%)'
    },
    timelineStepFirst: {
        marginTop: 0
    },
    timelineStepOdd: {

    },
    timelineStepEven: {
        [th.breakpoints.down("lg")]: {
            transform: "translateX(-40%)",
        },
        [th.breakpoints.down("md")]: {
            // transform: "translateX(-32%)",
        },
        // [th.breakpoints.down("sm")]: {
        //     fontSize: "6px",
        // },
        // [th.breakpoints.down("xs")]: {
        //     color: "black"
        // },
    },
    timelineStepHiddenWrapper: {
        position: "relative",
    },
    blockNumber: {
        backgroundColor: "#2E42AE",
        fontSize: "2em",
        color: "#fff",
        display: "inline-block",
        padding: "7px 4em",
        borderRadius: "5em",
        position: "relative",
        "&:after": {
            content: "''",
            display: "block",
            width: "12px",
            height: "12px",
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%) rotate(45deg)",
            backgroundColor: "#52E4B1",
        },
    },
    playerImg: {
        width: "14em",
        height: "14em",
        objectFit: "contain",
        position: "relative",
        bottom: "-3.5em",
        zIndex: "1"
    },
    altblock: {
        margin: "-4.5em -23em -4.5em 0"
    },
    hiddenBlock: {
        opacity: "0.3"
    },
    blockImg: {
        width: "11.7em",
        height: "7.4em",
        marginBottom: "2.7em",
        position: 'relative'
    },
    playerWrapper: {
        position: 'relative'
    },
    playerDetails: {
        position: 'absolute',
        height: 'auto',
        backgroundColor: "rgba(14, 49, 121, 0.65)",
        color: "#fff",
        right: "50%",
        top: "4em",
        borderRadius: "7.5px",
        zIndex: 1,
        [th.breakpoints.down("lg")]: {
            width: '260px',
        },
        [th.breakpoints.down("md")]: {
            width: '200px',
        },
        [th.breakpoints.down("sm")]: {
            width: '180px',
        },
        [th.breakpoints.down("xs")]: {
            width: '130px'
        },
    },
    playerDetailsEven: {
        [th.breakpoints.up("sm")]: {
            right: "auto",
            left: "75%",
            top: "9em",
        },
    },
    playerDetailsRight: {
        right: "auto",
        left: "75%",
        top: "9em",
    },
    playerDetailInner: {
        position: "relative",
        padding: "17px 4em",
        boxSizing: "border-box",
        [th.breakpoints.down("sm")]: {
            padding: "10px",
        },
    },
    playerGameImg: {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: "translate(-40%, -40%)",
        maxWidth: "8.3em",
        maxHeight: "8.3em"
    },
    playerGameImgEven: {
        left: "auto",
        right: 0,
        transform: "translate(40%, -40%)"
    },
    playerHead: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    playerHeadTitle: {
        fontSize: "14px",
        margin: 0,
        fontWeight: "400",
        [th.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
    },
    level: {
        backgroundColor: "#13367E",
        border: "1px solid #012A7C",
        color: "#87A8ED",
        fontSize: "10px",
        padding: "4px 1em",
        borderRadius: "12px",
        [th.breakpoints.down("sm")]: {
            fontSize: "8px",
        },
    },
    playerDetailItem: {
        display: "flex",
        alignItems: "center",
        fontSize: "10px",
        marginBottom: "5px",
        [th.breakpoints.down("sm")]: {
            fontSize: "8px",
        },
    },
    playerDetailImg: {
        marginRight: "6px"
    },
    point: {
        paddingLeft: "12px",
        marginLeft: "12px",
        borderLeft: "1px solid #87A8ED",
        [th.breakpoints.down("sm")]: {
            paddingLeft: "6px",
            marginLeft: "6px",
        },
    },
    playButtonContainer: {
        fontFamily: theme.font.heading,
        background: `url(${OrangeButton}) no-repeat center`,
        backgroundSize: "contain",
        backgroundPosition: "unset",
        cursor: "pointer",
        transition: "0.3s",
        width: "11.8em",
        height: "5.2em",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            mixBlendMode: "hard-light",
        },
        margin: "12px 0 -4em"
    },
    BattelButtonContainer: {
        background: `url(${GreenButton}) no-repeat center`,
        backgroundSize: "contain",
        width: "13.2em",
        height: "5.2em",
    },
    playButtonTest: {
        fontSize: "18px",
        [th.breakpoints.down("lg")]: {
            fontSize: "14px"
        },
        [th.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
        [th.breakpoints.down("xs")]: {
            fontSize: "8px",
        },
    },
    hiddenButton: {
        background: `url(${TokenomicsButton}) no-repeat 50% 50%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px 8em",
        cursor: "pointer",
        [th.breakpoints.up("md")]: {
            height: 75
        },
        transition: "0.3s",
        "&:hover": {
            mixBlendMode: "hard-light",
        },
        display: "inline-flex",
        alignItems: "center",
        fontFamily: theme.font.heading,
        letterSpacing: 1,
        margin: "25px 0",
        color: "#fff",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        [th.breakpoints.down("sm")]: {
            transform: "translate(-80%, -50%)",
        },
    },
    playerMessage: {
        position: "absolute",
        transform: "translate(-90%, -40%)",
        width: "20.6em",
        height: "13.1em",
        background: `url(${Message}) no-repeat center`,
        backgroundSize: "contain",
        backgroundPosition: "top left",
        padding: "2em 6em 2em 2.7em",
        boxSizing: "border-box",
        [th.breakpoints.down("sm")]: {
            transform: "translate(-75%, -40%)",
        },
    },
    playerMessageRight: {
        padding: '2em 2.7em 2em 6em',
        transform: "translate(65%, 0%)",
        background: `url(${MessageRight}) no-repeat center`,
        backgroundPosition: "top right",
        backgroundSize: "contain",
        [th.breakpoints.down("sm")]: {
            transform: "translate(35%, 0%)",
        },
    },
    playerMessageText: {
        fontFamily: theme.font.heading,
        fontSize: "1.2em",
        margin: '0',
        lineHeight: "1.4em"
    },
    PlayerCircleButtonCSS: {
        position: "absolute",
        right: "0",
        top: '50%',
        transform: "translate(50%, -70%)",
        width: '54px',
        height: '54px',
        maxHeight: "6.5em",
        maxWidth: "6.5em",
        filter: "drop-shadow(0 1px 8px rgba(0, 0, 0, 0.5))",
    },
    filter: {
        padding: "4em",
        filter: "drop-shadow(0 3px 3.2em rgba(64, 38, 29, 0.4))",
        width: "460px",
        background: `url(${FilterBG}) no-repeat center`,
        boxSizing: "border-box",
        backgroundSize: "100% 100%",
        position: "fixed",
        zIndex: "99",
        right: 0,
        top: "50%",
        transform: "translate(14em, -50%)",
        transition: "0.3s all",
        [th.breakpoints.down("md")]: {
            width: "360px",
        },
        [th.breakpoints.down("sm")]: {
            width: "300px",
        },
        [th.breakpoints.down("xs")]: {
            width: "280px",
        },
    },
    filterInner: {
        maxWidth: "260px",
        position: "relative",
        [th.breakpoints.down("md")]: {
            width: "230px",
        },
        [th.breakpoints.down("sm")]: {
            width: "200px",
        },
    },
    filterClose: {
        transform: "translate(calc(100% - 20px), -50%)"
    },
    filterSearch: {
        background: `url(${FilterSearch}) no-repeat center`,
        color: "#fff",
        width: "259px",
        height: "36px",
        border: "0",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "18px",
        "&::placeholder": {
            color: "#fff",
        },
        [th.breakpoints.down("md")]: {
            width: "230px",
        },
        [th.breakpoints.down("sm")]: {
            width: "200px",
        },
    },
    filterControl: {
        position: "absolute",
        top: "0",
        left: "-10.8em",
        width: "6.8em",
        height: "6.8em",
        display: "block",
        background: `url(${FilterCloseBtn}) no-repeat center center`,
        backgroundSize: "contain",
    },
    filterControlOpen: {
        background: `url(${FilterShowBtn}) no-repeat center center`,
        backgroundSize: "contain",
    },
    filterTitle: {
        fontFamily: theme.font.heading,
        color: "#623F34",
        margin: "10px 0 1.5em 0",
        "&::first-child": {
            marginTop: 0
        },
    },
    customSliderLableWrappwer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "3em",
    },

    customSliderLable: {
        color: "#482A21",
        fontSize: "12px",
    },
    filterTitleText: {
        fontSize: "17px",
        [th.breakpoints.down("md")]: {
            fontSize: "14px",
        },
        [th.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
        [th.breakpoints.down("xs")]: {
            fontSize: "10px",
        },
    },
    filterLink: {
        filter: "drop-shadow(0 1px 10px rgba(0, 0, 0, 0.5))",
        maxWidth: "12em",
        maxHeight: "12em",
        display: "inline-block"
    }
}));


const DoubleRangeSlider = withStyles({
    root: {
        color: '#F7B541',
        height: 10,
        // boxShadow: "1px 1px #FFD081 inset",
        filter: "drop-shadow(0 1px 1px #5C2611)",
    },
    thumb: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        background: `url(${RangeThumb}) no-repeat center`,
        marginTop: -12,
        marginLeft: -15,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 15px)',
    },
    track: {
        height: 10,
        borderRadius: 4,
    },
    rail: {
        height: 10,
        borderRadius: 4,
        color: '#000',
        opacity: 1
    },
})(Slider);

function valuetext(value) {
    return `${value}%`;
}

const TimeLine = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [isOpenBattel1Modal, setIsOpenBattel1Modal] = React.useState(false)
    const [data, setData] = React.useState(["demo"]);

    const onOpenModal = (isSccess) => {
        setIsSuccess(isSccess);
        setIsOpenModal(!isOpenModal);
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const toggleFilterMenu = () => {
        setIsOpen(!isOpen)
    }

    const loadMoreData = () => {
        let temp = [...data]
        temp.push("demo")
        setData(temp)
    }

    return (
        <Fade in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}
        >

            <div className={classes.timelineWrapper} style={{ margin: "10em auto" }} >
                <div className={`${classes.filter} ${!isOpen ? classes.filterClose : ""}`}>
                    <div className={classes.filterInner}>
                        <a href="javascript:void(0)" className={`${classes.filterControl} ${!isOpen ? classes.filterControlOpen : ""}`} onClick={toggleFilterMenu}></a>
                        <h5 className={classes.filterTitle}>
                            <span className={classes.filterTitleText}>Filter</span>
                        </h5>
                        <input className={classes.filterSearch} type="text" placeholder="Search by Block Hash" />
                        <h5 className={classes.filterTitle}>
                            <span className={classes.filterTitleText}>BY TYPE</span>
                        </h5>
                        <div className="">
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameType1} alt="" />
                            </a>
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameType2} alt="" />
                            </a>
                        </div>
                        <h5 className={classes.filterTitle}>
                            <span className={classes.filterTitleText}>BY SUCCESS RATE</span>
                        </h5>
                        <div className="customSlider">
                            <DoubleRangeSlider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                            <div className={classes.customSliderLableWrappwer}>
                                <label className={classes.customSliderLable} htmlFor="">0%</label>
                                <label className={classes.customSliderLable} htmlFor="">100%</label>
                            </div>
                        </div>
                        <h5 className={classes.filterTitle}>
                            <span className={classes.filterTitleText}>BY ELEMENT</span>
                        </h5>
                        <div className="">
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameElement1} alt="" />
                            </a>
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameElement2} alt="" />
                            </a>
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameElement3} alt="" />
                            </a>
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameElement4} alt="" />
                            </a>
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameElement5} alt="" />
                            </a>
                            <a href="javascript:void(0)" className={classes.filterLink} >
                                <img src={GameElement6} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.timelineWrapperInner}>
                    {data.map((item, key) => (
                        <React.Fragment key={key}>
                            <div className={`${classes.timelineStep} ${classes.timelineStepOdd} ${key === 0 ? classes.timelineStepFirst : ""}`}>
                                <span className={classes.blockNumber}>
                                    Block 9131435
                                </span>
                                <div className={classes.playerWrapper}>
                                    <div className={`${classes.playerMessage} ${classes.playerMessageRight}`}>
                                        <h4 className={classes.playerMessageText}>Wahoo! I WON, WANT TO WATCH ME KICK YOUR BUTT?
                                            <a href="#">
                                                <img className={classes.PlayerCircleButtonCSS} src={PlayerCircleButton} alt="" />
                                            </a>
                                        </h4>
                                    </div>
                                    <div className={classes.playerDetails}>
                                        <div className={classes.playerDetailInner}>
                                            <img className={classes.playerGameImg} src={PlayerDetail1} alt="" />
                                            <div className={classes.playerHead}>
                                                <h6 className={classes.playerHeadTitle}>Maigi</h6>
                                                <div className={classes.level}><span>LVL 5</span></div>
                                            </div>
                                            <div className={classes.playerDetailList}>
                                                <div className={classes.playerDetailItem}>
                                                    <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={Detail1} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                                </div>
                                                <div className={classes.playerDetailItem}>
                                                    <img className={classes.playerDetailImg} src={Detail2} alt="" /> <p style={{ margin: 0 }}>4 REMAINING</p>
                                                </div>
                                                <div className={classes.playerDetailItem}>
                                                    <img className={classes.playerDetailImg} src={Detail3} alt="" /> <p style={{ margin: 0 }}>80% SUCCESS RATE</p>
                                                </div>
                                            </div>
                                            <div className={classes.playButtonContainer} onClick={() => setIsOpenBattel1Modal(true)}>
                                                <span className={classes.playButtonTest}>
                                                    &nbsp;CATCH&nbsp;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={Maigi} alt="" className={classes.playerImg} />
                                </div>
                                <div className={classes.timelineStep1B1}>
                                    <img src={BlockGreen} alt="" className={classes.blockImg} />
                                </div>
                                <div className={classes.timelineStep1B2}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} />
                                </div>
                                <div className={`${classes.timelineStep1B3} ${classes.hiddenBlock} ${classes.altblock}`}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} />
                                </div>
                                <div className={classes.timelineStep1B4}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <div className={classes.timelineStep1B5} style={{ margin: "0 19em 0 0" }} >
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <div className={classes.timelineStep1B5} style={{ margin: "0 38em 0 0" }}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <div className={classes.timelineStep1B5} style={{ margin: "0 57em 0 0" }}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <img src={Bitmap1} alt="" className={classes.Bitmap} />
                            </div>
                            <div className={`${classes.timelineStep} ${classes.timelineStepEven}`}>
                                <span className={classes.blockNumber}>
                                    Block 9131433
                                </span>
                                <div className={classes.playerWrapper}>
                                    <div className={classes.playerMessage}>
                                        <h4 className={classes.playerMessageText}>How dare you challenge me with such primitive skills..
                                        </h4>
                                    </div>
                                    <div className={`${classes.playerDetails} ${classes.playerDetailsEven} ${classes.playerDetailsRight}`}>
                                        <div className={classes.playerDetailInner}>
                                            <img className={`${classes.playerGameImg}  ${classes.playerGameImgEven}`} src={PlayerDetail2} alt="" />
                                            <div className={classes.playerHead}>
                                                <h6 className={classes.playerHeadTitle}>Maigi</h6>
                                                <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                                            </div>
                                            <div className={classes.playerDetailList}>
                                                <div className={classes.playerDetailItem}>
                                                    <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={Detail1} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                                </div>
                                                <div className={classes.playerDetailItem}>
                                                    <img className={classes.playerDetailImg} src={Detail2} alt="" /> <p style={{ margin: 0 }}>4 REMAINING</p>
                                                </div>
                                                <div className={classes.playerDetailItem}>
                                                    <img className={classes.playerDetailImg} src={Detail3} alt="" /> <p style={{ margin: 0 }}>80% SUCCESS RATE</p>
                                                </div>
                                            </div>
                                            <div onClick={() => onOpenModal(true)} className={`${classes.playButtonContainer} ${classes.BattelButtonContainer}`}>
                                                <span className={classes.playButtonTest}>
                                                    &nbsp;BATTLE&nbsp;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={Dowat} alt="" className={classes.playerImg} />
                                </div>
                                <div className={classes.timelineStep1B1}>
                                    <img src={BlockOrange} alt="" className={classes.blockImg} />
                                </div>
                                <div className={classes.timelineStep1B2}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} />
                                </div>
                                <div className={`${classes.timelineStep1B3} ${classes.hiddenBlock} ${classes.altblock}`}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} />
                                </div>
                                <div className={classes.timelineStep1B4}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <div className={classes.timelineStep1B5} style={{ margin: "0 0 0 19em", display: "inline-block" }} >
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <div className={classes.timelineStep1B5} style={{ margin: "0 0 0 38em" }}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <div className={classes.timelineStep1B5} style={{ margin: "0 0 0 57em" }}>
                                    <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                                </div>
                                <img src={Bitmap2} alt="" className={`${classes.Bitmap} ${classes.BitmapEven}`} />
                            </div>
                        </React.Fragment>
                    ))}
                    {/* <div className={`${classes.timelineStep} ${classes.timelineStepOdd}`}>
                    <span className={classes.blockNumber}>
                        Block 9131432
                    </span>

                    <div className={`${classes.playerWrapper}`}>
                        <div className={`${classes.playerDetails} ${classes.playerDetailsEven}`}>
                            <div className={classes.playerDetailInner}>
                                <img className={`${classes.playerGameImg}  ${classes.playerGameImgEven}`} src={PlayerDetail2} alt="" />
                                <div className={classes.playerHead}>
                                    <h6 className={classes.playerHeadTitle}>Maigi</h6>
                                    <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                                </div>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={Detail1} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>isSccess
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={Detail2} alt="" /> <p style={{ margin: 0 }}>4 REMAINING</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={Detail3} alt="" /> <p style={{ margin: 0 }}>80% SUCCESS RATE</p>
                                    </div>
                                </div>
                                <div onClick={() => onOpenModal(false)} className={`${classes.playButtonContainer} ${classes.BattelButtonContainer}`}>
                                    <span className={classes.playButtonTest}>
                                        &nbsp;BATTLE&nbsp;
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img src={DowatGreen} alt="" className={classes.playerImg} />
                    </div>
                    <div className={classes.timelineStep1B1}>
                        <img src={BlockOrange} alt="" className={classes.blockImg} />
                    </div>
                    <div className={classes.timelineStep1B2}>
                        <img src={BlockBlue} alt="" className={classes.blockImg} />
                    </div>
                    <div className={`${classes.timelineStep1B3} ${classes.hiddenBlock} ${classes.altblock}`}>
                        <img src={BlockBlue} alt="" className={classes.blockImg} />
                    </div>
                    <div className={classes.timelineStep1B4}>
                        <img src={BlockBlue} alt="" className={classes.blockImg} />
                    </div>
                </div> */}
                    <div className={classes.timelineStepHiddenWrapper}>
                        <div className={classes.hiddenButton} onClick={loadMoreData}>
                            <span className={classes.playButtonTest}>
                                LOAD MORE BLOCKS
                            </span>
                        </div>
                        <div className={`${classes.timelineStep} ${classes.timelineStepOdd} ${classes.timelineStepFirst} ${classes.timelineStepHidden}`}>
                            <span className={classes.blockNumber}>
                                Block 9131435
                            </span>

                            <div className={`${classes.playerWrapper}`}>
                                <div className={`${classes.playerDetails} ${classes.playerDetailsEven}`}>
                                    <div className={classes.playerDetailInner}>
                                        <img className={`${classes.playerGameImg}  ${classes.playerGameImgEven}`} src={PlayerDetail1} alt="" />
                                        <div className={classes.playerHead}>
                                            <h6 className={classes.playerHeadTitle}>Maigi</h6>
                                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                                        </div>
                                        <div className={classes.playerDetailList}>
                                            <div className={classes.playerDetailItem}>
                                                <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={Detail1} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                            </div>
                                            <div className={classes.playerDetailItem}>
                                                <img className={classes.playerDetailImg} src={Detail2} alt="" /> <p style={{ margin: 0 }}>4 REMAINING</p>
                                            </div>
                                            <div className={classes.playerDetailItem}>
                                                <img className={classes.playerDetailImg} src={Detail3} alt="" /> <p style={{ margin: 0 }}>80% SUCCESS RATE</p>
                                            </div>
                                        </div>
                                        <div className={`${classes.playButtonContainer}`} >
                                            <span className={classes.playButtonTest}>
                                                &nbsp;CATCH&nbsp;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <img src={MaigiPurpule} alt="" className={classes.playerImg} />
                            </div>
                            <div className={classes.timelineStep1B1}>
                                <img src={BlockGreen} alt="" className={classes.blockImg} />
                            </div>
                            <div className={classes.timelineStep1B2}>
                                <img src={BlockBlue} alt="" className={classes.blockImg} />
                            </div>
                            <div className={`${classes.timelineStep1B3} ${classes.hiddenBlock} ${classes.altblock}`}>
                                <img src={BlockBlue} alt="" className={classes.blockImg} />
                            </div>
                            <div className={classes.timelineStep1B4}>
                                <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                            </div>
                            <div className={classes.timelineStep1B5} style={{ margin: "0 19em 0 0" }} >
                                <img src={BlockBlue} alt="" className={classes.blockImg} style={{ marginBottom: 0 }} />
                            </div>
                        </div>
                    </div>
                </div>
                <TimelineSuccess openModal={isOpenModal} setIsOpenModal={setIsOpenModal} isSuccess={isSuccess} blockNumber={'1223541'} />
                <TimelineBattel1 openModal={isOpenBattel1Modal} setIsOpenBattel1Modal={setIsOpenBattel1Modal}/>
                {/* <TimelineBattel2 openModal={isOpenBattel1Modal} setIsOpenBattel1Modal={setIsOpenBattel1Modal} /> */}
                {/* <CatchMaigiModal openModal={isOpenBattel1Modal} setIsOpenBattel1Modal={setIsOpenBattel1Modal}/> */}
            </div>
        </Fade>
    );
}

export default TimeLine;
