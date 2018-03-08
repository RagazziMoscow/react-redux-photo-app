import { GET_PHOTOS_REQUEST, GET_PHOTOS_REQUEST_SUCCESS} from "../constants/page";

const initialState = {
    year: 2016,
    photos: [],
    loading: false
};

export default function user(state = initialState, action) {
    switch (action.type) {

        case GET_PHOTOS_REQUEST:
          return { ...state, year: action.payload, loading: true }

        case GET_PHOTOS_REQUEST_SUCCESS:
          return { ...state, photos: action.payload, loading: false }
    
        default:
          return state;
      }
}