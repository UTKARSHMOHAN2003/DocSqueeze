import React from "react";

function CtaSection() {
  return (
    <div className="relative flex flex-col items-center justify-center px-2 sm:px-4 lg:px-6 mt-10 mb-10">
      {/* Blur Effect */}
      <div className="absolute top-4 left-3/4 w-60 h-60 bg-blue-400 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <h3 className="text-center max-w-3xl mx-auto font-bold mb-4">
        Ready to Save Hours of Reading Time?
      </h3>
      <p className="text-gray-500 text-center mb-4">
        Transform lengthy documents into clear, actionable insights with our
        AI-powered summarizer.
      </p>
      <button className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 text-semibold text-lg">
        Get Started
      </button>
    </div>
  );
}

export default CtaSection;
