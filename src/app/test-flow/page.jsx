"use client";
import { useState, useEffect } from "react";
import InstructionScreen from "./components/InstructionScreen";
import CheckPermissionScreen from "./components/CheckPermissionScreen";
import QuestionScreen from "./components/QuestionScreen";
import AnswerRecordingScreen from "./components/AnswerRecordingScreen";
import LoaderScreen from "./components/LoaderScreen";
import CompletionScreen from "./components/CompletionScreen";

const questions = [
  { id: 1, text: "Tell us about yourself.", audio: "/audio/q1.mp3" },
  { id: 2, text: "Why do you want this role?", audio: "/audio/q2.mp3" },
  { id: 3, text: "What are your future goals?", audio: "/audio/q3.mp3" },
];

export default function TestFlow() {
  const [step, setStep] = useState(0); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [uploadedUrls, setUploadedUrls] = useState([]); 

  const handleNextStep = () => setStep((prev) => prev + 1); 

  const handleRecordingComplete = (fileUrl) => {
    
    setUploadedUrls((prev) => [...prev, fileUrl]);

    if (currentQuestionIndex < questions.length - 1) {
      
      setCurrentQuestionIndex((prev) => prev + 1);
      setStep(2); 
    } else {
      
      handleNextStep();
    }
  };

  useEffect(() => {
    if (step === 4) {
      
      const timer = setTimeout(() => {
        handleNextStep();
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [step]);

  switch (step) {
    case 0:
      return <InstructionScreen onNext={handleNextStep} />;
    case 1:
      return <CheckPermissionScreen onNext={handleNextStep} />;
    case 2:
      return (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          onNext={handleNextStep}
        />
      );
    case 3:
      return <AnswerRecordingScreen onComplete={handleRecordingComplete} />;
    case 4:
      return <LoaderScreen />;
    case 5:
      return <CompletionScreen fileUrls={uploadedUrls} />;
    default:
      return null;
  }
}
