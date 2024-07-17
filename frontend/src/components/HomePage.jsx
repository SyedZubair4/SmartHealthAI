import { useState } from 'react'
import React from 'react'
import '../components/homePage.css'
import Switch from './selector/Switch'
import Welcome from './welcome/welcome'
import AiCare from './AiCare/AiCare'
import AiDoagnosis from './AiDiagnosis/AiDoagnosis'

function HomePage() {

  const button = ['Welcome', 'Ai Care', 'Ai Diagnosis'];
  const [isSelected, setIsSelected] = useState(0);

  const RenderComponent = ({ index }) => {
    switch (index) {
      case 0:
        return <Welcome />  

      case 1:
        return <AiCare />
        
      case 2:
        return <AiDoagnosis />

      default:
        break;
    }
  };

  return (
    <div className="hero">
      <Switch buttons={button} isSelected={isSelected} setIsSelected={setIsSelected} />
      <RenderComponent index={isSelected} />


    </div>
  )
}

export default HomePage