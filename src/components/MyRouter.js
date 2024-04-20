
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CityInfoPage from './pages/CityInfoPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import UserPortal from './pages/UserPortal.js';

function MyRouter() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cityinfo' element={<CityInfoPage />} />
        <Route path='/city/:id' element={<CityInfoPage />} /> {/* Route with city ID parameter */}
        <Route path='/user' element={<UserPortal />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default MyRouter;