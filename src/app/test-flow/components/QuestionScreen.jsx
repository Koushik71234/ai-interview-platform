"use client";

import { useState, useEffect } from "react";

export default function QuestionScreen({ question, onNext }) {
  const [audio] = useState(new Audio(question.audio));

  useEffect(() => {
    
    audio.play();

    
    return () => {
      audio.pause();
      audio.currentTime = 0; 
    };
  }, [audio]);

  return (
    <div className="flex items-center justify-center h-screen "style={{ backgroundColor: '#1e1e2f' }}>
      <div className="bg-gray-800 shadow-md rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Question {question.id}
        </h1>
        <p className="mb-6 text-gray-300 text-center">{question.text}</p>
        <div className="flex justify-center">
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-md"
            onClick={onNext}
          >
            Next
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-400 text-center">
          Sharing your screen with <strong>interview-zeko.ai</strong>
        </p>
      </div>
    </div>
  );
}
