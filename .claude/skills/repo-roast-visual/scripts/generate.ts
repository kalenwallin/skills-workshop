import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

async function main() {
  const ai = new GoogleGenAI({apiKey: 'AIzaSyBcCLcc1z6Mxb29Kqb9p1oM8x_sFrhhRpU'});

  const prompt = process.argv[2];
  if (!prompt) {
    console.error("Usage: tsx scripts/generate.ts <prompt>");
    process.exit(1);
  }

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-image-preview",
    contents: prompt,
  });
  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
      console.log("Image saved as gemini-native-image.png");
    }
  }
}

main();
