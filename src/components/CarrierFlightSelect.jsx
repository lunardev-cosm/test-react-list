import React from 'react';

class CarrierFlightSelect extends React.Component {

    constructor(props) {
        super(props);

        this.setCarrier = this.setCarrier.bind(this);
    }

    setCarrier(event) {
        this.props.setCarrier(event.target.value);
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        const {carrier, flights} = this.props;

        let flightsOptions = [];

        flights.map(flight => {
            if (flightsOptions.indexOf(flight.carrier) === -1) {
                flightsOptions.push(flight.carrier);
            }
        });

        return (
            <select onChange={this.setCarrier}>
                <option value="">-- Все авиакомпании --</option>
                {flightsOptions.map(flight => {
                    return (
                        <option key={flight} value={flight}>{flight}</option>
                    );
                })}
            </select>
        );
    }
}

export default CarrierFlightSelect;