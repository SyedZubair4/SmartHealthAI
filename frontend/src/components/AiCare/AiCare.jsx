import React, { useState } from "react";
import axios from "axios";
import '../AiCare/AiCare.css';

function AiCare() {
    const [query, setQuery] = useState("");
    const [foodItem, setFoodItem] = useState("");
    const [preference, setPreference] = useState("");
    const [responseText, setResponseText] = useState("");

    const handleSubmitQuery = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post("http://localhost:5000/rag_query", { query });
          setResponseText(response.data.response);
      } catch (error) {
          console.error("Error fetching data: ", error);
      }
  };

  const handleSubmitFoodItem = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/food_nutrition", { food_item: foodItem });
        setResponseText(response.data.nutrition_data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};


const handleSubmitPreference = async (event) => {
  event.preventDefault();
  try {
      const response = await axios.post("http://localhost:5000/recipe", { preference });
      setResponseText(`Recipe: ${response.data.recipe}\nIngredients: ${response.data.ingredients}\nNutrition Data: ${response.data.nutrition_data}`);
  } catch (error) {
      console.error("Error fetching data: ", error);
  }
};


    return (
        <div className="starter">
            <h1>AI Care</h1>
            <h2>Empowering Early Diagnosis and Personalized Health management with AI</h2>
            <br />
            <br />
            <form onSubmit={handleSubmitQuery}>
                <h4>Enter the patient details here👇</h4>
                <textarea className='queryOfUser' placeholder='Type here....' value={query} onChange={(e) => setQuery(e.target.value)} rows='2' name="queryOfUser"></textarea>
                <button className="submitButton" type="submit">Submit</button>
            </form>
            <h2>Smart Health Nutrition</h2>
            <h4>Tailored Nutrition Insights and Personalized Recipes for Optimal Health</h4>
            <form onSubmit={handleSubmitFoodItem}>
                <h4>Enter Food items here👇</h4>
                <textarea className='queryOfUser' placeholder='Type here....' value={foodItem} onChange={(e) => setFoodItem(e.target.value)} rows='2' name="foodItems"></textarea>
                <button className="submitButton" type="submit">Submit</button>
            </form>
            <br /><br />
            <form onSubmit={handleSubmitPreference}>
                <h4>Enter Food preferences here👇</h4>
                <textarea className='queryOfUser' placeholder='Type here....' value={preference} onChange={(e) => setPreference(e.target.value)} rows='2' name="foodPreferences"></textarea>
                <button className="submitButton" type="submit">Submit</button>
            </form>
            <div>
                <h3>Response:</h3>
                <p>{responseText}</p>
            </div>
        </div>
    );
}

export default AiCare;
