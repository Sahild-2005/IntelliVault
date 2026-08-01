import ai from "./geminiService.js";

export const chatWithDocument = async (
  fileUrl,
  question
) => {

  console.log("================================");
  console.log("INSIDE chatWithDocument");
  console.log("File URL:", fileUrl);
  console.log("Question:", question);

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

    console.log("Sending request to Gemini...");

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

    console.log("Gemini Response:");
    console.log(response);

    return response.text;

  } catch (error) {
    console.error("================================");
    console.error("CHAT AI ERROR");
    console.error(error);

    if (error.message) {
      console.error("Message:", error.message);
    }

    if (error.status) {
      console.error("Status:", error.status);
    }

    if (error.error) {
      console.error("API Error:", error.error);
    }

    throw error;
  }
};