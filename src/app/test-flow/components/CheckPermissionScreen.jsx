"use client";

import { useState, useEffect, useRef } from "react";

export default function InterviewScreen({ onNext }) {
  const [permissions, setPermissions] = useState({
    camera: false,
    microphone: false,
    speaker: false,
    screen: false,
  });
  const videoRef = useRef(null);

  const checkPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setPermissions((prev) => ({ ...prev, camera: true, microphone: true }));
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch {
      alert("Camera and microphone permission denied!");
    }

    // Dummy speaker check for UI purposes
    setPermissions((prev) => ({ ...prev, speaker: true }));

    try {
      await navigator.mediaDevices.getDisplayMedia();
      setPermissions((prev) => ({ ...prev, screen: true }));
    } catch {
      alert("Screen sharing permission denied!");
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    return () => {
      if (videoElement && videoElement.srcObject) {
        const tracks = videoElement.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <>
      <div className="interview-screen">
        {/* Header */}
        <header className="header">
          <div className="logo">Zeko</div>
          <div className="timer">26 Minutes</div>
        </header>

        <div className="content">
          {/* Camera Feed */}
          <div className="video-container">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="video-feed"
            />
          </div>

          {/* Permission Checklist */}
          <div className="permissions-section">
            <h1 className="title">Ready to join?</h1>
            <p className="subtitle">
              Please make sure your device is properly configured.
            </p>
            <div className="permissions-list">
              <div className="permission-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={permissions.camera}
                    readOnly
                    className="custom-checkbox"
                  />
                  <span>Check Camera</span>
                </label>
              </div>
              <div className="permission-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={permissions.microphone}
                    readOnly
                    className="custom-checkbox"
                  />
                  <span>Check Microphone</span>
                </label>
              </div>
              <div className="permission-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={permissions.speaker}
                    readOnly
                    className="custom-checkbox"
                  />
                  <span>Check Speaker</span>
                </label>
              </div>
              <div className="permission-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={permissions.screen}
                    readOnly
                    className="custom-checkbox"
                  />
                  <span>Enable Screen Share</span>
                </label>
              </div>
            </div>
            <button className="check-button" onClick={checkPermissions}>
              Check Permissions
            </button>
            <button
              className="start-button"
              onClick={onNext}
              disabled={
                !permissions.camera ||
                !permissions.microphone ||
                !permissions.speaker ||
                !permissions.screen
              }
            >
              Start Interview
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .interview-screen {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: #1e1e2f;
          color: white;
          font-family: Arial, sans-serif;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #1e1e2f;
          border-bottom: 1px solid #333;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        .timer {
          font-size: 1rem;
          background-color: #3b3b4f;
          padding: 8px 16px;
          border-radius: 8px;
          color: #e6e6ff;
        }

        .content {
          display: flex;
          flex: 1;
          padding: 40px;
        }

        .video-container {
          flex: 1;
          margin-right: 40px;
        }

        .video-feed {
          width: 100%;
          height: auto;
          border-radius: 8px;
          background-color: #333;
        }

        .permissions-section {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .subtitle {
          color: #ccc;
          margin-bottom: 20px;
        }

        .permissions-list {
          margin-bottom: 20px;
        }

        .permission-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
        }

        .custom-checkbox {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .custom-checkbox:checked {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }

        .custom-checkbox:checked::after {
          content: "✔";
          color: white;
          font-size: 14px;
        }

        .check-button,
        .start-button {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
        }

        .check-button {
          background-color: #3b82f6;
          color: white;
          margin-bottom: 10px;
        }

        .check-button:hover {
          background-color: #2563eb;
        }

        .start-button {
          background-color: #10b981;
          color: white;
        }

        .start-button:hover {
          background-color: #059669;
        }

        .start-button:disabled {
          background-color: #666;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
