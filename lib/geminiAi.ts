import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUMMARY_SYSTEM_PROMPT } from "../lib/prompts";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
//AIzaSyCbO4OINKQGrYGv_04Wv0KSxoUfRf7UtwQ
export const generateSummaryFromGeminiAi = async (pdfText: string) => {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001",generationConfig: { temperature: 0.5 ,maxOutputTokens:1500} });

    // Define the prompt using proper template string syntax
    const prompt = `${SUMMARY_SYSTEM_PROMPT}\n\nTransform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`;

    // Generate content using the model
    const result = await model.generateContent(prompt);

    // Extract and return the text response
    const responseText = await result.response.text();
    if (!responseText) {
      throw new Error("Failed to generate summary: Empty response from Gemini AI.");
    }

    return responseText;
  } catch (error: any) {
    // Handle rate limit errors
    if (error?.status === 429) {
      throw new Error("RATE_LIMIT_EXCEEDED");
    }

    // Log and rethrow other errors
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate summary from Gemini AI.");
  }
};
