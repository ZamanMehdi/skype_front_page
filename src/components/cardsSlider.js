import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

//css
import './cardsSlider.css';

function CardData() {
  const rtn = [{
    title: "Download the new browser recommended by Microsoft",
    desc: "You get it all with the new Microsoft Edge—performance, compatibility, and speed to make browsing the web even more effortless.",
    url: "https://secure.skypeassets.com/content/dam/scom/home-new/features-cards/1920x1080_landscape_edge.jpg",
    link: 'Download now >'
  }, {
    title: "Live subtitles",
    desc: "Read the words that are spoken during an audio or video call.",
    url: "https://secure.skypeassets.com/content/dam/scom/home/features/livesubtitles.jpg",
    link: 'How to set subtitles >'
  }, {
    title: "Use Skype to call phones",
    desc: "Call landlines and mobiles from anywhere in the world at great low rates using Skype.",
    url: "https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-rates.jpg",
    link: 'See our rates >'
  }, {
    title: "Skype call recording​",
    desc: "Capture those special moments in a Skype call with your loved ones or record important meeting with colleagues.​",
    url: "https://secure.skypeassets.com/content/dam/scom/home/features/features-call-recording.jpg",
    link: 'How to record calls >'
  }, {
    title: "Skype Number",
    desc: "Get a local phone number in another country or region and answer calls on Skype.",
    url: "https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg",
    link: 'Get your number >'
  }, {
    title: "Mobile screen sharing",
    desc: "Share anything from presentations to holiday photos during a call.",
    url: "https://secure.skypeassets.com/content/dam/scom/home/features/mobile-screen-sharing.jpg",
    link: 'Discover screen sharing >'
  }, {
    title: "Video calling for 50 people",
    desc: "Experience HD one to one or group video calling—now with call reactions.​",
    url: "https://secure.skypeassets.com/content/dam/scom/home/features/hdcall.jpg",
    link: 'Explore video calls >'
  }]
  return rtn;
}

const styles = theme => ({

  link: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '23.9999px',
    marginBottom: 0,
    color: '#0e78c8',
    display: 'inline-block',
    position: ' absolute',
    width: '50%',
    bottom: '50px',
    '&:hover': {
      borderBottom: '1px solid black',
      color: 'black'
    }
  }
});

class Cards extends React.Component {
  render() {
    const cardData = CardData();
    return (
      <section>
        {
          cardData.map((card, i) => {
            return (
              <div className="card" id="card" style={{ ...this.props.cardStyle, filter: i === 3 && this.props.currentCard === 0 ? 'opacity(0.2)' : i === 4 && this.props.currentCard === 1 ? 'opacity(0.2)' : i === 5 && this.props.currentCard === 2 ? 'opacity(0.2)' : i === 6 && this.props.currentCard === 3 ? 'opacity(0.2)' : null, width: 320, maxWidth: 320, height: 515, maxHeight: 515, marginRight: 30, padding: 0, borderRadius: '0 20px 20px 20px', border: '1px solid #e5e4e8' }} key={i}>
                <CardMedia
                  style={{ height: 180, maxWidth: 320 }}
                  image={card.url}
                  title={card.title}
                />
                <div style={{
                  padding: '40px 40px 50px',
                  display: 'inline-block',
                  height: 'calc(100% - 270px)'
                }}>
                  <p className="desc" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: '23.9999px',
                    marginBottom: '1.66667em'
                  }}>{card.title}</p>
                  <p className="desc" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: '23.9999px',
                    marginBottom: '1.66667em'
                  }}>{card.desc}</p>
                  <p className={this.props.classesProp.link}>
                    <span>
                      {card.link}
                    </span>
                  </p>
                  <a href="#">
                  </a>
                </div>
              </div>
            )
          })
        }
      </section >
    )
  }
}

class Display extends React.Component {
  state = {
    currentCard: 0,
    position: 0,
    cardStyle: {
      transform: 'translateX(0px)'
    },
    width: 0,
  };

  componentDidMount() {
    // let boxWidth = document.getElementById("card");
    let boxWidth = 340;
    if (boxWidth) {
      // boxWidth = boxWidth.clientWidth;
      boxWidth = 340;
      this.setState({ width: boxWidth });
    }
  }
  
  componentDidUpdate(prevState) {
    if (prevState.width === this.state.width) {
      // let boxWidth = document.getElementById("card");
      let boxWidth = 340;
      if (boxWidth) {
        // boxWidth = boxWidth.clientWidth;
        boxWidth = 340;
        this.setState({ width: boxWidth });
      }
    }
  }

  // func: click the slider buttons
  handleClick(type) {
    // get the card's margin-right
    // let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
    let margin = 20;
    // margin = JSON.parse(margin.replace(/px/i, ''));

    const cardWidth = this.state.width; // the card's width
    const cardMargin = margin; // the card's margin
    const cardNumber = CardData().length; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    // slide cards
    if (type === 'next' && currentCard < cardNumber - 1) {
      currentCard++;
      position -= (cardWidth + cardMargin);
    } else if (type === 'prev' && currentCard > 0) {
      currentCard--;
      position += (cardWidth + cardMargin);
    }
    this.setCard(currentCard, position);
  }

  setCard(currentCard, position) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}px)`
      }
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="cards-slider" style={{ backgroundColor: 'white', padding: 10, border: '0px solid black', boxShadow: 'none' }}>
        <div className="slider-btns">
          {console.log(this.state.currentCard, CardData().length)}
          {this.state.currentCard === 0 ? null : <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>}
          {this.state.currentCard === CardData().length - 3 ? null : <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>}
        </div>
        <Cards cardStyle={this.state.cardStyle} classesProp={classes} currentCard={this.state.currentCard} />
      </div>
    )
  }
}

export default withStyles(styles)(Display);