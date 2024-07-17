from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import requests
import google.generativeai as genai
from components.rag import RAG
from components.nutrition import NutritionAnalyzer
import sys

app = Flask(__name__)
CORS(app)

# Configure logging
import logging
logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

# Initialize your RAG and other components here
pdf_path = "C:/Users/Lakshmi/Downloads/clinical_data_report (9).pdf"
rag = RAG(pdf_path)
rag.load_documents()
rag.parse_documents()
rag.setup_llm_and_index()

# Define routes for different functionalities

@app.route('/')
def index():
    return render_template('index.html')  # You can create an HTML template for your UI

@app.route('/rag_query', methods=['POST'])
def rag_query():
    data = request.json
    query_text = data['query']
    res = rag.response(query_text)
    return jsonify({'response': res})

@app.route('/food_nutrition', methods=['POST'])
def food_nutrition():
    data = request.json
    food_item = data['food_item']
    ingredients = [name.strip() for name in food_item.split(",")]
    nutri = NutritionAnalyzer(ingredients)
    nutri.update_dict_data()
    nutri_res = nutri.format_string()
    return jsonify({'nutrition_data': nutri_res})

@app.route('/recipe', methods=['POST'])
def recipe():
    data = request.json
    preference = data['preference']
    symptoms = rag.response("What are symptoms mentioned in the data?")
    treatments = rag.response("What are treatments mentioned in the data?")
    dietary_restrictions = rag.response("What are dietary restrictions mentioned in the data?")
    health_goals = rag.response("What are health goals mentioned in the data?")
    
    res1 = rag.response_food(preference)
    ingredients = rag.query(f"Based on the health status of the patient, remove the unnecessary ingredients in {preference} tell why. Also suggest a healthy recipe for the patient using these ingredients.")
    
    i_arr = ingredients.split(',')
    nutri = NutritionAnalyzer(i_arr)
    nutri.update_dict_data()
    nutri_res = nutri.format_string()
    
    return jsonify({'recipe': res1, 'ingredients': ingredients, 'nutrition_data': nutri_res})







