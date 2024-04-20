
import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.js';


function UserProfile() {
  const { app } = useContext(AppContext);
  const { user } = app;

  return (
      <div>
          <h2>Welcome back, {user.name}!</h2>
          <h4>{user.name} is {user.age} years old</h4>
          <h4>{user.name}'s favorite city is {app.favoriteCity.name}</h4>
          <h4>{user.name} has bought tickets to the following cities:</h4>
          <div>
              {user.ticketsTo.map((ticket, index) => (
                  <button key={index} className="ticket-button">{ticket}</button>
              ))}
          </div>
      </div>
  );
}

export default UserProfile;