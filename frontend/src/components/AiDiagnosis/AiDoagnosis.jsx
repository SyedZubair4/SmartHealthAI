import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../AiDiagnosis/AiDiagnosis.css';

function AiDiagnosis() {
    const textAreaRef = useRef(null);
    const [val, setVal] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    }

    const handlePdfChange = (e) => {
        setPdfFile(e.target.files[0]);
    }

    useEffect(()=> {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
        }
    }, [val]);

    const handleTextSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/process_text', { text_data: val });
            setResult(response.data.processed_text);
        } catch (error) {
            console.error("There was an error processing the text!", error);
        }
    }

    const handleImageSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);
        try {
            const response = await axios.post('http://127.0.0.1:5000/process_image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setResult(response.data.image_analysis);
        } catch (error) {
            console.error("There was an error processing the image!", error);
        }
    }

    const handlePdfSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pdf', pdfFile);
        try {
            const response = await axios.post('http://127.0.0.1:5000/process_pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setResult(response.data.pdf_data);
        } catch (error) {
            console.error("There was an error processing the PDF!", error);
        }
    }

    return (
        <div className="starter">
            <h1>Ai Diagnosis</h1>
            <h3>Enabling early and accurate diagnosis using AI</h3>
            <br /><br />
            <form onSubmit={handleTextSubmit}>
                <h4>Enter the patient details here👇</h4>
                <textarea className='queryOfUser' placeholder='Type here....' value={val} onChange={handleChange} rows='2' ref={textAreaRef} name="queryOfUser"></textarea>
                <button type="submit">Submit Text</button>
            </form>

            <form onSubmit={handleImageSubmit}>
                <h4>Upload images here👇</h4>
                <input type="file" name='queryImage' accept='.jpg, .jpeg, .png' onChange={handleImageChange} />
                <button type="submit">Submit Image</button>
            </form>
            <br /> <br />
            <form onSubmit={handlePdfSubmit}>
                <h4>Upload PDFs here👇</h4>
                <input type="file" name='queryPdf' accept='.pdf' onChange={handlePdfChange} />
                <button type="submit">Submit PDF</button>
            </form>

            <div>
                <h3>Response:</h3>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default AiDiagnosis;
