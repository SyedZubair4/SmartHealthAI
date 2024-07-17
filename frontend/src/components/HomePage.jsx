import React from 'react'
import '../components/homePage.css'
import Switch from './selector/Switch'
import Welcome from './welcome/welcome'


function HomePage() {

  const button = ['Welcome', 'Ai Care', 'Ai Diagnosis']

  return (
    <div className="hero">
        <Switch buttons={button} />
        <Welcome/>
        
    </div>
  )
}

export default HomePage