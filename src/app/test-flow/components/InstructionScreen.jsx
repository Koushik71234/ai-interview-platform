"use client";

import { useEffect, useRef } from "react";

export default function InstructionScreen({ onNext }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();
  }, []);

  return (
    <>
      <header className="header">
          <div className="logo">Zeko</div>
          <div className="timer">26 Minutes</div>
        </header>
      <div className="instruction-screen">
        
        <div className="video-container">
          <h1>Trainee Interview</h1>
          <video
            ref={videoRef}
            autoPlay
            className="video-feed"
          ></video>
        </div>

        
        <div className="instructions-container">
          <h1 className="instructions-header">Instructions</h1>
          <ol className="instructions-list">
            <li>Ensure stable internet and choose a clean,quiet location.</li>
            <li>permission for access of camera,microphone,entire screen sharing is recquired.</li>
            <li>Be in professional attire and avoid distractions.</li>
            <li>Give a detailed response,providing as musch information as you can.</li>
            <li>Answer the question with examoles and projects you've worked on </li>
          </ol>
          
          <button
            className="start-test-button"
            onClick={onNext}
          >
            Start Test
          </button>
        </div>
      </div>

      <style jsx>{`
        .instruction-screen {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #1e1e2f;
          color: white;
          padding: 0 32px;
        }

        .video-container {
          flex-shrink: 0;
          margin-right: 100px; /* Increased gap */
        }

        .video-feed {
          width: 600px; /* Increased width of video feed */
          height: auto;
          border: 0px solid #ccc;
          border-radius: 8px;
        }

        .instructions-container {
          display: flex;
          flex-direction: column;
        }

        .instructions-header {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 32px; /* Increased margin */
        }

        

        .instructions-list {
          list-style-type: disc;
          padding-left: 20px;
          color: white;
          margin-bottom: 24px;
          list-style-type: decimal;
          

        }

        .start-test-button {
          padding: 12px 24px;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .start-test-button:hover {
          background-color: #2563eb;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 10px;
          background-color: #1e1e2f;
          border-bottom: 1px solid #333;
        }
      `}</style>
    </>
  );
}
