// actions/uploadAction.ts
"use server";

import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { fetchAndExtractPdfText } from "../../lib/langchain";
import { generateSummaryFromGeminiAi } from "../../lib/geminiAi";

export async function generatePdfSummary(
  uploadResponse: [
    {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    }
  ]
) {
  if (!uploadResponse || uploadResponse.length === 0) {
    return {
      Success: false,
      message: "File upload failed: No file data",
      data: null,
    };
  }

  // Extract info from uploadResponse
  const {
    serverData: {
      userId,
      file: { url: pdfurl, name: filename },
    },
  } = uploadResponse[0];

  if (!pdfurl) {
    return {
      Success: false,
      message: "File upload failed: No URL",
      data: null,
    };
  }

  try {
    // 1. Get current authenticated user
    const user = await currentUser();
    if (!user) {
      return {
        Success: false,
        message: "User not authenticated",
        data: null,
      };
    }
    const email = user.emailAddresses[0].emailAddress;

    // 2. Extract text from PDF
    const pdfText = await fetchAndExtractPdfText(pdfurl);
    console.log({ pdfText });

    // 3. Generate summary from text
    let summary: string | undefined;
    try {
      summary = await generateSummaryFromGeminiAi(pdfText);
      console.log({ summary });
    } catch (error) {
      console.error("Gemini AI Error:", error);
      return {
        Success: false,
        message: "Failed to generate summary with Gemini AI",
        data: null,
      };
    }

    if (!summary) {
      return {
        Success: false,
        message: "Failed to generate summary",
        data: null,
      };
    }

    // 4. Create or find user in database
    const dbUser = await prisma.user.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    // 5. Save the generated summary into Supabase
    const savedSummary = await prisma.summary.create({
      data: {
        title: filename,
        content: summary,
        userId: dbUser.id,
      },
    });

    return {
      Success: true,
      message: "Summary generated and saved successfully",
      data: savedSummary,
    };

  } catch (error) {
    console.error("Error during PDF processing and saving:", error);
    return {
      Success: false,
      message: "Error during PDF processing and saving",
      data: null,
    };
  }
}
