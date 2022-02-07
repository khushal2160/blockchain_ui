import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../styles/global";
import Monster1 from "../assets/images/monster-1.svg";
import Monster2 from "../assets/images/monster-2.svg";
import Monster3 from "../assets/images/monster-3.svg";
import Monster4 from "../assets/images/monster-4.svg";
import Monster5 from "../assets/images/monster-5.svg";
import Monster6 from "../assets/images/monster-6.svg";
import Monster7 from "../assets/images/monster-7.svg";
import Monster8 from "../assets/images/monster-8.svg";
import Monster9 from "../assets/images/monster-9.svg";
import MonsterPonint from "../assets/images/monster-point.svg";
import MoonsterPalce from "../assets/images/earth.svg";
import MonsterLeg from "../assets/images/monster-leg.svg";
import GreenLgBtn from "../assets/images/green-lg-button.png";
import ArrowCircleRight from "../assets/images/arrow-circle-right.png";
import ArrowBottom from "../assets/images/arrow-bottom.png";
import { borderRadius, display, maxWidth } from "@material-ui/system";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((th) => ({
    monstersWarpper: {
        fontSize: "10px",
        padding: "6em 0",
        [th.breakpoints.down("lg")]: {
            fontSize: "9px",
        },
        [th.breakpoints.down("md")]: {
            fontSize: "7.5px",
        },
        [th.breakpoints.down("sm")]: {
            fontSize: "7px",
        },
        [th.breakpoints.down("xs")]: {
            fontSize: "6px",
            overflow: "hidden"
        },
    },

    monstersWarpperContainer: {
        margin: "0 5%",
    },
    monstersRow: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "20px",
        margin: "6em 0",
        [th.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        [th.breakpoints.down("xs")]: {
            gridTemplateColumns: "repeat(1, 1fr)",
        },
    },
    monstersCol: {
        padding: "3em",
        border: "1px solid #012a7c",
        backgroundColor: "rgba(0, 40, 121, 0.431)",
        borderRadius: "1.8em",
    },
    monstersBody: {
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",
    },
    monstersContent: {
        width: "50%",
        [th.breakpoints.down("sm")]: {
            width: "60%",
        },
        [th.breakpoints.down("xs")]: {
            width: "50%",
        },
    },
    monsterImgWrapper: {
        position: "absolute",
        left: "-20px",
        bottom: "-10px",
    },
    monsterImg: {
        width: "20em",
        height: "20em",
        [th.breakpoints.down("xs")]: {
            width: "25em",
            height: "25em",
        },
    },
    monstersWarpperTitle: {
        backgroundColor: "rgba(18, 61, 147, 0.68)",
        padding: "6em 0 8em",
    },

    monsterHead: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "5.5em"
    },
    monsterHeadTitle: {
        fontFamily: theme.font.heading,
        fontSize: "2.4em",
        color: "#fff",
        margin: 0,
        fontWeight: "400",
        [th.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
    },
    level: {
        backgroundColor: "#13367E",
        border: "1px solid #012A7C",
        color: "#87A8ED",
        fontSize: "12px",
        padding: "4px 1em",
        borderRadius: "13px",
        [th.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
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
    playerDetailItem: {
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        marginBottom: "15px",
        color: "#fff",
        textTransform: "uppercase",
        [th.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },
    playerDetailImg: {
        marginRight: "6px",
        width: "37px",
        height: "37px",
        objectFit: "contain",
        [th.breakpoints.down("sm")]: {
            width: "25px",
            height: "25px",
        },
    },
    playButtonContainer: {
        fontFamily: theme.font.heading,
        background: `url(${GreenLgBtn}) no-repeat center`,
        backgroundSize: "contain",
        backgroundPosition: "unset",
        cursor: "pointer",
        transition: "0.3s",
        width: "183px",
        height: "45px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            mixBlendMode: "hard-light",
        },
        [th.breakpoints.down("sm")]: {
            width: "150px",
            height: "40px",
        },
        [th.breakpoints.down("xs")]: {
            width: "135px",
            height: "35px",
        },
    },
    playButtonTest: {
        fontSize: "15px",
        color: "#fff",
        textShadow: "0 1px 3px #006E2C",
        [th.breakpoints.down("lg")]: {
            fontSize: "14px"
        },
        [th.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
    },
    monstersWarpperTitleText: {
        color: "#fff",
        fontFamily: theme.font.heading,
        fontSize: "6em",
        margin: 0,
        textAlign: "center"
    },
    monstersPagerWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    monstersPagerLink: {
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: theme.font.heading,
        fontSize: "24px",
        color: "#fff",
        backgroundColor: "rgba(0, 41, 121, 0.46)",
        borderRadius: "50%",
        textDecoration: "none",
        border: "1px solid #707070",
        marginLeft: "12px",
        "&:hover": {
            mixBlendMode: "hard-light",
        },
        [th.breakpoints.down("sm")]: {
            fontSize: "15px",
            width: "40px",
            height: "40px",
        },
    },
    monstersPagerLinkActive: {
        backgroundColor: "#0C2964",
        borderColor: "#E7DAB1"
    },
    monstersPagerLinkLast: {
        border: 0,
        boxShadow: "0 1px 7px rgba(0,0,0,0.5)"
    },
    monstersFilterForm: {
        maxWidth: "82em",
        backgroundColor: "#183E8D",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        borderRadius: "1.8em",
        padding: "3em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "-4em auto 6em",
        [th.breakpoints.down("xs")]: {
            display: "block"
        },
    },
    monstersFilterInputGroup: {
        flex: "1 0 auto",
        marginRight: "2.5em",
        position: "relative",
        "&:last-child": {
            marginRight: "0",
            marginBottom: "0",
        },
        [th.breakpoints.down("xs")]: {
            margin: "0 0 10px",
        },
    },
    monstersFilterInput: {
        padding: "16px 26px",
        backgroundColor: "#0C2964",
        borderRadius: "30px",
        border: "1px dashed #E7DAB1",
        color: "#fff",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
        textIndent: "1px",
        textAlign: "left",
        textOverflow: '',
        cursor: "pointer",
        "&::placeholder": {
            color: "#fff",
        },
        "&::focus": {
            outline: "none",
        },
        [th.breakpoints.down("sm")]: {
            padding: "10px 20px",
        },
    },
    monstersFilterSelect: {
        borderStyle: "solid"
    },
    monstersFilterSelectArrow: {
        position: "absolute",
        top: '50%',
        right: "2em",
        transform: "translateY(-50%)",
        [th.breakpoints.down("sm")]: {
            width: "15px"
        },
    },
    monstersWarpperTitleDetails: {
        maxWidth: "700px",
        margin: "4em auto 0",
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        [th.breakpoints.down("sm")]: {
            maxWidth: "100%",
        },
    },
    monstersWarpperTitleDetailHead: {
        fontSize: "13px",
        color: "#fff",
        fontFamily: theme.font.heading,
        margin: "0",
        letterSpacing: "1px"
    },
    monstersWarpperTitleDetailCol: {
        flex: "1 0 auto",
        padding: "2em 2em 1em",
        borderRight: "1px solid #0C2D73",
        "&:last-child": {
            border: "0"
        },
        [th.breakpoints.down("xs")]: {
            width: "40%",
        },
    },
    monstersWarpperTitleDetailNum: {
        fontSize: "3em",
        color: "#fff",
        margin: "10px 0 0"
    },
    monsterCardLabelWrapper: {
        display: "flex",
        alignItems: "center",
    },
    monsterCardLabel: {
        backgroundColor: "#13367E",
        border: "1px solid #0EFF4D",
        color: "#0EFF4D",
        fontSize: "12px",
        padding: "4px 1em",
        borderRadius: "13px",
        marginRight: "10px",
        textTransform: "uppercase",
        [th.breakpoints.down("sm")]: {
            fontSize: "10px",
            marginRight: "5",
        },
    },
    monsterCardLabelOnLoan: {
        border: "1px solid #FEAA1F",
        color: "#FEAA1F",
    },

    paper: {
        // marginRight: theme.spacing(2),
    },
    monstersFilterDropdown: {
        width: "100%",
        marginTop: "10px",
        borderRadius: "10px",
        zIndex: "5"
    },
    monstersFilterListWrapper: {
        borderRadius: "10px",
        color: "#fff",
    },
    monstersFilterList: {
        backgroundColor: "#0C2964",
        borderRadius: "10px",
        border: "1px solid #E7DAB1",
        padding: "0"
    },
    monstersFilterItem: {
        borderBottom: "1px solid #E7DAB1",
        padding: "10px 15px",
        fontSize: "13px",
        "&:last-child": {
            border: "0"
        },
        [th.breakpoints.down("sm")]: {
            padding: "5px 10px",
        },
    }
}));
const PortFolio = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSort, setOpenSort] = React.useState(false);
    const anchorRef = React.useRef(null);
    const anchorRefSort = React.useRef(null);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };


    const handleToggleSort = () => {
        setOpenSort((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleCloseSort = (event) => {
        if (anchorRefSort.current && anchorRefSort.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const prevOpenSort = React.useRef(openSort);
    React.useEffect(() => {
        if (prevOpenSort.current === true && openSort === false) {
            anchorRefSort.current.focus();
        }

        prevOpenSort.current = openSort;
    }, [openSort]);

    return (
        <div className={classes.monstersWarpper}>
            <div className={classes.monstersWarpperTitle}>
                <h1 className={classes.monstersWarpperTitleText}>OUR MONSTERS</h1>
                <div className={classes.monstersWarpperTitleDetails}>
                    <div className={classes.monstersWarpperTitleDetailCol}>
                        <h4 className={classes.monstersWarpperTitleDetailHead}>Battle count</h4>
                        <h3 className={classes.monstersWarpperTitleDetailNum}>60</h3>
                    </div>
                    <div className={classes.monstersWarpperTitleDetailCol}>
                        <h4 className={classes.monstersWarpperTitleDetailHead}>WIN RATE</h4>
                        <h3 className={classes.monstersWarpperTitleDetailNum}>50%</h3>
                    </div>
                    <div className={classes.monstersWarpperTitleDetailCol}>
                        <h4 className={classes.monstersWarpperTitleDetailHead}>MONSTERS OWNED</h4>
                        <h3 className={classes.monstersWarpperTitleDetailNum}>20</h3>
                    </div>
                    <div className={classes.monstersWarpperTitleDetailCol}>
                        <h4 className={classes.monstersWarpperTitleDetailHead}>MONSTERS LOST</h4>
                        <h3 className={classes.monstersWarpperTitleDetailNum}>3</h3>
                    </div>
                </div>
            </div>
            <div className={classes.monstersFilterForm}>
                <div className={classes.monstersFilterInputGroup}>
                    <input
                        className={`${classes.monstersFilterInput}`}
                        type="text"
                        placeholder="Search by Monster Name"
                    />
                </div>
                <div className={classes.monstersFilterInputGroup}>
                    <button className={`${classes.monstersFilterInput} ${classes.monstersFilterSelect}`} 
                        onClick={handleToggle} 
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        ref={anchorRef}
                        aria-haspopup="true"
                    >Please Select Species</button>
                    <img className={classes.monstersFilterSelectArrow} src={ArrowBottom} alt="" />
                    <Popper className={classes.monstersFilterDropdown} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow className={classes.monstersFilterListWrapper}
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList className={classes.monstersFilterList} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem className={classes.monstersFilterItem} onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem className={classes.monstersFilterItem} onClick={handleClose}>My account</MenuItem>
                                            <MenuItem className={classes.monstersFilterItem} onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
                <div className={classes.monstersFilterInputGroup}>
                    <button className={`${classes.monstersFilterInput} ${classes.monstersFilterSelect}`} 
                        onClick={handleToggleSort} 
                        aria-controls={openSort ? 'menu-list-grow' : undefined}
                        ref={anchorRefSort}
                        aria-haspopup="true"
                    >Sort By</button>
                    <img className={classes.monstersFilterSelectArrow} src={ArrowBottom} alt="" />
                    <Popper className={classes.monstersFilterDropdown} open={openSort} anchorEl={anchorRefSort.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow className={classes.monstersFilterListWrapper}
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleCloseSort}>
                                        <MenuList className={classes.monstersFilterList} autoFocusItem={openSort} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem className={classes.monstersFilterItem} onClick={handleClose}>Sort 1</MenuItem>
                                            <MenuItem className={classes.monstersFilterItem} onClick={handleClose}>Sort 2</MenuItem>
                                            <MenuItem className={classes.monstersFilterItem} onClick={handleClose}>Sort 3</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
            {/* monsers card */}
            <div className={classes.monstersWarpperContainer}>
                <div className={classes.monstersPagerWrapper}>
                    <a href="javascript:void(0)" className={`${classes.monstersPagerLink} ${classes.monstersPagerLinkActive}`} > 1 </a>
                    <a href="javascript:void(0)" className={classes.monstersPagerLink}> 2 </a>
                    <a href="javascript:void(0)" className={classes.monstersPagerLink}> 3 </a>
                    <a href="javascript:void(0)" className={`${classes.monstersPagerLink} ${classes.monstersPagerLinkLast}`} >
                        <img src={ArrowCircleRight} alt="" />
                    </a>
                </div>
                <div className={classes.monstersRow}>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.monsterCardLabelWrapper}>
                                <span className={classes.monsterCardLabel}>ON Sale</span>
                                <div className={classes.level}> <span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                            </div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster1} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.monsterCardLabelWrapper}>
                                <span className={` ${classes.monsterCardLabel} ${classes.monsterCardLabelOnLoan} `}>ON Loan</span>
                                <div className={classes.level}> <span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                            </div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster2} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster3} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster4} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster5} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster6} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster7} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster8} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.monstersCol}>
                        <div className={classes.monsterHead}>
                            <h6 className={classes.monsterHeadTitle}>Maigi</h6>
                            <div className={classes.level}><span>LVL 5</span><span className={classes.point}>BP 500</span></div>
                        </div>
                        <div className={classes.monstersBody}>
                            <div className={classes.monsterImgWrapper}>
                                <img className={classes.monsterImg} src={Monster9} alt="" />
                            </div>
                            <div className={classes.monstersContent}>
                                <div className={classes.playerDetailList}>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "-2px" }} src={MoonsterPalce} alt="" /> <p style={{ margin: 0 }}>Earth</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} src={MonsterLeg} alt="" /> <p style={{ margin: 0 }}>LEGENDARY</p>
                                    </div>
                                    <div className={classes.playerDetailItem}>
                                        <img className={classes.playerDetailImg} style={{ marginLeft: "4px" }} src={MonsterPonint} alt="" /> <p style={{ margin: 0 }}>BP 1000</p>
                                    </div>
                                </div>
                                <div className={classes.playButtonContainer}>
                                    <span className={classes.playButtonTest}>
                                        VIEW MONSTER
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.monstersPagerWrapper}>
                    <a href="javascript:void(0)" className={`${classes.monstersPagerLink} ${classes.monstersPagerLinkActive}`} > 1 </a>
                    <a href="javascript:void(0)" className={classes.monstersPagerLink}> 2 </a>
                    <a href="javascript:void(0)" className={classes.monstersPagerLink}> 3 </a>
                    <a href="javascript:void(0)" className={`${classes.monstersPagerLink} ${classes.monstersPagerLinkLast}`} >
                        <img src={ArrowCircleRight} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PortFolio;
