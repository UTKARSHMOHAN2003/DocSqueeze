import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles, MoveRight, Pizza } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative flex flex-col h-screen items-center text-white    ">
      <div className="absolute top-3 left-3 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-8 right-3 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <Badge
        variant="secondary"
        className=" h-10 w-40 text-center mt-20 mb-5 text-md font-semibold bg-gradient-to-b from-blue-200
         to-blue-400 text-white border-none rounded-full shadow-lg flex items-center justify-center gap-2  hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 animate-pulse" /> AI
        Summarizer
      </Badge>
      <div className="text-blue-400 font-bold py-6 text-center">
        <h1>
          Transform PDFs into{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Concise
          </span>{" "}
          Summaries{" "}
        </h1>

        <h2 className="mt-6 text-gray-400 text-lg lg:text-2xl font-semibold">
          Get a beautiful summary reel of the document in seconds.
        </h2>

        <Link href={"/#pricing"}>
          <Button
            className=" mt-20 h-15 w-50 text-center  text-md font-semibold bg-gradient-to-b from-blue-200
         to-blue-400  animate-bounce  hover:text-blue-900 border-none  text-xl "
          >
            Try DocSqueeze{" "}
            <MoveRight className="pt-0.5 w-4 h-4 font-bold animate-pulse text-xl" />
          </Button>{" "}
        </Link>

        <h3 className=" font-bold text-black  max-w-4xl text-center mt-50 py-8 mx-auto">
          <div className=" flex items-center justify-center  mx-auto text-center  border-2 rounded-lg w-10 h-10 bg-white ">
            <Pizza className=" text-blue-300" />
          </div>
          DocSqueeze use{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Gemini AI
          </span>{" "}
          to Transform
          <span className="text-blue-400"> PDF's</span> into an easy-to-read
          summary!
        </h3>
      </div>
    </div>
  );
}

export default HeroSection;
