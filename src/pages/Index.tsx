
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import NetworkGraph from "@/components/NetworkGraph";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="mb-12 w-full flex justify-center">
            <NetworkGraph />
          </div>

          <div className="text-center">
            <h2 className="text-[#50232B] text-3xl md:text-4xl font-medium mb-8">
              Are you searching for a right solution to assist me with...
            </h2>

            <h1 className="text-[#6ADA7D] text-3xl md:text-5xl font-bold mb-6 border-b-2 border-[#6ADA7D] inline-block">
              Cost effective
            </h1>

            <div className="mt-4 mb-8">
              <h2 className="text-[#50232B] text-3xl md:text-4xl font-bold">
                Outsource
              </h2>
              <h2 className="text-[#50232B] text-3xl md:text-4xl font-bold mb-8">
                for
              </h2>

              <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-3xl md:text-4xl font-bold">
                <span className="text-[#3D97B8]">Accounting</span>
                <span className="text-[#50232B]">|</span>
                <span className="text-[#F294B3]">BookKeeping</span>
                <span className="text-[#50232B]">|</span>
                <span className="text-[#9B87F5]">Payroll</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
