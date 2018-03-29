import * as React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {LeftArrow, RightArrow, CarouselText, Carousel, CarouselImageContainer, CarouselImage} from './styled'

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

  incrementCounter = (isInc = true, shouldReset) => {

    let counter = this.state.counter;
    const totalLength = this.props.images.length;

    if (isInc) counter = ++counter % totalLength;
    else if (counter) counter--;
    else counter = totalLength - 1; 
    this.setState({counter})
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
            const classes = i === this.state.counter ? 'carousel-image' : 'carousel-image hidden';
            return <CarouselImage key={i} className={classes} src={image.src} />
          })
        }
        </CarouselImageContainer>
        <LeftArrow onClick={this.incrementCounter.bind(this, false, true)}>
          <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
        </LeftArrow>
        <RightArrow onClick={this.incrementCounter.bind(this, true, true)}>
          <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
        </RightArrow>
      </Carousel>
      )
  }
}

/**
 * CONTAINER
 */
const mapState = ({user, images}) => ({
  isLoggedIn: !!user.id,
  images
})

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}


