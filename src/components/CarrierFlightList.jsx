import React from 'react';

class CarrierFlightList extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        const {carrier, flights} = this.props;

        let carrierFlights = [];

        carrierFlights = flights.filter(flight => {
            return ["", flight.carrier].indexOf(carrier) !== -1;
        });

        return (
            <div>
                {carrierFlights.map(flight => {
                    return (
                        <div key={flight.id} className="b-carrier-flight__item">
                            <div className="b-carrier-flight__item-direction">
                                <span>{flight.direction.from}</span> - <span>{flight.direction.to}</span>
                            </div>
                            <div className="b-carrier-flight__item-datetime">
                                <span>{(new Date(flight.departure)).toLocaleString()}</span> -
                                <span>{(new Date(flight.arrival)).toLocaleString()}</span>
                            </div>
                            <div>{flight.carrier}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CarrierFlightList;