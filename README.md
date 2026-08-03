# KeyShield 🔐

**Behavioral Biometric Authentication using Keystroke Dynamics and Machine Learning**

## 📖 Overview

KeyShield is a machine learning-based authentication system that enhances traditional password security by analyzing **how a user types**, not just **what they type**.

Even if an attacker knows the correct password, authentication should fail if their typing behavior does not match the enrolled user's unique keystroke pattern.

This project explores **Behavioral Biometrics**, **Machine Learning**, and **Cybersecurity** by building a complete authentication system from scratch.

---

# 🎯 Project Objectives

* Build a complete keystroke dynamics authentication system.
* Collect and create a custom dataset.
* Perform feature engineering on keyboard timing data.
* Train and compare multiple machine learning models.
* Integrate the trained model into a real login system.
* Deploy the application as a working web application.

---

# 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* FastAPI
* Uvicorn

### Machine Learning

* Python
* NumPy
* Pandas
* Scikit-learn
* Joblib

### Data Analysis

* Jupyter Notebook
* Matplotlib

### Version Control

* Git
* GitHub

---

# 📂 Project Structure

```text
KeyShield/
│
├── collector/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── dataset/
│   ├── raw/
│   └── processed/
│
├── notebooks/
│   ├── eda.ipynb
│
├── src/
│   ├── preprocessing.py
│   ├── feature_engineering.py
│   ├── train.py
│   ├── evaluate.py
│   ├── predict.py
│
├── backend/
│   ├── app.py
│
├── models/
│
├── docs/
│
├── tests/
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

# 🚀 Development Roadmap

## ✅ Milestone 0 — Project Setup

### Goals

* Create GitHub Repository
* Configure VS Code
* Configure Git
* Create Virtual Environment
* Install Required Packages
* Create Project Structure

### Deliverables

* Repository Created
* Initial Commit
* Project Folder Structure
* README
* requirements.txt

---

## 🚀 Milestone 1 — Keystroke Data Collector

### Goal

Develop a web application that captures keyboard events.

### Features

* Password Input
* Capture Key Down Events
* Capture Key Up Events
* Record Timestamp
* Display Captured Data

### Deliverables

* Working HTML Interface
* JavaScript Keyboard Listener
* Timing Data Recorded

---

## 🚀 Milestone 2 — Dataset Generation

### Goal

Generate a machine learning dataset.

### Collect

For every key:

* Press Time
* Release Time

Calculate

* Hold Time
* Flight Time

Export

* CSV Dataset

### Deliverables

* Genuine User Dataset
* Impostor Dataset
* CSV Export Functionality

---

## 🚀 Milestone 3 — Exploratory Data Analysis (EDA)

### Goal

Understand the dataset before training.

### Tasks

* Load Dataset
* Summary Statistics
* Missing Values
* Outlier Detection
* Distribution Analysis
* Correlation Analysis

### Visualizations

* Histograms
* Boxplots
* Scatter Plots
* Heatmaps

### Deliverables

* EDA Notebook
* Visual Reports

---

## 🚀 Milestone 4 — Feature Engineering

### Goal

Transform raw keyboard events into machine learning features.

### Features

* Hold Time
* Flight Time
* Total Typing Time
* Average Hold Time
* Average Flight Time
* Typing Speed
* Standard Deviation
* Variance

### Deliverables

* Clean Feature Dataset

---

## 🚀 Milestone 5 — Data Preprocessing

### Tasks

* Train/Test Split
* Feature Scaling
* Label Encoding (if required)
* Data Validation

### Deliverables

* Preprocessed Dataset
* StandardScaler

---

## 🚀 Milestone 6 — Machine Learning (Baseline)

### First Model

* K-Nearest Neighbors (KNN)

### Experiment

* K = 1
* K = 3
* K = 5
* K = 7
* K = 9

### Evaluation

* Accuracy
* Precision
* Recall
* F1 Score
* Confusion Matrix

### Deliverables

* Trained KNN Model

---

## 🚀 Milestone 7 — Model Comparison

Train and compare:

* Logistic Regression
* Decision Tree
* Random Forest
* Support Vector Machine
* Gradient Boosting

### Compare

* Accuracy
* Precision
* Recall
* F1 Score
* ROC-AUC
* Training Time
* Prediction Time

### Deliverables

* Model Comparison Report

---

## 🚀 Milestone 8 — Authentication Engine

### Goal

Create the authentication logic.

### Login Flow

Password Entered

↓

Capture Typing Pattern

↓

Extract Features

↓

Load Trained Model

↓

Predict Genuine / Impostor

↓

Grant or Deny Access

### Deliverables

* Working Authentication Engine

---

## 🚀 Milestone 9 — FastAPI Backend

### APIs

* User Registration
* User Login
* Dataset Collection
* Prediction
* Health Check

### Deliverables

* REST API
* Swagger Documentation

---

## 🚀 Milestone 10 — Frontend Integration

### Build

* Registration Page
* Login Page
* Result Page
* Error Handling
* Loading Indicators

### Deliverables

* Complete Authentication UI

---

## 🚀 Milestone 11 — Security Enhancements

Implement

* Password Hashing
* Secure Storage
* Confidence Threshold
* Retry Protection
* Optional Two-Factor Authentication

---

## 🚀 Milestone 12 — Testing

### Unit Tests

* Feature Extraction
* Prediction
* Dataset Validation

### Integration Tests

* API Testing
* Login Flow

---

## 🚀 Milestone 13 — Deployment

Deploy

* FastAPI Backend
* Frontend
* Model Files

Possible Platforms

* Render
* Railway
* Oracle Cloud
* AWS EC2

---

## 🚀 Milestone 14 — Documentation

Prepare

* Installation Guide
* Usage Guide
* Dataset Description
* API Documentation
* Architecture Diagram
* Results
* Screenshots
* Future Scope

---

# 📊 Evaluation Metrics

The project will compare models using:

* Accuracy
* Precision
* Recall
* F1 Score
* ROC-AUC
* Confusion Matrix
* False Acceptance Rate (FAR)
* False Rejection Rate (FRR)
* Equal Error Rate (EER)

---

# 📈 Future Improvements

* Deep Learning (LSTM/Transformer)
* Continuous Authentication
* Mobile Typing Biometrics
* Touch Pressure Analysis
* Mouse Dynamics
* Multi-Factor Authentication
* Adaptive User Profiles
* Cloud Deployment
* Real-Time Monitoring Dashboard

---

# 🎓 Learning Outcomes

By completing this project, you will gain practical experience in:

* Behavioral Biometrics
* Keystroke Dynamics
* Dataset Creation
* Feature Engineering
* Machine Learning
* Model Evaluation
* FastAPI
* REST APIs
* Authentication Systems
* Cybersecurity
* Git & GitHub
* Software Engineering
* Deployment

---

# 📅 Current Progress

* [ ] Milestone 0 — Project Setup
* [ ] Milestone 1 — Keystroke Data Collector
* [ ] Milestone 2 — Dataset Generation
* [ ] Milestone 3 — Exploratory Data Analysis
* [ ] Milestone 4 — Feature Engineering
* [ ] Milestone 5 — Data Preprocessing
* [ ] Milestone 6 — KNN Model
* [ ] Milestone 7 — Model Comparison
* [ ] Milestone 8 — Authentication Engine
* [ ] Milestone 9 — FastAPI Backend
* [ ] Milestone 10 — Frontend Integration
* [ ] Milestone 11 — Security Enhancements
* [ ] Milestone 12 — Testing
* [ ] Milestone 13 — Deployment
* [ ] Milestone 14 — Documentation

---

# 📄 License

This project is developed for educational and research purposes.

---

## 👨‍💻 Author

**Pulkit Kher**

B.Tech Computer Science & Engineering (AI & ML)

Behavioral Biometrics | Machine Learning | Cybersecurity
