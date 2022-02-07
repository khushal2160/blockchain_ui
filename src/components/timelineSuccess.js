import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimelineBg from "../assets/images/timeline-success@2x.png";
import TimelineMonster from "../assets/images/timelineMons.png";
import PlayBG from "../assets/images/Play-Button.png";
import Close from "../assets/images/cross-slide-Left@2x.png";
import { useTheme } from "@material-ui/core/styles";
import theme from "../styles/global";


const useStyles = makeStyles((th) => ({
  menusContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
  },
  timelineModalBg: {
    background: "transparent",
    boxShadow: 'unset',
  },
  modalContant: {
    position: "relative",
  },
  monsterImgContant: {
    top: 110,
    right: 65,
    maxWidth: 170,
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
    padding: "17px 40px 40px 40px",
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
    bottom: '100px',
    left: '65px'
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
    left: 84,
    fontFamily: 'CHIBOLD',
    fontSize: 14,
    padding: 5,
    color: "#B18C5D"
  },
  modalHeader: {
    width: 160,
    position: 'absolute',
    top: 105,
    left: 80,
    fontFamily: 'CHIBOLD',
    fontSize: 30,
    padding: 5,
    color: "#623F34"
  },
  replayText: {
    position: 'absolute',
    top: 266,
    left: 153,
    width: 130,
    fontSize: 13,
    color: '#623F34',
    fontWeight: 'bold',
    lineHeight: 1
  },
  failReplayText: {
    bottom: 188,
    left: 95,
    color: '#623F34',
    width: 248,
    position: 'absolute',
    fontSize: 13
  },
  close: {
    height: 'auto',
    width: 70,
    position: 'absolute',
    right: 10,
    top: 10,
    cursor: 'pointer'
  }
}));

export default function TimelineSuccess({ openModal, setIsOpenModal, isSuccess=false, blockNumber='000000' }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return ( 
    <div>
      <Dialog
        open={openModal}
        onClose={() => setIsOpenModal(false)}
        aria-labelledby="responsive-dialog-title"
        classes={{ paper: classes.timelineModalBg }}
      >
        
        <div className={classes.modalContant}>
          <div onClick={() => setIsOpenModal(false)} className={`${classes.close} timeline_success_close`}><img className={classes.modalImg} src={Close}/></div>
        <div className={`${classes.blockText} success_block_text`}>BLOCK {blockNumber}</div>
        <div className={`${classes.modalHeader} timeline_success_header`}>
          {isSuccess ? `YOU HAVE SUCCESSFULLY CAUGHT MAIGI` : `YOU FAILED TO CATCH MAIGI`}
        </div>
        <div className={`${classes.replayText} replay_text font_proxima_nova`}>Watch the instant replay</div>
          <img className={classes.modalImg} src={TimelineBg} />
          
          <div className={`${classes.monsterImgContant} timeline_monster`}>
            <img
              className={`${classes.modalImg} monster_img`}
              src={TimelineMonster}
            />
            </div>
            {!isSuccess ? (
              <div className={`${classes.failReplayText} fail_desc`} >
                Unfortunately you didn't catch magigi this time, you can always add more BCMC
                to improve your success rate.
              </div>
            ) : ('') }
            
          <Grid item className={`${classes.bringButtonContainer} timeline_brgin_btn`}>
            <span className={`${classes.buttonTextMenu} timeline_monster_btn`}>
              {!isSuccess ? ` PURCHASE BCMC ` : ` VIEW MONSTER `}
            </span>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
