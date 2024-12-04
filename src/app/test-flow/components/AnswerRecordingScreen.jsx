"use client";

import { useState, useRef } from "react";

export default function AnswerRecordingScreen({ onComplete }) {
  const [recording, setRecording] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      setRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      alert("Please allow camera and microphone access to start recording.");
    }
  };

  const stopRecording = async () => {
    if (!mediaRecorderRef.current) {
      console.error("No media recorder available");
      return;
    }

    mediaRecorderRef.current.stop();
    setRecording(false);

    if (recordedChunks.length === 0) {
      console.error("No recorded data available");
      return;
    }

    const blob = new Blob(recordedChunks, { type: "video/webm" });
    console.log("Blob created with size:", blob.size);

    const formData = new FormData();
    formData.append("file", blob, "recording.webm");

    try {
      const response = await fetch(`${backendUrl}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Uploaded file URL:", result.fileUrl);
      onComplete(result.fileUrl);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: "#1e1e2f" }}>
      <video ref={videoRef} autoPlay className="mb-4 w-2/3 h-auto rounded-md"></video>
      {!recording ? (
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
          onClick={startRecording}
        >
          Start Recording
        </button>
      ) : (
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-md"
          onClick={stopRecording}
        >
          Stop Recording
        </button>
      )}
      {recording && <p className="mt-4 text-sm text-gray-400">Recording in progress...</p>}
    </div>
  );
}
