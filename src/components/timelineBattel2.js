import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimelineBattel1Bg from "../assets/images/timeline-battel-new.png";
import Tablegroup from "../assets/images/table-group@2x.png";
import TimelineMonster from "../assets/images/timeline-monster1@2x.png";
import TimelineSmallIcon from "../assets/images/timeline-small-icon@2x.png";
import PlayBG from "../assets/images/button-header-play@2x.png";
import Close from "../assets/images/cross-slide-Left@2x.png";
import LeftArrow from "../assets/images/left-arrow@2x.png";
import BranchImg from "../assets/images/vine@2x.png";
import { useTheme } from "@material-ui/core/styles";
import theme from "../styles/global";
import CustomCheckBox from "./customCheckBox"
import DownArrow from "../assets/images/drop-down-arrow@2x.png"

const useStyles = makeStyles((th) => ({
  timelineModalBg: {
    background: "transparent",
    boxShadow: 'unset',
    overflow: 'inherit'
  },
  modalContant: {
    position: "relative",
  },
  modalImg: {
    width: "100%",
    height: "auto",
  },
  nextButtonContainer: {
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
    bottom: "15px",
    left: "220px",
  },
  buttonTextMenu: {
    fontFamily: theme.font.heading,
    letterSpacing: 2,
    fontSize: 18,
    color: "#fff",
    textShadow: "1px 2px 4px rgb(0 0 128 / 50%)",
  },
  blockText: {
    position: "absolute",
    top: 61,
    left: 85,
    fontFamily: "CHIBOLD",
    fontSize: 14,
    padding: 5,
    color: "#B18C5D",
    backgroundColor: "rgb(177 140 93 / 21%)",
    padding: "8px 14px",
    borderRadius: "20px"
  },
  progressContant: {
    maxWidth: 275,
    position: "absolute",
    bottom: 180,
    left: 62,
  },
  branchImgContant: {
    maxWidth: 280,
    height: 75,
    position: "absolute",
    right: 95,
    top: 20,
  },
  timelineTable: {
    position: "absolute",
    bottom: 145,
    padding: "0 65px",
  },
  paper: {
    textAlign: "center",
    backgroundColor: "transparent",
    boxShadow: "unset",
  },
  monsterImg: {
    width: 90,
  },
  justCenter: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  timelineTableBg: {
    width: 180,
    margin: "auto",
    marginTop: 10
  },
  timelineIcon: {
    width: 60,
    position: "absolute",
    left: "45%",
    top: 155,
  },
  close: {
    height: "auto",
    width: 70,
    position: "absolute",
    right: 10,
    top: 10,
    cursor: "pointer",
  },
  leftArrowIcon: {
    position: "absolute",
    right: 150,
    width: 20,
    top: 100,
    display: "flex",
    cursor: "pointer",
  },
  backBtn: {
    paddingTop: 6,
    paddingLeft: 5,
    fontFamily: "CHIBOLD",
    color: "#B18C5D",
  },
  searchingContain: {
    position: "absolute",
    top: 130,
    left: 85,
  },
  searchingInput: {
    background: 'transparent',
    border: 'unset',
    width: 250,
    fontSize: 11,
    fontFamily: 'proxima-nova, sans-serif',
    paddingLeft: 12,
    color: "rgba(0,0,0,0.6)",
    border: "0",
    padding: "10px",
    boxSizing: "border-box",
    borderRadius: "18px",
    backgroundColor: "#927d6363",
    "&::placeholder": {
      color: "rgba(0,0,0,0.6)",
    },
    "&::focus": {
      outline: "none"
    },
    "&:focus-visible": {
      outline: "none"
    },
  },

  swicthMonsterText: {
    display: 'block',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#746159'
  },
  modalHeader: {
    position: 'absolute',
    top: 92,
    left: 78,
    fontFamily: 'CHIBOLD',
    fontSize: 30,
    padding: 5,
    color: "#623F34"
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    padding: "0 13px"
  },
  timelineTableContain: {
    position: "relative",
  },
  timelineTableDetails: {
    position: 'absolute',
    bottom: 1,
    left: 27
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
    paddingLeft: 10,
    paddingBottom: 10,
    fontFamily: 'CHIBOLD',
    color: "#623F34",
    fontSize: 8,
    textAlign: 'left'
  },
  insuCheckBox: {
    position: 'absolute',
    bottom: 110,
    right: 78,
    display: 'flex',
    alignItems: 'center'
  },
  rateingText: {
    position: 'absolute',
    bottom: 96,
    right: 176,
    fontFamily: 'CHIBOLD',
    color: '#623F34',
    fontSize: 12
  },
  dropDownSelect: {
    borderStyle: "solid"
  },
  monstersFilterSelectArrow: {
    position: "absolute",
    top: '50%',
    right: 8,
    transform: "translateY(-50%)",
    [th.breakpoints.down("sm")]: {
      width: "15px"
    },
    width: 15
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
  dropDownInput: {
    padding: "0px 10px",
    backgroundColor: "#d2c0a8",
    borderRadius: "30px",
    border: "2px solid #95543C",
    color: "#95543C",
    outline: "none",
    width: "100%",
    height: "100%",
    fontSize: 10,
    boxSizing: "border-box",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    textIndent: "1px",
    textOverflow: '',
    "&::placeholder": {
      color: "#fff",
    },
    "&::focus": {
      outline: "none",
    },
    [th.breakpoints.down("sm")]: {
      padding: "3px 11px",
    },
  },
  dropDownContain: {
    width: 80,
    height: 25,
    marginLeft: 10
  }
}));

export default function TimelineBattel2({ openModal, setIsOpenBattel1Modal }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isCheckBox, setIsCheckBox] = React.useState(false);
  const theme = useTheme();

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
          <div className={`${classes.leftArrowIcon} timeline_left_arrow`}>
            <img src={LeftArrow} />
            <span className={`${classes.backBtn} back_btn`}>BACK</span>
          </div>
          <div className={`${classes.searchingContain} timeline_search`}>
            <span className={`${classes.swicthMonsterText} search_text font_proxima_nova`}>Switch monster?</span>
            <input
              className={`${classes.searchingInput} input_searching font_proxima_nova`}
              type="text"
              placeholder="Search by Monster Name, Level or Id"
            />
          </div>
          <div className={`${classes.branchImgContant} branch_vani_img`}>
            <img className={classes.modalImg} src={BranchImg} />
          </div>
          <div className={`${classes.blockText} timline_battel_block`}>
            BLOCK 9131435
          </div>
          <div className={`${classes.modalHeader} timeline_header_text`}>BATTLE STARTS</div>
          <img className={classes.modalImg} src={TimelineBattel1Bg} />
          <Grid container spacing={3} className={`${classes.timelineTable} timeline_battel_table`}>
            <Grid item xs={6} sm={6}>
              <Paper className={`${classes.paper}`}>
                <div className={`${classes.monsterImg} ${classes.justCenter} timeline_monster_icon`}>
                  <img className={classes.modalImg} src={TimelineMonster} />
                </div>
                <div className={classes.timelineTableContain}>
                  <div className={`${classes.timelineTableBg} timeline_table_bg`}>
                    <img className={classes.modalImg} src={Tablegroup} />
                  </div>
                  <div className={`${classes.timelineTableDetails} timeline_details`}>
                    <table>
                      {battelDetail.map((b) => {
                        return (
                          <tr>
                            <td className={`${classes.tableName} table_name`}>{b.name}</td>
                            <td className={`${classes.tableText} table_text`}>{b.value}</td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </Paper>
            </Grid>
            <span className={`${classes.timelineIcon} timline_icon`}>
              <img src={TimelineSmallIcon} />
            </span>
            <Grid item xs={6} sm={6}>
              <Paper className={classes.paper}>
                <div className={`${classes.monsterImg} ${classes.justCenter} timeline_monster_icon`}>
                  <img className={classes.modalImg} src={TimelineMonster} />
                </div>
                <div className={classes.timelineTableContain}>
                  <div className={`${classes.timelineTableBg} timeline_table_bg`}>
                    <img className={classes.modalImg} src={Tablegroup} />
                  </div>
                  <div className={`${classes.timelineTableDetails} timeline_details`}>
                    <table>
                      {battelDetail.map((b) => {
                        return (
                          <tr>
                            <td className={`${classes.tableName} table_name`}>{b.name}</td>
                            <td className={`${classes.tableText} table_text`}>{b.value}</td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <div className={`${classes.insuCheckBox} insu_contain`}>
            <CustomCheckBox
              onChange={() => setIsCheckBox(!isCheckBox)}
              name={'insurance'}
              value={isCheckBox}
              label={"INSURANCE :"}
              labelPlacement={"start"}
            />
            <div className={`${classes.dropDownContain} drop_down_contain`}>
              <select className={`${classes.dropDownInput} ${classes.dropDownSelect}`} >
                <option>Select</option>
                <option selected>1 ETH</option>
                <option>1 ETH</option>
              </select>
              <img className={classes.monstersFilterSelectArrow} src={DownArrow} alt="" />
            </div>
          </div>
          <div className={`${classes.rateingText} rateing_text`}>
            KILL RATE: 20%
          </div>
          <Grid
            item
            className={`${classes.nextButtonContainer} timeline_next_btn`}
          >
            <span className={classes.buttonTextMenu}>&nbsp;BEGIN&nbsp;</span>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
