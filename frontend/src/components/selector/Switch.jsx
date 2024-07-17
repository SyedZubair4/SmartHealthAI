import React from 'react'
import '../selector/switch.css'

function Switch({buttons, isSelected, setIsSelected}) {
  return (
    
    <div className="switch">
      {
        Array.isArray(buttons) && buttons.map((text, index) => (
          <React.Fragment key={index}>
            <button onClick={()=>setIsSelected(index)} className={ isSelected == index ? 'selected-button':'buttons'} type='submit'>{text}</button> <br />
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default Switch