import ai from "../services/geminiService.js";

export const testGemini = async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Say hello from IntelliVault AI.",
    });

    res.status(200).json({
      success: true,
      response: response.text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
