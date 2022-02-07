import React from "react";
import { makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import Partners from "./HomeComponents/Partners";
import BlockChain from "./HomeComponents/BlockChain";
import DNABlockChain from "./HomeComponents/DNABlockChain";
import YourMonsters from "./HomeComponents/YourMonsters";
import HowItWorks from "./HomeComponents/HowItWorks";
import Carousel from "./HomeComponents/Carousel";

const useStyles = makeStyles(() => ({
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Carousel />
            <DNABlockChain />
            <YourMonsters />
            <HowItWorks />
            <BlockChain />
            <Partners />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
