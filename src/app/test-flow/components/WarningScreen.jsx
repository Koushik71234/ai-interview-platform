"use client";

export default function WarningScreen({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Important Notice</h1>
      <p className="mb-6 text-center">
        Do not switch windows or leave the screen during the test. Failing to follow this
        rule may result in disqualification.
      </p>
      <button
        className="px-6 py-3 bg-red-600 text-white rounded-md"
        onClick={onNext}
      >
        I Understand
      </button>
    </div>
  );
}
