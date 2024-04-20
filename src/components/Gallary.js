import React, { useContext } from 'react';
import DestinationCard from './DestinationCard.js';
import { AppContext } from '../store/AppContext.js';

function Gallary() {
    const { app } = useContext(AppContext);
    const { cities } = app;

    let showCities = null;

    if (cities && cities.length > 0) {
        showCities = cities.map(city => <DestinationCard key={city.id} city={city} />);
    } else {
        showCities = <p>No cities available</p>;
    }

    return (
        <>    
            <h2>Available Destinations</h2>
            <div className='gallery'>
                {showCities}
            </div>
        </>
    );
}

export default Gallary;
