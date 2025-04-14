
import React from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

export const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Waterpark background overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
          backgroundAttachment: 'fixed'
        }} 
      />
      
      {/* Water wave overlay with gradient */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          background: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)"
        }}
      />
      
      {/* Content container on top of background */}
      <div className="relative z-10 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};
