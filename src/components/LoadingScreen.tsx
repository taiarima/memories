import React from "react";

export default function LoadingScreen() {
  return (
    <div className="mx-auto flex h-[90vh] items-center justify-center overflow-hidden">
      <div
        style={{
          borderTopColor: "#3498db",
          animation: "spin 1s ease-in-out infinite",
        }}
        className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"
      ></div>
      <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
    </div>
  );
}
