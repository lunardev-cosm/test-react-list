import {
    SET_CARRIER,
    GET_FLIGHTS_REQUEST,
    GET_FLIGHTS_SUCCESS
} from '../constants/CarrierFlight';
import load from '../../utils/load';

/**
 *
 * @returns {function(*)}
 */
export function loadFlights() {
    return (dispatch) => {

        dispatch({
            type: GET_FLIGHTS_REQUEST,
            payload: null
        });

        load('data.json').then(data => {
            dispatch({
                type: GET_FLIGHTS_SUCCESS,
                payload: JSON.parse(data).flights
            })
        });

    }
}

export function setCarrier(carrier) {
    return (dispatch) => {

        dispatch({
            type: SET_CARRIER,
            payload: carrier
        });

    }
}