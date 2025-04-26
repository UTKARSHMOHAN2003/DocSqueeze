// components/upload/uploadSection.tsx
"use client";
import React, { useState } from "react"; // Import useState
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import UploadForm from "@/components/upload/uploadForm";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "../../actions/uploadAction";
import { useRouter } from "next/navigation";

function UploadSection() {
  const router = useRouter();

  // schema with zod
  const schemea = z.object({
    file: z
      .instanceof(File, { message: "Invalid File" })
      .refine(
        (file) => file.size <= 20 * 1024 * 1024,
        "File size must be less than 20MB"
      )
      .refine(
        (file) => file.type.startsWith("application/pdf"),
        "File must be a PDF"
      ),
  });

  const { startUpload, routeConfig } = useUploadThing("pdfuploader", {
    onClientUploadComplete: () => {
      toast("uploaded successfully!");
    },
    onUploadError: () => {
      toast("error occurred while uploading");
    },
    onUploadBegin: ({ file }) => {
      toast("we are uploading your file!", file);
    },
  });

  const HandelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const vaildatedFileds = schemea.safeParse({ file });

    if (!vaildatedFileds.success) {
      toast.error("Something went wrong!");
      console.log(
        vaildatedFileds.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
      );

      return;
    }

    const response = await startUpload([file]);
    if (!response) {
      toast.error("Something went wrong!");

      return;
    }
    toast("Hang tight! we are working on it!");

    const summaryResult = await generatePdfSummary(response);
    console.log({ summaryResult });
    if (summaryResult?.Success) {
      toast.success("Summary generated successfully!");
      router.push("/your-summaries");
    } else {
      toast.error("Failed to generate summary.");
    }
  };

  return (
    <section className=" relative min-h-screen flex items-center justify-center">
      <div className="absolute top-10 left-1/5 w-60 h-60 bg-blue-400 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className=" mx-auto flex flex-col items-center justify-center px-2 sm:px-4 lg:px-6  mb-10">
        <Badge
          variant="secondary"
          className=" h-12 w-60 text-center mt-20 mb-5 text-md font-semibold bg-gradient-to-b from-blue-200
         to-blue-400 text-white border-none rounded-full shadow-lg flex items-center justify-center gap-2  hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 animate-pulse" /> AI
          Content Creator
        </Badge>
        <h3 className="text-center max-w-3xl mx-auto font-bold mb-4">
          Start Uploading Your PDF's
        </h3>
        <p className="text-gray-500 text-center mb-4">
          Upload Your PDF's and let AI do the{" "}
          <span className="hover:text-blue-400">magic</span> for you ✨
        </p>
        <UploadForm onSubmit={HandelSubmit} />
      </div>
    </section>
  );
}

export default UploadSection;
