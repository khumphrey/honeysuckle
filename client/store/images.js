import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_IMAGES = 'GET_IMAGES'

/**
 * INITIAL STATE
 */
const defaultImages = [ 
      {src: '/brightsun.jpg'},
      {src: '/city.jpg'},
      {src: '/montains.jpg'},
      {src: '/underwater.jpg'}]

/**
 * ACTION CREATORS
 */
const getImages = images => ({type: GET_IMAGES, images})

/**
 * THUNK CREATORS
 */
// export const fetchImages = () =>
//   dispatch =>
//     Promise.all([
//       axios.get('/brightsun.jpg'),
//       axios.get('/city.jpg'),
//       axios.get('/montains.jpg'),
//       axios.get('/underwater.jpg')
//       ])
//       .then(responses => dispatch(getImages(responses.map(res => res.data))))
//       .catch(err => console.log(err))

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
