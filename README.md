Here's a more polished and professional version of your README file for GitHub, designed for better readability and presentation:  

---

# **AI Interview Test Application**  
A Next.js-based web application simulating an AI-powered interview process. This multi-step flow allows users to experience an interactive interview setup, complete with video recording, audio playback, and automated file uploads.  

---

## **Features**  
### 1️⃣ Instruction Screen  
Displays an introduction to guide users through the interview process.  
### 2️⃣ Permission Check  
Requests and ensures access to the camera, microphone, and screen-sharing capabilities.  
### 3️⃣ Question Screen  
Presents interview questions, including audio playback support.  
### 4️⃣ Answer Recording  
Enables video recording of answers and automatically uploads them to the backend server.  
### 5️⃣ Loader Screen  
Simulates a brief processing delay to enhance user experience.  
### 6️⃣ Completion Screen  
Confirms successful completion and provides access to the uploaded recordings.  

---

## **Getting Started**  

### **Prerequisites**  
- **Node.js**: [Download](https://nodejs.org/) the latest stable version.  
- **npm or yarn**: Install your preferred package manager.  
- **Backend Server**: Required for handling file uploads.  

### **Installation**  
1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/Koushik71234/ai-interview-test.git  
   cd ai-interview-test  
   ```  

2. **Install Frontend Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Set Up Backend Server**  
   Navigate to the `server` directory:  
   ```bash  
   cd server  
   npm install  
   ```  

4. **Prepare Uploads Folder**  
   Create a directory for storing uploaded files:  
   ```bash  
   mkdir uploads  
   ```  

---

## **Usage**  

### **Start the Backend Server**  
1. Navigate to the `server` directory:  
   ```bash  
   cd server  
   ```  

2. Run the server:  
   ```bash  
   node server.js  
   ```  
   The server will run at `http://localhost:3001`.  

### **Run the Frontend Application**  
1. Navigate back to the root directory:  
   ```bash  
   cd ..  
   ```  

2. Start the development server:  
   ```bash  
   npm run dev  
   ```  

3. Open the app in your browser:  
   ```  
   http://localhost:3000  
   ```  

---

## **File Structure**  

```plaintext  
├── components/  
│   ├── AnswerRecordingScreen.jsx      # Handles video recording and uploading  
│   ├── CheckPermissionScreen.jsx      # Checks permissions  
│   ├── CompletionScreen.jsx           # Displays success messages and file links  
│   ├── InstructionScreen.jsx          # Shows instructions  
│   ├── LoaderScreen.jsx               # Displays a spinner  
│   ├── QuestionScreen.jsx             # Displays questions with audio playback  
├── public/audio/                      # Audio files for the questions  
├── server/  
│   ├── uploads/                       # Folder for uploaded files  
│   ├── server.js                      # Backend server logic  
├── .env.local                         # Environment variables for the backend  
├── .gitignore                         # Files and directories to ignore  
├── package.json                       # Frontend dependencies  
├── README.md                          # Project documentation  
└── page.jsx                           # Main application logic  
```  

---

## **Environment Variables**  

Create a `.env.local` file in the root directory to specify the backend URL:  

```plaintext  
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001  
```  

---

## **API Endpoints**  

### File Upload  
**POST** `/api/upload`  

#### Request:  
- Form data containing a video/audio file.  

#### Response:  
- JSON object with the uploaded file's URL.  

---

## **Customization**  
- **Questions**: Add or modify questions in the `questions` array in `page.jsx`.  
- **Styling**: Update styles in the components to match your design preferences.  

---

## **Known Issues**  
- Ensure browser permissions for the camera and microphone are granted.  
- Keep the backend server running while using the application.  

---

## **Future Enhancements**  
- Support for additional question types (e.g., text-based, multiple-choice).  
- Real-time transcription and analysis of responses.  
- Secure file uploads with authentication.  

