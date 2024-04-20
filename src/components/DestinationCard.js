import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../store/AppContext.js';

function DestinationCard({ city }) {
    const { app, setApp } = useContext(AppContext);
    const ticketsTo = app.user.ticketsTo;
    const hasTickets = ticketsTo.includes(city.name);
    const [like, setLike] = useState(false);

    const deleteCity = () => {
        setApp({ type: 'deleteCity', payload: city.name });
    };

    const buyTicket = () => {
        setApp({ type: 'buyTicket', payload: city.name });
    };

    return (
        <div className={`dCard ${like ? 'favorite' : ''}`}>
            <h3>{city.name}</h3>
            {/* Wrap the image with Link to navigate to the city info page */}
            <Link to={`/city/${city.id}`}>
                <img className="pic" src={city.image} alt={city.name} />
            </Link>
            <p>{city.description}</p>
            <div className="buttons">
                <button className="deleteBtn" onClick={deleteCity}>
                    Delete City
                </button>
                {hasTickets ? (
                    <button className="reserveBtn">Reserve Your Seat</button>
                ) : (
                    <button className="buyBtn" onClick={buyTicket}>
                        Buy a ✈️
                    </button>
                )}
            </div>
            { <button onClick={() => setLike(!like)}>Like</button> }
        </div>
    );
}

export default DestinationCard;