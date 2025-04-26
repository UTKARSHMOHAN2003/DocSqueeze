import React from "react";
import { Upload, BrainCircuit, FileOutput } from "lucide-react";
function HowItWorkSection() {
  return (
    <div className="flex flex-col items-center justify-center px-2 sm:px-4 lg:px-6">
      <p className="text-blue-400 text-2xl font-bold mb-3">HOW IT WORKS</p>
      <h3 className="text-center max-w-3xl mx-auto font-bold mb-4">
        Transform any PDF into an easy-to-digest summary in three simple steps
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center w-50 h-50 bg-white shadow-md rounded-lg hover:border-2 hover:border-blue-400 transition-all duration-300">
          <div className="text-4xl font-bold text-blue-400">
            <Upload size="50px" />
          </div>
          <div className="text-gray-500 text-center mt-2">
            Upload your PDF
            <div className="text-sm text-center text-gray-400 mt-1">
              Simply drag and drop your PDF document or click to upload
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center w-50 h-50 bg-white shadow-md rounded-lg hover:border-2 hover:border-blue-400 transition-all duration-300">
          <div className="text-4xl font-bold text-blue-400">
            {" "}
            <BrainCircuit size="50px" />
          </div>
          <div className="text-gray-500 text-center mt-2">AI processes it</div>
          <div className="text-sm text-center text-gray-400 mt-1">
            Our advanced AI processes and analyzes your document instantly
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center w-50 h-50 bg-white shadow-md rounded-lg hover:border-2 hover:border-blue-400 transition-all duration-300">
          <div className="text-lg font-bold text-blue-400">
            <FileOutput size="50px" />
          </div>
          <div className="text-gray-500 text-center mt-2">Get your summary</div>
          <div className="text-sm text-center text-gray-400 mt-1">
            Receive a clear, concise summary of your document
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorkSection;
