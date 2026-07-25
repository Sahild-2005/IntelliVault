import ai from "./geminiService.js";

export const analyzeDocumentWithAI = async (fileUrl) => {
  try {
    const prompt = `
You are an intelligent document analyzer.

Analyze this PDF document and return ONLY valid JSON.

{
  "documentType": "",
  "summary": "",
  "keywords": [],
  "suggestedTitle": ""
}

Rules:
- documentType should be one of: Resume, Invoice, Research Paper, Notes, Assignment, Report, Certificate, Book, Presentation, Question Paper, Reference Guide, Manual, or another appropriate type.
- summary should be 3-5 concise sentences.
- keywords should be an array of 5-8 important keywords.
- suggestedTitle should be a descriptive title for the document.
- Return ONLY valid JSON. Do not include markdown or explanations.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          fileData: {
            fileUri: fileUrl,
            mimeType: "application/pdf",
          },
        },
        {
          text: prompt,
        },
      ],
    });

    let result = response.text.trim();

    result = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("\n========== GEMINI RAW RESPONSE ==========");
    console.log(result);
    console.log("=========================================\n");

    const parsed = JSON.parse(result);

    console.log("\n========== PARSED JSON ==========");
    console.log(parsed);
    console.log("=================================\n");

    return parsed;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};