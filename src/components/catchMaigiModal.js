import React from "react";
import { makeStyles, Grid, Paper, withStyles, Slider, } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import RangeThumb from "../assets/images/rang-thumb-dot.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimelineBg from "../assets/images/timeline-modal-bg@2x.png";
import TimelineMonster from "../assets/images/timelineMonst@2x.png";
import PlayBG from "../assets/images/button-header-play@2x.png";
import TimelineProgress from "../assets/images/progress@2x.png";
import Close from "../assets/images/cross-slide-Left@2x.png";
import DropdownArrow from "../assets/images/drop-down-arrow@2x.png";
import GreenOval from "../assets/images/green-oval@2x.png";
import PurpleOval from "../assets/images/purple-oval@2x.png";
import YellowOval from "../assets/images/yellow-oval@2x.png";
import { useTheme } from "@material-ui/core/styles";
import theme from "../styles/global";
import Tablegroup from "../assets/images/table-group@2x.png";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((th) => ({
  menusContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
  },
  timelineModalBg: {
    background: "transparent",
    overflow: 'inherit'
  },
  modalContant: {
    position: "relative",
  },
  monsterImgContant: {
    top: 50,
    right: 50,
    maxWidth: 188,
    height: "auto",
    position: "absolute",
  },
  modalImg: {
    width: "100%",
    height: "auto",
  },
  bringButtonContainer: {
    background: `url(${PlayBG}) no-repeat 50% 50%`,
    backgroundSize: "cover",
    backgroundPosition: "unset",
    padding: "20px 40px",
    cursor: "pointer",
    [th.breakpoints.up("md")]: {
      height: 75,
    },
    transition: "0.3s",
    "&:hover": {
      mixBlendMode: "hard-light",
      transform: "scale(1.05)",
    },
    position: "absolute",
    bottom: "100px",
    left: "65px",
  },
  buttonTextMenu: {
    fontFamily: theme.font.heading,
    letterSpacing: 2,
    fontSize: 18,
    color: "#fff",
    textShadow: "1px 2px 4px rgb(0 0 128 / 50%)",
  },
  progressContant: {
    maxWidth: 275,
    position: "absolute",
    bottom: 180,
    left: 62,
    width: "265px",
    display: "flex",
    alignItems: "center",
  },
  blockText: {
    position: "absolute",
    top: 38,
    left: 60,
    fontFamily: "CHIBOLD",
    fontSize: 14,
    color: "#B18C5D",
    backgroundColor: "rgb(177 140 93 / 21%)",
    padding: "8px 14px",
    borderRadius: "20px"
  },
  modalHeader: {
    position: "absolute",
    top: 75,
    left: 53,
    fontFamily: "CHIBOLD",
    fontSize: 30,
    padding: 5,
    color: "#623F34",
  },
  close: {
    height: "auto",
    width: 80,
    position: "absolute",
    right: -20,
    top: -20,
    cursor: "pointer",
  },
  rateLabel: {
    position: "absolute",
    bottom: 237,
    left: 62,
    display: "flex",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    background: "transparent",
    boxShadow: "unset",
  },
  overImg: {
    width: 12,
  },
  overLabel: {
    fontFamily: "CHIBOLD",
    color: "#623F34",
    fontSize: 11,
    paddingLeft: 10,
  },
  timelineTableContain: {
    position: "relative",
  },
  timelineTableBg: {
    width: 180,
    margin: "auto",
    marginTop: 10
  },
  timelineTableDetails: {
    position: 'absolute',
    bottom: 13,
    left: 0
  },
  tableName: {
    paddingRight: 11,
    paddingLeft: 10,
    paddingBottom: 10,
    fontFamily: 'CHIBOLD',
    color: "#623F34",
    fontSize: 8,
    textAlign: 'left'
  },
  tableText: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontFamily: 'CHIBOLD',
    color: "#623F34",
    fontSize: 8,
    textAlign: 'left'
  },
  catchDetails: {
    position: 'absolute',
    top: 130,
    left: 68,
    fontFamily: 'proxima-nova, sans-serif',
    fontSize: 12,
    fontWeight: 'bold',
    color: "#B18C5D",
  },
  catchMonsterDetails: {
    position: 'absolute',
    top: 125,
    left: 260,
    fontFamily: 'CHIBOLD',
    fontSize: 10,
    color: "#623F34",
  },
  monstersFilterInput: {
    width: '90px',
    padding: "7px 10px",
    borderRadius: '30px',
    marginLeft: '10px',
    backgroundColor: "rgb(212 180 140 / 40%)",
    border: "2px solid #95543C",
    color: "#95543C",
    outline: "none",
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
  },
  monstersFilterDropdown: {
    width: "90px",
    marginTop: "10px",
    borderRadius: "10px",
    zIndex: "5"
  },
  monstersFilterListWrapper: {
    borderRadius: "10px",
    color: "#95543C",
  },
  monstersFilterList: {
    backgroundColor: "rgb(212 180 140 / 40%)",
    borderRadius: "10px",
    border: "1px solid #95543C",
    padding: "0"
  },
  monstersFilterItem: {
    borderBottom: "1px solid #95543C",
    padding: "5px 10px",
    fontSize: "13px",
    "&:last-child": {
      border: "0"
    },
    [th.breakpoints.down("sm")]: {
      padding: "5px 10px",
    },
  },
  monstersFilterSelectArrow: {
    position: "absolute",
    width: "15px",
    top: '50%',
    right: "10px",
    transform: "translateY(-50%)",
    [th.breakpoints.down("sm")]: {
      width: "15px"
    },
  },
}));
function valuetext(value) {
  return `${value}°C`;
}
export default function CatchMaigiModal({ openModal, setIsOpenBattel1Modal }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [value, setValue] = React.useState(50);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const battelDetail = [
    {
      name: 'ATTACK',
      value: '100'
    },
    {
      name: 'DEFENSE',
      value: '20'
    },
    {
      name: 'SPEED',
      value: '80'
    },
    {
      name: 'SPECIAL ATTACK',
      value: '30'
    },
    {
      name: 'SPECIAL DEFENSE',
      value: '30'
    },
    {
      name: 'NEALIM POIN',
      value: '40'
    },
  ]

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
      backgroundSize: "100% 100%",
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openDrop, setOpenDrop] = React.useState(false);
  const anchorRef = React.useRef(null);


  const handleToggle = () => {
    setOpenDrop((prevOpen) => !prevOpen);
  };


  const handleCloseDrop = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenDrop(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenDrop(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openDrop);
  React.useEffect(() => {
    if (prevOpen.current === true && openDrop === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openDrop;
  }, [openDrop]);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={openModal}
        onClose={() => setIsOpenBattel1Modal(false)}
        aria-labelledby="responsive-dialog-title"
        classes={{ paper: classes.timelineModalBg }}
      >
        <div className={classes.modalContant}>
          <div onClick={() => setIsOpenBattel1Modal(false)} className={classes.close}>
            <img className={classes.modalImg} src={Close} />
          </div>
          <div className={`${classes.blockText} block_text`}>BLOCK 9131435</div>
          <div className={`${classes.modalHeader} modal_header_text`}>
            CATCH MAIGI
          </div>
          <div className={classes.catchDetails}>
            <div> Caught Today: 4/8</div>
            <div>Rarity: Legedary</div>
            <div>Freely Roaming: 4</div>
          </div>
          <div className={classes.catchMonsterDetails}>
            <div>INOGI LUL 5</div>
            <div>(SUPPORT BOOST)</div>
          </div>
          <img className={classes.modalImg} src={TimelineBg} />
          <div className={classes.monsterImgContant}>
            <img
              className={`${classes.modalImg} monster_img`}
              src={TimelineMonster}
            />
            <Grid item xs={6} sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.timelineTableContain}>
                  <div className={`${classes.timelineTableBg} timeline_table_bg`}>
                  </div>
                  <div className={classes.timelineTableDetails}>
                    <table>
                      {battelDetail.map((b) => {
                        return (
                          <tr>
                            <td className={classes.tableName}>{b.name}</td>
                            <td className={classes.tableText}>{b.value}</td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </Paper>
            </Grid>
          </div>
          
          <div className={classes.rateLabel}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={5}
                style={{ paddingRight: 0, paddingBottom: 3, paddingTop: 0 }}
              >
                <Paper className={classes.paper}>
                  <div className={classes.overImg}>
                    <img className={classes.modalImg} src={GreenOval} />
                  </div>
                  <div className={classes.overLabel}>BASE SUCCESS RATE</div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sm={5}
                style={{ paddingRight: 0, paddingBottom: 3, paddingTop: 0 }}
              >
                <Paper className={classes.paper}>
                  <div className={classes.overImg}>
                    <img className={classes.modalImg} src={PurpleOval} />
                  </div>
                  <div className={classes.overLabel}>SUPPORT BOOST</div>
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ paddingRight: 0, paddingBottom: 0, paddingTop: 3 }}
              >
                <Paper className={classes.paper}>
                  <div className={classes.overImg}>
                    <img className={classes.modalImg} src={YellowOval} />
                  </div>
                  <div className={classes.overLabel}>ETH BOOST</div>
                </Paper>
              </Grid>
            </Grid>
          </div>

          <div className={classes.progressContant}>
            <DoubleRangeSlider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              defaultValue={20}
            />
            <div className={classes.monstersFilterInputGroup}>
              <button className={`${classes.monstersFilterInput} ${classes.monstersFilterSelect}`}
                onClick={handleToggle}
                aria-controls={openDrop ? 'menu-list-grow' : undefined}
                ref={anchorRef}
                aria-haspopup="true"
              >1 ETH</button>
              <img className={classes.monstersFilterSelectArrow} src={DropdownArrow} alt="" />
              <Popper className={classes.monstersFilterDropdown} open={openDrop} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow className={classes.monstersFilterListWrapper}
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseDrop}>
                        <MenuList className={classes.monstersFilterList} autoFocusItem={openDrop} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem className={classes.monstersFilterItem} onClick={handleCloseDrop}>2 ETH</MenuItem>
                          <MenuItem className={classes.monstersFilterItem} onClick={handleCloseDrop}>3 ETH</MenuItem>
                          <MenuItem className={classes.monstersFilterItem} onClick={handleCloseDrop}>4 ETH</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            {/* <img
              className={`${classes.modalImg} timeline_progress`}
              src={TimelineProgress}
            /> */}
            {/*            <Slider*/}
            {/*  value={value}*/}
            {/*  onChange={handleChange}*/}
            {/*  valueLabelDisplay="auto"*/}
            {/*  aria-labelledby="range-slider"*/}
            {/*  getAriaValueText={valuetext}*/}
            {/*/>*/}
          </div>
          <Grid
            item
            className={`${classes.bringButtonContainer} timeline_brgin_btn`}
          >
            <span className={classes.buttonTextMenu}>&nbsp;BRGIN&nbsp;</span>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
