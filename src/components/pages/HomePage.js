import React, { useContext } from 'react'
import Gallary from '../Gallary.js'
import UserProfile from '../UserProfile.js'
import { AppContext } from '../../store/AppContext.js'

function HomePage() {
  

  const {app} = useContext(AppContext);
  const {user} = app;

  return (
    <div className='home'>
      
      <Gallary  />
    
    </div>
  )
}

export default HomePage