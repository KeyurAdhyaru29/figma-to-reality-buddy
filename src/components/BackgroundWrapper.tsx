
import React from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

export const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Content container */}
      <div className="relative z-10 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};
