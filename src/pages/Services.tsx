
import React, { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Services = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow px-4 py-10 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
          Outsourced Accounting & Bookkeeping Services – The Smarter Way to Manage Your Finances
        </h1>
        
        <div className="mb-12">
          <p className="text-gray-600 mb-4">
            Mindspace delivers end-to-end Accounting and Bookkeeping Services, including Payroll Management and Tax Preparation, across the U.S. and 
            major global markets. We proudly serve clients from a wide range of industries—including eCommerce, real estate, healthcare, IT, legal, retail, 
            and professional services—ensuring every work order meets the highest quality standards.
          </p>
          <p className="text-gray-600">
            Our team of seasoned professionals is committed to helping businesses of all sizes streamline their financial operations, reduce overhead 
            costs, and gain valuable insights through expert support and strategic consultancy. Whether you're a growing startup or an established 
            enterprise, we tailor our services to meet your unique industry needs.
          </p>
        </div>

        <Tabs defaultValue="services" className="mb-10">
          <TabsList className="bg-gray-100 rounded-md p-0 h-auto">
            <TabsTrigger 
              value="services"
              onClick={() => setActiveTab("services")}
              className={`px-6 py-3 rounded-md ${activeTab === "services" ? "bg-[#39B0E5] text-white" : "bg-transparent text-gray-600"}`}
            >
              Services
            </TabsTrigger>
            <TabsTrigger 
              value="industries"
              onClick={() => setActiveTab("industries")}
              className={`px-6 py-3 rounded-md ${activeTab === "industries" ? "bg-[#39B0E5] text-white" : "bg-transparent text-gray-600"}`}
            >
              Industries
            </TabsTrigger>
            <TabsTrigger 
              value="software"
              onClick={() => setActiveTab("software")}
              className={`px-6 py-3 rounded-md ${activeTab === "software" ? "bg-[#39B0E5] text-white" : "bg-transparent text-gray-600"}`}
            >
              Software
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard 
                title="Accounting and Bookkeeping" 
                description="Chart of Accounts Preparation, Invoices & Expenses posting."
              />
              <ServiceCard 
                title="Payroll Processing" 
                description="Payroll Sheet, Paycheck, Federal Dues, State Dues, Form 940, Form 941, etc."
              />
              <ServiceCard 
                title="TAX Return Processing" 
                description="Income Statement, Tax Calculation, Returns Preparation, Tax Submissions, etc."
              />
              <ServiceCard 
                title="Accounting Software Migration" 
                description="Migration from Xero, QB online, Sage, Netsuite, etc."
              />
              <ServiceCard 
                title="Accounts Payable" 
                description="Bill.com, Dext Processing & Payment sheet updation, and analysis."
              />
              <ServiceCard 
                title="Accounts Receivable" 
                description="Invoice Processing, Lodgement, Reconciliations & aging analysis, etc."
              />
              <ServiceCard 
                title="Management Reporting" 
                description="Income Statement, Cash Flow Statement, Profit & Loss Statements, KPI Indicators, etc."
              />
              <ServiceCard 
                title="Year-End Accounting" 
                description="Improve your Bookkeeping methods, which will allow you to manage your business more efficiently."
              />
            </div>
          </TabsContent>

          <TabsContent value="industries">
            <div className="py-12 text-center text-gray-500">
              Industry information will be added soon.
            </div>
          </TabsContent>
          
          <TabsContent value="software">
            <div className="py-12 text-center text-gray-500">
              Software information will be added soon.
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="border border-gray-100 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <Button variant="link" className="text-[#39B0E5] px-0 hover:no-underline">
          Read More...
        </Button>
      </CardContent>
    </Card>
  );
};

export default Services;
