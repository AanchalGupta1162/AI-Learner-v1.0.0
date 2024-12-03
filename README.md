# **AI Learner v1.0.0 - YouTube Transcript Summarizer and Question Generator**

## **Overview**
The **YouTube Transcript Summarizer** is a Chrome extension that simplifies content consumption by:
1. Fetching transcripts from YouTube videos.
2. Generating concise summaries of the transcript.
3. Producing relevant questions to enhance learning.

This project leverages Flask and the YouTube Transcript API for transcript retrieval and integrates AI-powered models for generating summaries and questions.

---

## **Features**
- **Transcript Fetching**: Extracts transcripts from YouTube videos using the YouTube Transcript API.
- **Summarization**: Provides concise and meaningful summaries of the transcript.
- **Question Generation**: Creates insightful questions to facilitate better understanding.

---

## **Technologies Used**
- **Frontend**: HTML, CSS, JavaScript (for Chrome extension functionality).
- **Backend**: Python, Flask (for transcript fetching).
- **APIs**: 
  - YouTube Transcript API for transcript retrieval.
  - Gemini Nano's Prompt API for summarization and question generation.

---

## **Setup Instructions**

### **Prerequisites**
1. **Python**: Version 3.8 or above.
2. **Flask**: For setting up the backend server.
3. **YouTube Transcript API**: For fetching transcripts.
4. **Python Virtual Environment**: Recommended to isolate dependencies.

---

### **Installation and Setup**

#### 1. Clone the Repository
```bash
git clone https://github.com/AanchalGupta1162/AI-Learner-v1.0.0.git
cd AI-Learner-v1.0.0
```

#### 2. Set Up Python Virtual Environment
```bash
python -m venv env
source env/bin/activate # For Linux/Mac
env\Scripts\activate    # For Windows
```

#### 3. Install Python Dependencies
Navigate to the backend directory and install the necessary packages:
```bash
cd AI-Learner
pip install flask
pip install youtube-transcript-api
```

#### 4. Start the Flask Server
Run the Flask backend to handle transcript fetching:
```bash
python transcript.py
```

The Flask server will start running on `http://127.0.0.1:5000`.

---

### **Load and Use the Chrome Extension**

1. Navigate to the **extension** directory of the project.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the **extension** folder.
5. The extension will now be loaded and visible in the Chrome toolbar.

---

### **Usage Instructions**

1. Open YouTube and navigate to a video.
2. Click on the Chrome extension icon in the toolbar.
3. Click **Fetch Transcript** to get the transcript.
4. For the summarization and question generation to work, make sure you are working on Google Chrome Dev or Google Canary and your device has the built-in models installed which are up-to-date and all the required flags are enabled[Prompt API](https://developer.chrome.com/docs/ai/built-in-apis#prompt_api)
5. Use the **Get Summary** or **Get Questions** buttons to process the transcript.
6. Results will be displayed in the respective output sections.

---

## **Notes**
- Ensure the Flask server is running before using the Chrome extension.
- If encountering issues, verify that the required Python packages are installed and the server is accessible at `http://127.0.0.1:5000`.

---

## **License**
This project is licensed under the MIT License. You are free to use, modify, and distribute the code for educational and personal purposes.
