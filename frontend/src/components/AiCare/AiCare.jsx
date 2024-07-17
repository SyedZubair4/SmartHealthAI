import React, { useEffect, useRef, useState } from "react";

function AiCare() {
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
    <>
      <div className="starter">
        <h1>AI Care</h1>
        <h2>
          Empowering Early Diagnosis and Personalized Health management with A1
        </h2>
        <br />
        <br />
        <form action="#" method='POST' >
            <h4>Enter the patient details here👇</h4>
            <textarea  className='queryOfUser' placeholder='Type here....' value={val} onChange={handleChange} rows='2' ref={textAreaRef} name="queryOfUser" id="#"></textarea>
        </form>
        <h2>Smart Health Nutrition</h2>
        <h4>
          Tailored Nutrition Insights and Personalized Recipes for Optimal Health
        </h4>
        <form action="#" method='POST' >
            <h4>Enter Food items here👇</h4>
            <textarea  className='queryOfUser' placeholder='Type here....' value={val} onChange={handleChange} rows='2' ref={textAreaRef} name="queryOfUser" id="#"></textarea>
        </form>
        <br /><br />
        <form action="#" method='POST' >
            <h4>Enter Food preferences here👇</h4>
            <textarea  className='queryOfUser' placeholder='Type here....' value={val} onChange={handleChange} rows='2' ref={textAreaRef} name="queryOfUser" id="#"></textarea>
        </form>

      </div>
    </>
  );
}

export default AiCare;
