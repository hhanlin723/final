
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CityInfoPage from './pages/CityInfoPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import UserPortal from './pages/UserPortal.js';

function MyRouter() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/cityinfo' component={CityInfoPage} />
      <Route path='/city/:id' element={CityInfoPage} /> {/* Route with city ID parameter */}
      <Route path='/user' component={UserPortal} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  );
}

export default MyRouter;