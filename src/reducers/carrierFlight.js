import {
    SET_CARRIER,
    GET_FLIGHTS_REQUEST,
    GET_FLIGHTS_SUCCESS
} from '../constants/CarrierFlight';

const initialState = {
    carrier: "",
    flights: [],
    fetching: false
}

export default function carrierFlight(state = initialState, action) {

    switch (action.type) {
        case GET_FLIGHTS_REQUEST:
            return {
                carrier: state.carrier,
                flights: state.flights,
                fetching: true
            };
        case GET_FLIGHTS_SUCCESS:
            return {
                carrier: state.carrier,
                flights: action.payload,
                fetching: false
            };
        case SET_CARRIER:
            return {
                carrier: action.payload,
                flights: state.flights,
                fetching: false
            };
        default:
            return state;
    }

}