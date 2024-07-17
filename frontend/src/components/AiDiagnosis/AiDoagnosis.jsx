import React, { useEffect, useRef, useState } from 'react'
import '../AiDiagnosis/AiDiagnosis.css'

function AiDoagnosis() {
    const textAreaRef = useRef(null);
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setVal(e.target.value);
    }

    useEffect(()=> {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }, [val])

  return (
    <div className="starter">
        <h1>Ai Diagnosis</h1>
        <h3>Enabling early and accurate diagnosis using AI</h3>
        <br /><br />
        <form action="#" method='POST' >
            <h4>Enter the patient details here👇</h4>
            <textarea  className='queryOfUser' placeholder='Type here....' value={val} onChange={handleChange} rows='2' ref={textAreaRef} name="queryOfUser" id="#"></textarea>
        </form>

        <form action="#" method='POST'>
            <h4>Upload images here👇</h4>
            <input type="file" name='queryImage' accept='.jpg, .jpeg, .png' />
        </form>
        <br /> <br />
        <form action="#" method='POST'>
            <h4>Upload PDFs here👇</h4>
            <input type="file" name='queryImage' accept='.pdf'/>
        </form>

    </div>
  )
}



export default AiDoagnosis