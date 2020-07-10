import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

//component

//image
import i1 from '../public/images/icon1.svg';
import i2 from '../public/images/icon2.svg';
import p from '../public/images/p.png';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '10px 20px'
    },
    button: {
        color: 'white',
        backgroundColor: '#0078C5',
        border: '1px solid transparent',
        borderRadius: '100px',
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '24px',
        position: 'relative',
        textDecoration: 'none',
        padding: '12px 30px',
        textTransform: 'unset',
        marginBottom: 48,
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        '&:hover': {
            backgroundColor: '#0b64a4'
        }
    },
    phone: {
        '&::after': {
            content: `url(${p})`,
            // position: 'absolute',
            fontSize: 14,
            display: 'inline-block',
            color: 'currentColor',
            fontWeight: 400,
            // paddingTop: 6,
            paddingRight: 5,
            float: 'left'
        }
    },
    navButtonsLeft: {
        color: 'rgb(38, 38, 38)',
        fontSize: 14,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontWeight: 400,
        lineHeight: '14px',
        '&:hover': {
            borderBottom: '1px solid black'
        }
    },
    buttonDiv: {
        padding: '0px 10px',
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography style={{ textAlign: 'center', margin: '20px 0px 10px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', fontSize: 40, fontWeight: 700, lineHeight: '48px', color: 'rgb(43, 44, 51)' }}>
                Try Skype in your browser
            </Typography>
            <Typography style={{ textAlign: 'center', margin: '0px 0px 10px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', fontSize: 15, fontWeight: 400, lineHeight: '22px', color: 'rgb(43, 44, 51)' }}>
                No installations needed.
            </Typography>
            <div style={{ fontSize: 16, textAlign: 'center' }}>
                <img src={i1} style={{ width: 50, marginRight: 20, marginLeft: 5 }} />
                <img src={i2} style={{ width: 50, marginRight: 5, marginLeft: 10 }} />
            </div>
            <div style={{ marginTop: 20, paddingBottom: 10, textAlign: 'center' }}>
                <Button
                    className={classes.button}
                >
                    <span>
                        Chat now
                    </span>
                </Button>
            </div>
            <div style={{ padding: '0px 20px' }}>
                <Grid container style={{ padding: '0 5%' }}>
                    <Grid item xs={12} sm={6} style={{display: 'flex'}}>
                        <div className={classes.buttonDiv}>
                            <a style={{ cursor: 'pointer' }}>
                                <span className={classes.navButtonsLeft} >
                                    Facebook
                        </span>
                            </a>
                        </div>
                        <div className={classes.buttonDiv}>
                            <a style={{ cursor: 'pointer' }}>
                                <span className={classes.navButtonsLeft} >
                                    Twitter
                        </span>
                            </a>
                        </div>
                        <div className={classes.buttonDiv}>
                            <a style={{ cursor: 'pointer' }}>
                                <span className={classes.navButtonsLeft} >
                                    Youtube
                        </span>
                            </a>
                        </div>
                        <div className={classes.buttonDiv}>
                            <a style={{ cursor: 'pointer' }}>
                                <span className={classes.navButtonsLeft} >
                                    Blogs
                        </span>
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography style={{ textAlign: 'right', lineHeight: '1px', paddingRight: 24 }}>
                            <span className={classes.phone} style={{ display: 'inline-block', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', fontSize: '14.4px', fontWeight: 700, lineHeight: '15px', color: 'rgb(43, 44, 51)' }}>
                                No emergency calls with Skype
                            </span>
                            <br />
                            <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', fontSize: 12, fontWeight: 400, lineHeight: '15px', color: 'rgb(43, 44, 51)' }}>
                                Skype is not a replacement for your telephone and can't be used for emergency calling
                            </span>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div style={{height: 50}}></div>
        </div>
    )
}