import { GET_PHOTOS_REQUEST, GET_PHOTOS_REQUEST_SUCCESS} from "../constants/page";

export function getPhotos(year) {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        });

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_REQUEST_SUCCESS,
                payload: [1, 2, 3, 4, 5]
            });
        }, 1000);
    }
}