// import { stat } from "fs";
// import OpenAI from "openai";
// import { SUMMARY_SYSTEM_PROMPT } from "../lib/prompts";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure this environment variable is set
// });

// export async function generateSummaryFromOpenAI(pdfText :string) {
//   try{
//   const completion = await client.chat.completions.create({
//       model: "gpt-4.1",
//       messages: [
//         {
//           role: "system",
//           content: SUMMARY_SYSTEM_PROMPT,
//         },
//         {
//           role: "user",
//           content: `transform this document into a engaging , easy to read summary 
//            with  contextually relevant emojis and proper markdown format:\n\n ${pdfText}`,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: 500,
//   });
//     return completion.choices[0].message.content;
//   }catch (error:any) {
//     if (error?.status === 429) {
//       throw new Error("Rate limit exceeded. Please try again later.");
//     }
//     throw error;
//   }
 
  
//  } 
