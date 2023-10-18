import React from "react";
import LoadingScreen from "./LoadingScreen";

type Props = {
  message: string;
};

export default function SuccessMessage({ message }: Props) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full flex-row items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-customYellow p-8 font-title text-xl text-customGray">
        {message}
        <div
          style={{
            borderTopColor: "#3498db",
            animation: "spin 1s ease-in-out infinite",
          }}
          className="mx-auto my-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"
        ></div>
      </div>
      <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
    </div>
  );
}
