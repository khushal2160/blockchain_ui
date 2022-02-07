import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimelineBattel1Bg from "../assets/images/timelineBattel1@2x.png";
import Close from "../assets/images/cross-slide-Left@2x.png";
import PlayBG from "../assets/images/button-header-play@2x.png";
import BattelMonster1 from "../assets/images/battel-monster-1@2x.png";
import BattelMonster2 from "../assets/images/battel-monster-2@2x.png";
import BattelMonster3 from "../assets/images/battel-monster-3@2x.png";
import BattelMonster4 from "../assets/images/battel-monster-4@2x.png";
import BattelMonster5 from "../assets/images/battel-monster-5@2x.png";
import BattelMonster6 from "../assets/images/battel-monster-6@2x.png";
import BattelMonster7 from "../assets/images/battel-monster-7@2x.png";
import BattelMonster8 from "../assets/images/battel-monster-8@2x.png";
import BattelMonster10 from "../assets/images/battel-monster-10@2x.png";
import BranchImg from "../assets/images/vine@2x.png";
import TimelineRectangle from "../assets/images/timeline-battelr-rectangle@2x.png";
import { useTheme } from "@material-ui/core/styles";
import theme from "../styles/global";


const useStyles = makeStyles((th) => ({
  timelineModalBg: {
    background: "transparent",
    boxShadow: 'none'
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
        height: 75
    },
    transition: "0.3s",
    "&:hover": {
        mixBlendMode: "hard-light",
        transform: "scale(1.05)",
    },
    position: 'absolute',
    bottom: '45px',
    left: '220px'
  },
  buttonTextMenu: {
    fontFamily: theme.font.heading,
    letterSpacing: 2,
    fontSize: 18,
    color: "#fff",
    textShadow: "1px 2px 4px rgb(0 0 128 / 50%)"
  },
  blockText: {
    position: 'absolute',
    top: 61,
    left: 85,
    fontFamily: 'CHIBOLD',
    fontSize: 14,
    padding: 5,
    color: "#B18C5D",
    backgroundColor: "rgb(177 140 93 / 21%)",
    padding: "8px 14px",
    borderRadius: "20px"
  },
  progressContant: {
    maxWidth: 275,
    position: 'absolute',
    bottom: 180,
    left: 62
  },
  close: {
    height: "auto",
    width: 70,
    position: "absolute",
    right: 10,
    top: 10,
    cursor: "pointer",
  },
  branchImgContant: {
    maxWidth: 280,
    height: 75,
    position: 'absolute',
    right: 95,
    top: 20
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
  paper: {
    textAlign: 'center',
    background: 'transparent',
    boxShadow: 'unset'

  },
  monsterDetail: {
    position: 'absolute',
    top: 170,
    padding: '0 75px'
  },
  monsterContain: {
    position: "relative",
  },
  monsterName: {
    position: 'absolute',
    top: 10,
    fontSize: 12,
    right: 12,
    fontFamily: 'CHIBOLD',
    color: "#623F34"
  },
  monsterImg: {
    width: 35,
    position: 'absolute',
    bottom: 0,
    left: -10,
  }
}));

export default function TimelineBattel1({openModal, setIsOpenBattel1Modal}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const monster = [
    {
      monsterUrl: BattelMonster1,
      name: 'INAGU (LUL 1)',
    },
    {
      monsterUrl: BattelMonster2,
      name: 'GORU (LUL 1)',
    },
    {
      monsterUrl: BattelMonster3,
      name: 'DOKI (LUL 1)'
    },
    {

      monsterUrl: BattelMonster4,
      name: 'INAGU (LUL 1)'
    },
    
    {
      monsterUrl: BattelMonster5,
      name: 'GORU (LUL 1)',
    },
    {
      monsterUrl: BattelMonster6,
      name: 'DOKI (LUL 1)',
    },
    {
      monsterUrl: BattelMonster7,
      name: 'INAGU (LUL 1)'
    },
    {

      monsterUrl: BattelMonster8,
      name: 'GORU (LUL 1)'
    },
    {
      monsterUrl: BattelMonster3,
      name: 'DOKI (LUL 1)',
    },
    {
      monsterUrl: BattelMonster10,
      name: 'INAGU (LUL 1)',
    },
    {
      monsterUrl: BattelMonster5,
      name: 'GORU (LUL 1)'
    },
    {

      monsterUrl: BattelMonster6,
      name: 'DOKI (LUL 1)'
    }
  ]

  return ( 
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        // open={open}
        open={openModal}
        onClose={() => setIsOpenBattel1Modal(false)}
        aria-labelledby="responsive-dialog-title"
        classes={{ paper: classes.timelineModalBg }}
      > 
        <div className={classes.modalContant}>
        <div onClick={() => setIsOpenBattel1Modal(false)} className={`${classes.close} battel1_close_icon`}>
            <img className={classes.modalImg} src={Close} />
        </div>
        <div className={`${classes.branchImgContant} branch_vani_img`}>
            <img className={classes.modalImg} src={BranchImg}/>
        </div>
        <div className={`${classes.blockText} timline_battel_block`}>BLOCK 9131435</div>
        <div className={`${classes.modalHeader} timeline_header_text`}>CHOOSE YOUR MONSTER</div>
          <img className={classes.modalImg} src={TimelineBattel1Bg} />
          <Grid container spacing={3} className={`${classes.monsterDetail} battel_monster_contain`}>
          {monster.map((m) => {
            return (
            <>
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  <div className={classes.monsterContain}>
                    <img className={classes.modalImg} src={TimelineRectangle}/>
                    <div className={`${classes.monsterImg} battel1_monster`}>
                      <img className={classes.modalImg} src={m.monsterUrl}/>
                    </div>
                    <div className={`${classes.monsterName} monster_name_text`}>
                      {m.name}
                    </div>
                  </div>
                </Paper>
              </Grid>
            </>
            )
          })}
          </Grid>
          <Grid item className={`${classes.nextButtonContainer} timeline_next_btn`}>
            <span className={classes.buttonTextMenu}>
                &nbsp;NEXT&nbsp;
            </span>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
