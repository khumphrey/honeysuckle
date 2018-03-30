import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {LeftArrow, RightArrow, CarouselText, Carousel, CarouselImageContainer, CarouselImage, Circle, CircleContainer} from './styled'

class Home extends React.Component {
  state = {
    counter: 0
  }
  componentDidMount = () => {
    this.intervalId = setInterval(this.incrementCounter, 5000)
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  }

  incrementCounter = (isInc = true, shouldReset, i = false) => {

    let counter = this.state.counter;
    const totalLength = this.props.images.length;

    if (i !== false) counter = i;
    else if (isInc) counter = ++counter % totalLength;
    else if (counter) counter--;
    else counter = totalLength - 1; 
    this.setState({counter}, () => console.log('STATE ', this.state))
    if (shouldReset) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(this.incrementCounter, 5000)
    }
  }
  render = () => {
    const {isLoggedIn, images} = this.props;
    return (
      <Carousel>
        <CarouselText>
          <h1>Honeysuckle Estates: Country Living</h1>
          <h2>Learn More</h2>
        </CarouselText>
        <CarouselImageContainer className="carousel-image-container">
        {
          images.map((image,i) => {
            const classes = i === this.state.counter ? '' : 'hidden';
            return <CarouselImage key={i} className={classes} src={image.src} />
          })
        }
        </CarouselImageContainer>
        <LeftArrow onClick={() => this.incrementCounter(false, true)} className="fa fa-angle-left"></LeftArrow>
        <RightArrow onClick={() => this.incrementCounter(true, true)} className="fa fa-angle-right"></RightArrow>
        <CircleContainer>
        {
          images.map((image, i) => {
            const classes = i === this.state.counter ? 'fa active' : 'fa';
            return <Circle key={i} className={classes} onClick={() => this.incrementCounter(false, true, i)}></Circle>
          })
        }
        </CircleContainer>
      </Carousel>
      )
  }
}

/**
 * CONTAINER
 */
const mapState = ({images}) => ({
  images
})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(Home)

