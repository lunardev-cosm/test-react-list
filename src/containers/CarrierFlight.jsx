import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CarrierFlightSelect from '../components/CarrierFlightSelect.jsx';
import CarrierFlightList from '../components/CarrierFlightList.jsx';

import * as carrierFlightActions from '../actions/CarrierFlightActions';

class CarrierFlight extends React.Component {

    constructor(props) {
        super(props);

        this.props.carrierFlightActions.loadFlights();
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        const { carrier, flights } = this.props;
        const { initialize, setCarrier } = this.props.carrierFlightActions;

        return (
            <div className="b-carrier-flight">
                <CarrierFlightSelect carrier={carrier} flights={flights} setCarrier={setCarrier}/>
                <CarrierFlightList carrier={carrier} flights={flights}/>
            </div>
        );
    }
}

/**
 *
 * @param state
 * @returns {{carrier: (*|string), flights: (*|Array)}}
 */
function mapStateToProps(state) {
    return {
        carrier: state.carrierFlight.carrier,
        flights: state.carrierFlight.flights
    }
}

/**
 *
 * @param dispatch
 * @returns {{carrierFlightActions: (A|B|M|N)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        carrierFlightActions: bindActionCreators(carrierFlightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarrierFlight);