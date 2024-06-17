// src/pages/api/submit.js

import fetch from 'node-fetch';

async function callPythonBackend(formData) {
    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await response.json();
        return data.prediction;
    } catch (error) {
        console.error('Error calling Python backend:', error);
        throw new Error('Failed to fetch');
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;

        try {
            const prediction = await callPythonBackend(formData);
            res.status(200).json({ prediction });
        } catch (error) {
            console.error('Error processing request:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
