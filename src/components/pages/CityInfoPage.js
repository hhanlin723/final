import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../store/AppContext.js'
import DestinationCard from '../../components/DestinationCard.js'; // Import DestinationCard component

function CityInfoPage() {
    const { app } = useContext(AppContext);
    const { cities } = app;
    const { id } = useParams(); // Get the city ID from URL params
    const [city, setCity] = useState(null);

    useEffect(() => {
        // Fetch city details based on the city ID
        const selectedCity = cities.find(city => city.id === id);
        setCity(selectedCity);
    }, [id, cities]);

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Render DestinationCard component with city data */}
            <DestinationCard city={city} />
        </div>
    );
}

export default CityInfoPage;