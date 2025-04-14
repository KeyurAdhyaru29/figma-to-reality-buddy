
import React from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow px-4 py-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            Contact Us
          </h1>
          
          <p className="text-gray-600 mb-8">
            Have questions about our services? Ready to get started with Intouch Outsourcing? 
            Fill out the form below and our team will get back to you shortly.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <Input id="name" placeholder="Your full name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} />
            </div>
            
            <Button type="submit" className="bg-[#39B0E5] hover:bg-[#2c8fb8]">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
