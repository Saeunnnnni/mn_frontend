import React from 'react'
import './MainPage.css'
import Banner from '../../component/Banner/Banner';

function MainPage() {
  return (
      <div className='container'>
        <div className='imgWrapper'>
          <Banner className="image"/>
        </div>
      </div>
  )
}

export default MainPage;