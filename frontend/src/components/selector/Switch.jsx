import React from 'react'
import '../selector/switch.css'

function Switch({buttons}) {
  return (
    
    <div className="switch">
      {
        Array.isArray(buttons) && buttons.map((text, index) => (
          <React.Fragment key={index}>
            <button className='buttons' type='submit'>{text}</button> <br />
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default Switch