export default function CompletionScreen({ fileUrls }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: '#1e1e2f' }}>
      <h1 className="text-2xl font-bold mb-4">Test Completed!</h1>
      {fileUrls && fileUrls.length > 0 ? (
        <div>
          <p className="text-lg">Your files were uploaded successfully:</p>
          <ul className="list-disc mt-4">
            {fileUrls.map((url, index) => (
              <li key={index} className="text-blue-400 underline">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Recording {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No recordings found.</p>
      )}
    </div>
  );
}
