import axios from 'axios'
import history from '../history'

const GET_IMAGES = 'GET_IMAGES'

const defaultImages = [ 
      {src: '/brightsun.jpg'},
      {src: '/city.jpg'},
      {src: '/montains.jpg'},
      {src: '/underwater.jpg'}]

const getImages = images => ({type: GET_IMAGES, images})

export default function (state = defaultImages, action) {
  switch (action.type) {
    case GET_IMAGES:
      return action.images
    default:
      return state
  }
}
