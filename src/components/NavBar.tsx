
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <nav className="w-full border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/uploads/Group 89.png" 
            alt="Intouch Outsourcing" 
            className="h-12"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className={isActiveRoute("/") ? "text-[#39B0E5] font-medium" : "text-gray-600 hover:text-[#39B0E5] font-medium"}>Home</Link>
          <Link to="/services" className={isActiveRoute("/services") ? "text-[#39B0E5] font-medium" : "text-gray-600 hover:text-[#39B0E5] font-medium"}>Services</Link>
          <Link to="/contact" className={isActiveRoute("/contact") ? "text-[#39B0E5] font-medium" : "text-gray-600 hover:text-[#39B0E5] font-medium"}>Contact us</Link>
        </div>
      </div>
    </nav>
  );
};
