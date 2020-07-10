import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container, Grid, Paper } from '@material-ui/core';
// import { Link } from 'react-router-dom';

const styles = theme => ({
    title: {
        flexGrow: 1,
    },
    appbar: {
        height: 'auto',
        [theme.breakpoints.up('md')]: {
            height: 'auto'
        },
    },
    developBy: {
        [theme.breakpoints.up('md')]: {
            float: 'right'
        },
    },
    bottomAppbar: {
        height: 150,
        [theme.breakpoints.up('md')]: {
            height: 70
        },
    },
    liStyle: {
        '&:hover': {
            color: 'rgb(255, 163, 58)'
        }
    },
    navButtonsLeft: {
        color: 'rgb(0, 0, 0.9)',
        fontSize: 11,
        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 400,
        lineHeight: '16px',
        display: 'inline-block',
        '&:hover': {
            borderBottom: '1px solid black'
        }
    },
    buttonDiv: {
        padding: '8px 0px',
    },
    buttonDivBottom: {
        padding: '0px 10px',
    },
});

class Footer extends React.Component {

    render() {
        const { classes, appBarCategories } = this.props;

        return (
            <React.Fragment>
                <AppBar style={{ backgroundColor: 'rgb(242, 242, 242)' }} className={classes.appbar} position='static'>
                    <Toolbar style={{ marginTop: 30 }}>
                        <Container maxWidth='lg'>
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={2} xl={2}>
                                    <Typography style={{ padding: '36px 0px 4px', color: 'rgb(97, 97, 97)', fontFamily: ' "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 15, fontWeight: 700, lineHeight: '20px' }} variant="h6" className={classes.title}>
                                        What's new
                                    </Typography>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Surface Go 2
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Surface Book 3
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Microsoft 365
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Surface Pro X
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Windows 10 apps
                                            </span>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2}>
                                    <Typography style={{ padding: '36px 0px 4px', color: 'rgb(97, 97, 97)', fontFamily: ' "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 15, fontWeight: 700, lineHeight: '20px' }} variant="h6" className={classes.title}>
                                        Microsoft Store
                                    </Typography>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Account profile
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Download Center
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Microsoft Store support
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Returns
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Order tracking
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Store locations
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Buy online, pick up in store
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Virtual workshops and training
                                            </span>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2}>
                                    <Typography style={{ padding: '36px 0px 4px', color: 'rgb(97, 97, 97)', fontFamily: ' "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 15, fontWeight: 700, lineHeight: '20px' }} variant="h6" className={classes.title}>
                                        Education
                                    </Typography>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Microsoft in education
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Office for students
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Office 365 for schools
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Deals for students & parents
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Microsoft Azure in education
                                            </span>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2}>
                                    <Typography style={{ padding: '36px 0px 4px', color: 'rgb(97, 97, 97)', fontFamily: ' "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 15, fontWeight: 700, lineHeight: '20px' }} variant="h6" className={classes.title}>
                                        Enterprise
                                    </Typography>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Azure
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                AppSource
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Automotive
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Government
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Healthcare
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Manufacturing
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Financial services
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Retail
                                            </span>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2}>
                                    <Typography style={{ padding: '36px 0px 4px', color: 'rgb(97, 97, 97)', fontFamily: ' "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 15, fontWeight: 700, lineHeight: '20px' }} variant="h6" className={classes.title}>
                                        Developer
                                    </Typography>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Microsoft Visual Studio
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Windows Dev Center
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Developer Network
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                TechNet
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Microsoft developer program
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Channel 9
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Office Dev Center
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Microsoft Garage
                                            </span>
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={2} xl={2}>
                                    <Typography style={{ padding: '36px 0px 4px', color: 'rgb(97, 97, 97)', fontFamily: ' "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: 15, fontWeight: 700, lineHeight: '20px' }} variant="h6" className={classes.title}>
                                        Company
                                    </Typography>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Careers
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                About Microsoft
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Company news
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Privacy at Microsoft
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Investors
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Diversity and inclusion
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Accessibility
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDiv}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Security
                                            </span>
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
                <AppBar className={classes.bottomAppbar} style={{ backgroundColor: 'rgb(242, 242, 242)', boxShadow: 'none', height: '100%' }} position='static'>
                    <Toolbar>
                        <Container maxWidth='lg'>
                            <br />
                            <Grid container spacing={3} style={{ marginTop: 20 }}>
                                <Grid item md={5} lg={5} xs={12}>
                                    {/* <Typography style={{ float: 'left' }}>
                                        <select aria-label="Select page language" title="" name="userLanguage" id="userLanguage" class="userLanguage" data-sc="lang_selector">
                                             <option aria-label="English" label="English" value="en" lang="en" selected="selected">English</option>
                                             <option aria-label="عربي" label="عربي" value="ar" lang="ar">عربي</option>
                                             <option aria-label="Български" label="Български" value="bg" lang="bg">Български</option>
                                             <option aria-label="Česky" label="Česky" value="cs" lang="cs">Česky</option>
                                             <option aria-label="Dansk" label="Dansk" value="da" lang="da">Dansk</option>
                                             <option aria-label="Deutsch" label="Deutsch" value="de" lang="de">Deutsch</option>
                                             <option aria-label="Ελληνικά" label="Ελληνικά" value="el" lang="el">Ελληνικά</option>
                                             <option aria-label="Español" label="Español" value="es" lang="es">Español</option>
                                             <option aria-label="Eesti" label="Eesti" value="et" lang="et">Eesti</option>
                                             <option aria-label="Suomi" label="Suomi" value="fi" lang="fi">Suomi</option>
                                             <option aria-label="Français" label="Français" value="fr" lang="fr">Français</option>
                                             <option aria-label="עברית" label="עברית" value="he" lang="he">עברית</option>
                                             <option aria-label="हिन्दी" label="हिन्दी" value="hi" lang="hi">हिन्दी</option>
                                             <option aria-label="Magyar" label="Magyar" value="hu" lang="hu">Magyar</option>
                                             <option aria-label="Bahasa Indonesia" label="Bahasa Indonesia" value="id" lang="id">Bahasa Indonesia</option>
                                             <option aria-label="Italiano" label="Italiano" value="it" lang="it">Italiano</option>
                                             <option aria-label="日本語" label="日本語" value="ja" lang="ja">日本語</option>
                                             <option aria-label="한국어" label="한국어" value="ko" lang="ko">한국어</option>
                                             <option aria-label="Nederlands" label="Nederlands" value="nl" lang="nl">Nederlands</option>
                                             <option aria-label="Norsk" label="Norsk" value="no" lang="no">Norsk</option>
                                             <option aria-label="Polski" label="Polski" value="pl" lang="pl">Polski</option>
                                             <option aria-label="Português" label="Português" value="pt" lang="pt">Português</option>
                                             <option aria-label="Português (Brasil)" label="Português (Brasil)" value="pt-br" lang="pt-br">Português (Brasil)</option>
                                             <option aria-label="Română" label="Română" value="ro" lang="ro">Română</option>
                                             <option aria-label="Русский" label="Русский" value="ru" lang="ru">Русский</option>
                                             <option aria-label="Svenska" label="Svenska" value="sv" lang="sv">Svenska</option>
                                             <option aria-label="Türkçe" label="Türkçe" value="tr" lang="tr">Türkçe</option>
                                             <option aria-label="Українська" label="Українська" value="uk" lang="uk">Українська</option>
                                             <option aria-label="中文（简体)" label="中文（简体)" value="zh-Hans" lang="zh-Hans">中文（简体)</option>
                                             <option aria-label="中文 (繁體)" label="中文 (繁體)" value="zh-Hant" lang="zh-Hant">中文 (繁體)</option> 
                                             </select>
                                    </Typography> */}
                                </Grid>
                                <Grid item md={7} lg={7} xs={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 20 }}>
                                    {/* <Typography className={classes.developBy} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        © Microsoft 2020
                                    </Typography> */}
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Sitemap
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Contact us
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Privacy & cookies
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Terms of use
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Trademarks
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                About our ads
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                Legal
                                            </span>
                                        </a>
                                    </div>
                                    <div className={classes.buttonDivBottom}>
                                        <a style={{ cursor: 'pointer' }}>
                                            <span className={classes.navButtonsLeft} >
                                                © Microsoft 2020
                                            </span>
                                        </a>
                                    </div>
                                    {/* <Typography className={classes.navButtonsLeft} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                    </Typography>
                                    <Typography className={classes.navButtonsLeft} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        Contact us
                                    </Typography>
                                    <Typography className={classes.navButtonsLeft} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        Privacy & cookies
                                    </Typography>
                                    <Typography className={classes.navButtonsLeft} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        Terms of use
                                    </Typography>
                                    <Typography className={classes.navButtonsLeft} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        Trademarks
                                    </Typography>
                                    <Typography className={classes.navButtonsLeft} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        About our ads
                                    </Typography>
                                    <Typography className={classes.navButtonsLeft} style={{
                                        color: 'rgb(0, 0, 0.9)', fontSize: 11,
                                        fontFamily: '"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        Legal
                                    </Typography> */}
                                </Grid>
                            </Grid>
                            <br />
                        </Container>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Footer);
