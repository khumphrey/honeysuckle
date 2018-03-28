import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_IMAGES = 'GET_IMAGES'

/**
 * INITIAL STATE
 */
const defaultImages = []

/**
 * ACTION CREATORS
 */
const getImages = images => ({type: GET_IMAGES, images})

/**
 * THUNK CREATORS
 */
export const fetchImages = () =>
  dispatch =>
    Promise.all([
      axios.get('/public/brightsun.jpg')
      axios.get('/public/city.jpg')
      axios.get('/public/montains.jpg')
      axios.get('/public/underwater.jpg')
      ])
      .then(res => dispatch(getImages(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultImages, action) {
  switch (action.type) {
    case GET_IMAGES:
      return action.images
    default:
      return state
  }
}
