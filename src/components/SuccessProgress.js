import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import theme from "../styles/global";

const useStyle = makeStyles((th) => ({
    rootContainer: {

    },
    root: {
        width: "100%",
        position: "relative"
    },
    itemProgress: {
        borderRadius: 24,
        position: "absolute",
    },
    allProgress: {
        backgroundColor: "#000",
        borderRadius: 24,
        width: "100%",
        zIndex: 1,
        position: "absolute"
    },
    measureText: {
        color: "#fff",
        fontFamily: theme.font.heading,
        fontSize: "1rem",
        margin: "10px 0"
    },
    rootContainer: {

    },
    pointText: {
        fontFamily: theme.font.heading,
        fontSize: 12,
        letterSpacing: 1,
        color: "#623F34"
    }
}));

const SuccessProgress = () => {
    const classes = useStyle();
    const progresses = [
        {
            color: "#64AA4D",
            progress: 50,
            title: "BASE SUCCESS RATE"
        },
        {
            color: "#7E4DAA",
            progress: 20,
            title: "SUPPORT BOOST"
        },
        {
            color: "#F7B541",
            progress: 20,
            title: "ETH BOOST"
        }
    ];
    const giveStylesOfMeasures = (index) => {
        switch(index) {
            case 1:
                return {
                    marginRight: "12.5%"
                };
            case 2:
                return {
                    marginRight: "10%"
                };
            default:
                return {};
        }
    };
    const getProgressMeasures = (index) => {
        let totalWidth = 0;
        if (index === 0) return progresses[0].progress;
        for (let i = 0; i <= index; i++) {
            totalWidth += progresses[i].progress;
        }
        return totalWidth;
    };
    return (
        <div className={classes.rootContainer}>
            <div>
                <div className={classes.root}>
                    {
                        progresses.map((item, index) => {
                            return (
                                <div key={index} className={classes.itemProgress} style={{ width: `${getProgressMeasures(index)}%`, zIndex: 4 - index, backgroundColor: item.color }}>
                                    <p className={classes.measureText} align={index === 0 ? "center" : "right"} style={giveStylesOfMeasures(index)}>
                                        {item.progress}%
                                    </p>
                                </div>
                            )
                        })
                    }
                    <div className={classes.allProgress}><p className={classes.measureText}>&nbsp;</p></div>
                </div>
            </div>
            <div style={{ position: "relative" }}>
                <Grid container spacing={1} style={{ position: "absolute", top: "3.5rem" }}>
                    {
                        progresses.map((item, index) => {
                            return (
                                <Grid item key={index} style={{ minWidth: "40%", display: "flex" }}>
                                    <span className={classes.pointIcon}>
                                        <FiberManualRecordIcon style={{ color: item.color, fontSize: 12, margin: "auto 0" }} />
                                    </span>
                                    <span className={classes.pointText}>
                                        &nbsp;{item.title}
                                    </span>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    );
};

export default SuccessProgress;
