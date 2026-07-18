import { Sparkles } from "lucide-react";

function AIAssistantCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-lg">

      <div className="mb-4 flex items-center gap-3">

        <Sparkles size={30} />

        <h2 className="text-2xl font-bold">
          AI Assistant
        </h2>

      </div>

      <p className="mb-6 text-blue-100">
        Summarize PDFs, extract text with OCR, and chat with your documents using Gemini AI.
      </p>

      <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100">
        Start AI Chat
      </button>

    </div>
  );
}

export default AIAssistantCard;