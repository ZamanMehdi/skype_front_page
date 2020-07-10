import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


//image
import pic from '../public/images/pic1.png';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '10px 30px',
    },
    title: {
        fontSize: '40px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontWeight: 700,
        lineHeight: '48px',
        color: 'rgb(43, 44, 51)',
        marginBottom: 10
    },
    heading: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: '28px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontWeight: 700,
        lineHeight: '37.9999px',
        color: 'rgb(43, 44, 51)'
    },
    linkText: {
        fontSize: '15px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontWeight: 400,
        lineHeight: '15px',
        color: 'rgb(0, 111, 187)',
        textAlign: 'center'
    },
    navButtonsLeft: {
        color: 'rgb(38, 38, 38)',
        fontSize: 13,
        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 400,
        lineHeight: 'normal',
        '&:hover': {
            borderBottom: '2px solid black'
        }
    },
    buttonDiv: {
        padding: '0px 10px',
    },
    tile: {
        backgroundColor: '#f2f2f2',
        borderRadius: '0 20px 20px 20px'
    },
    media: {
        height: 0,
        paddingTop: '47.4%', // 16:9
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
        marginBottom: 17,
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        '&:hover': {
            backgroundColor: '#0b64a4'
        }
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.tile}>
                <Grid container>
                    <Grid item xs={12} sm={5} style={{ margin: '60px 0px 60px 60px', }}>
                        <div style={{ textAlign: 'left', marginRight: 40, display: 'block' }}>
                            <Typography className={classes.title}>
                                Meet Now on Skype
                            </Typography>
                            <Typography className={classes.heading}>
                                Host a video meeting in one click!
                                No sign ups. No downloads required.
                            </Typography>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <div style={{ display: 'inline-block', marginTop: 10 }}>
                                <Button
                                    // variant="extended"
                                    // size="medium"
                                    // color="primary"
                                    // aria-label="add"
                                    className={classes.button}
                                >
                                    <span>
                                        Create a free meeting
                                </span>
                                </Button>
                                <Typography className={classes.linkText}>
                                    or Download Skype
                            </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardMedia image={pic} className={classes.media} title={'Meeting on dektop device'} style={{ margin: '60px 60px 60px 0', width: '98%' }} />
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}