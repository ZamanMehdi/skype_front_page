import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

//component
import CardsSlider from './cardsSlider';

//image
import pic from '../public/images/pic1.png';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '30px 30px'
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography style={{ textAlign: 'center', margin: '20px 0px 30px', padding: '30px 20px 10px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', fontSize: 40, fontWeight: 700, lineHeight: '48px', color: 'rgb(43, 44, 51)' }}>
                Discover more features
            </Typography>
            <CardsSlider />
        </div>
    )
}