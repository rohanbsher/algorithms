"use client"; // Ensure this is a client-side component

import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import * as tf from '@tensorflow/tfjs';

export default function Home() {
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [classNames, setClassNames] = useState<string[]>([]); // Store full class labels
  const imageRef = useRef<HTMLImageElement>(null); // Reference for the image element
  const [predictionResult, setPredictionResult] = useState<string | null>(null); // State to hold the prediction result


  // Load the MobileNet model and class names when the component mounts
  useEffect(() => {
    const loadModelAndLabels = async () => {
      try {
        // Load the MobileNet model from TensorFlow Hub
        const loadedModel = await tf.loadGraphModel(
          'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_140_224/classification/3/default/1',
          { fromTFHub: true }
        );
        console.log('Model loaded successfully:', loadedModel);
        setModel(loadedModel); // Store the model in state

        // Load ImageNet class labels
        const response = await fetch('https://storage.googleapis.com/download.tensorflow.org/data/ImageNetLabels.txt');
        const text = await response.text();
        const labels = text.split('\n').map((label) => label.trim()); // Split by new line and trim spaces
        setClassNames(labels); // Store the class names
        console.log('Class names loaded:', labels);
      } catch (error) {
        console.error('Error loading the model or labels:', error);
      }
    };
    loadModelAndLabels();
  }, []);

  // Handle file input changes
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // Read the image as a data URL using FileReader
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string); // Set the imageSrc to the base64 string
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  };

  // Preprocess the image file and make a prediction
  const makePrediction = async () => {
    if (!model || !selectedFile || !imageRef.current || classNames.length === 0) {
      console.log("Model, image, or class names not available");
      return;
    }

    // Get the image element from the DOM (this is the imageRef)
    const imageElement = imageRef.current;

    // Preprocess the image: resize, normalize, and add batch dimension
    const tensor = tf.browser.fromPixels(imageElement)
      .resizeNearestNeighbor([224, 224]) // Resize the image to the size MobileNet expects (224x224)
      .toFloat()
      .expandDims(0) // Add a batch dimension: [1, 224, 224, 3]
      .div(255.0); // Normalize the image to [0, 1]

    // Make a prediction using the MobileNet model
    const prediction = model.predict(tensor) as tf.Tensor;

    // Post-process the prediction result
    const predictionArray = await prediction.data(); // Extract the prediction array (probabilities)
    const predictionArrayJS = Array.from(predictionArray);
    const predictedClassIndex = predictionArray.indexOf(Math.max(...predictionArrayJS)); // Get the index of the highest probability
    const predictedClass = classNames[predictedClassIndex];
    setPredictionResult(predictedClass); // Set the predicted class in state

    console.log('Prediction result:', predictionArray);
    console.log(`Predicted Class: ${classNames[predictedClassIndex]} (index: ${predictedClassIndex})`);
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Uploaded preview"
          ref={imageRef}
          style={{ width: '224px', height: '224px', objectFit: 'cover' }}
        />
      )}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={makePrediction}
        disabled={!model || !selectedFile || classNames.length === 0}
      >
        Make Prediction
      </Button>
      {predictionResult && <h2>Predicted Animal: {predictionResult}</h2>} {/* Display the prediction */}
    </div>
  );
}
