from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model and scaler
with open('best_model.pkl', 'rb') as f:
    model = pickle.load(f)
with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array([[
        data['age'], data['sex'], data['cp'], data['trestbps'], data['chol'], 
        data['fbs'], data['restecg'], data['thalach'], data['exang'], 
        data['oldpeak'], data['slope'], data['ca'], data['thal']
    ]])
    
    features = scaler.transform(features)
    prediction = model.predict(features)
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(host='localhost', port=5000)
