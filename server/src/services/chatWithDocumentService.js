import ai from "./geminiService.js";

export const chatWithDocument = async (
  fileUrl,
  question
) => {
  try {
    const prompt = `
You are an AI document assistant.

Answer ONLY from the uploaded document.

Rules:
- If the answer exists in the document, answer clearly.
- If the document doesn't contain the answer, say:
"I couldn't find that information in the document."
- Keep answers concise unless the user asks for detail.

User Question:
${question}
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

    return response.text;
  } catch (error) {
    console.error("Chat AI Error:", error);
    throw error;
  }
};