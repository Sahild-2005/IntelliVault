import { Sparkles, Bot, FileSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AIAssistantCard({ stats }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-lg">

      <div className="mb-6 flex items-center gap-3">
        <Sparkles size={30} />

        <div>
          <h2 className="text-2xl font-bold">
            AI Assistant
          </h2>

          <p className="text-blue-100 text-sm">
            Powered by Google Gemini
          </p>
        </div>
      </div>

      <p className="mb-6 text-blue-100 leading-relaxed">
        Analyze documents, generate summaries, extract insights and
        chat intelligently with your PDFs.
      </p>

      {/* Stats */}

      <div className="mb-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
          <p className="text-sm text-blue-100">
            AI Analyzed
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {stats?.analyzedDocuments ?? 0}
          </h3>
        </div>

        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
          <p className="text-sm text-blue-100">
            Documents
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {stats?.totalDocuments ?? 0}
          </h3>
        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-3">

        <button
          onClick={() => navigate("/documents")}
          className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
        >
          <Bot size={20} />
          Start AI Chat
        </button>

        <button
          onClick={() => navigate("/documents")}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 py-3 font-semibold text-white transition hover:bg-white/20"
        >
          <FileSearch size={20} />
          Analyze Documents
        </button>

      </div>

    </div>
  );
}

export default AIAssistantCard;