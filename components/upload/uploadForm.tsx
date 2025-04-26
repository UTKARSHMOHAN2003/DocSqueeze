"use client";
import React from "react";

import { Upload } from "lucide-react";

import { Input } from "../ui/input";

interface UploadFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
function UploadForm({ onSubmit }: UploadFormProps) {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Input
          id="file"
          type="file"
          name="file"
          accept="application/pdf"
          required
          className="block w-full mt-1 text-sm text-gray-500 file:mr-4 file:py-1 file:px-4  file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
        />
        <button className=" bg-gradient-to-b from-blue-400 to-blue-600 text-white px-6 py-2   rounded-lg hover:bg-blue-600 transition-all duration-300 text-semibold text-lg">
          <Upload size={"22px"} />
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
