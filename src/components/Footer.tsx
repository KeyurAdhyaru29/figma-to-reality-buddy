
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <img 
            src="/lovable-uploads/6ab53e49-cffd-41d2-84d1-80613f51aa2c.png" 
            alt="Intouch Outsourcing" 
            className="h-14 mb-4"
          />
          
          <p className="text-gray-600 mb-6">@2024 intouchoutsourcing</p>
          
          <div className="flex space-x-6 items-center">
            <p className="text-gray-700 font-medium">Follow Us</p>
            <Link to="#" className="text-[#3b5998] hover:text-opacity-80">
              <Facebook size={24} />
            </Link>
            <Link to="#" className="text-[#1DA1F2] hover:text-opacity-80">
              <Twitter size={24} />
            </Link>
            <Link to="#" className="text-[#FF0000] hover:text-opacity-80">
              <Youtube size={24} />
            </Link>
            <Link to="#" className="text-[#0077B5] hover:text-opacity-80">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
