
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-full border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/6ab53e49-cffd-41d2-84d1-80613f51aa2c.png" 
            alt="Intouch Outsourcing" 
            className="h-12"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-[#39B0E5] font-medium">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-[#39B0E5] font-medium">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#39B0E5] font-medium">Contact us</Link>
        </div>
      </div>
    </nav>
  );
};
