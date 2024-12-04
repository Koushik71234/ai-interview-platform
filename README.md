# AI Interview Test Application

This project is a Next.js-based web application for simulating an AI-powered interview process. It provides a multi-step flow, allowing users to interact with the app, grant necessary permissions, answer interview questions, record answers via video, and view the uploaded recordings.

## Features
1. **Instruction Screen**: Provides an introduction to the interview process.
2. **Permission Check**: Requests camera, microphone, and screen-sharing permissions.
3. **Question Screen**: Displays questions with audio playback support.
4. **Answer Recording**: Allows video recording of answers and uploads them to a backend server.
5. **Loader Screen**: Simulates a brief processing delay.
6. **Completion Screen**: Confirms the successful completion of the interview and provides a link to the uploaded recording.

---

## Getting Started

### Prerequisites
- **Node.js**: Install the latest stable version from [Node.js Official Site](https://nodejs.org/).
- **npm or yarn**: A package manager to install dependencies.
- **Backend Server**: This application requires a server to handle file uploads.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Koushik71234/ai-interview-test.git
   cd ai-interview-test
   ```

2. Install dependencies for the frontend:
   ```bash
   npm install
   ```

3. Navigate to the `server` directory to set up the backend:
   ```bash
   cd server
   npm install
   ```

4. Create a folder named `uploads` in the backend directory for storing files:
   ```bash
   mkdir uploads
   ```

---

## Usage

### Start the Backend Server
1. Navigate to the backend directory:
   ```bash
   cd server
   ```

2. Start the backend server:
   ```bash
   node server.js
   ```

3. The server will be available at `http://localhost:3001`.

### Start the Frontend Application
1. Navigate back to the root directory of the project:
   ```bash
   cd AI-INTERVIEW-PLATFORM..
   ```

2. Start the Next.js development server:
   ```bash
   npm run dev
   ```

3. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## File Structure

```
├── components/
│   ├── AnswerRecordingScreen.jsx      # Handles video recording and uploading
│   ├── CheckPermissionScreen.jsx      # Checks camera, microphone, and screen-sharing permissions
│   ├── CompletionScreen.jsx           # Displays completion message and uploaded file link
│   ├── InstructionScreen.jsx          # Displays instructions for the interview
│   ├── LoaderScreen.jsx               # Shows a spinner during processing
│   ├── QuestionScreen.jsx             # Displays questions with audio playback
├── public/audio/                      # Stores audio files for the questions
├── server/
│   ├── uploads/                       # Stores uploaded video files
│   ├── server.js                      # Backend server for handling file uploads
├── .env.local                         # Environment variables for backend URL (optional)
├── .gitignore                         # Files and directories to ignore in Git
├── package.json                       # Frontend dependencies
├── README.md                          # Project documentation
└── page.jsx                           # Main application logic
```

---

## Environment Variables

Create a `.env.local` file in the root directory to specify the backend URL:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

---

## API Endpoints

### File Upload
**POST** `/api/upload`

- **Request**: 
  - Form data containing a video/audio file.
- **Response**: 
  - JSON object with the uploaded file's URL.

---

## Customization

- **Questions**: Add or modify questions in the `questions` array in `page.jsx`.
- **Styling**: Update the styles in the components to suit your design preferences.

---

## Known Issues
- Ensure browser permissions for camera and microphone are granted.
- The backend server must be running while using the app.

---

## Future Enhancements
1. Add support for more question types (e.g., text-based, multiple-choice).
2. Include real-time transcription or analysis of recorded responses.
3. Secure file uploads with authentication.

---

## License
This project is open-source and free to use under the MIT License.

Enjoy building! 🎉#   a i - i n t e r v i e w - p l a t f o r m  
 