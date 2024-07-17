from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3
import google.generativeai as genai
import os
import random
import PyPDF2
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import io



from components.text_data import MedicalDataProcessor
from components.image_data import IAnalysis
from components.pdf_data import R_Analysis
from components.final_report import F_Diagnose
from components.pdf_generator import PDFGenerator