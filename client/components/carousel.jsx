import React from 'react';
import {connect} from 'react-redux'
import {Arrow, CarouselText, Carousel, CarouselImageContainer, CarouselImage, Circle, CircleContainer, CarouselCenterContainer} from './styled'


class CarouselComponent extends React.Component {
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
    this.setState({counter})
    if (shouldReset) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(this.incrementCounter, 5000)
    }
  }

  render = () => {
  	const {images} = this.props
  	return (
			<Carousel>
			  <CarouselImageContainer className="carousel-image-container">
			  {
			    images.map((image,i) => {
			      const classes = i === this.state.counter ? '' : 'hidden';
			      return <CarouselImage key={i} className={classes} src={image.src} />
			    })
			  }
			  </CarouselImageContainer>
			  <CarouselCenterContainer>
			    <Arrow onClick={() => this.incrementCounter(false, true)} className="fa fa-angle-left"></Arrow>
			    <CarouselText>
			      <h1>Honeysuckle Estates: Country Living</h1>
			      <h2>Learn More</h2>
			    </CarouselText>
			    <Arrow onClick={() => this.incrementCounter(true, true)} className="fa fa-angle-right"></Arrow>
			  </CarouselCenterContainer>
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

const mapState = ({images}) => ({images})
const mapDispatch = null

export default connect(mapState, mapDispatch)(CarouselComponent)