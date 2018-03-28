import * as React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Home = ({ isLoggedIn, images }) => (
  <div id="carousel">
   <section >
      <div id="carousel-text">
        <h1>Honeysuckle Estates: Country Living</h1>
        <h2>Learn More</h2>
      </div>
      <img class="carousel-image" src="images/bg/montains.jpg" />
      <img class="carousel-image hidden" src="images/bg/city.jpg" />
      <img class="carousel-image hidden" src="images/bg/underwater.jpg" />
      <img class="carousel-image hidden" src="images/bg/brightsun.jpg" />
    </section>   
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id,
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
