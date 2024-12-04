export default function LoaderScreen() {
  return (
    <div className="flex items-center justify-center h-screen "style={{ backgroundColor: '#1e1e2f' }}>
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 4px solid #222;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
