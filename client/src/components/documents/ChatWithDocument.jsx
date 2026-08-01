import { useState } from "react";
import axios from "axios";

const ChatWithDocument = ({ documentId }) => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim() || loading) return;

    const userQuestion = question.trim();

    const userMessage = {
      sender: "user",
      text: userQuestion,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
       `${API_URL}/documents/${documentId}/chat`,
        {
          question: userQuestion,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const aiMessage = {
        sender: "ai",
        text: res.data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat Error:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Unable to contact the AI assistant. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">

      <h2 className="mb-5 text-2xl font-bold text-foreground">
        💬 Chat with Document
      </h2>

      <div className="mb-4 h-96 space-y-4 overflow-y-auto rounded-xl border border-border bg-background p-4">

        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-muted-foreground">
              Hello! 👋
              <br />
              Ask me anything about this document.
            </p>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "border border-border bg-muted text-foreground"
              }`}
            >
              <p className="whitespace-pre-wrap break-words leading-7">
                {msg.text}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl border border-border bg-muted px-4 py-3 text-muted-foreground">
              🤖 AI is thinking...
            </div>
          </div>
        )}

      </div>

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Ask a question about the document..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              handleSend();
            }
          }}
          disabled={loading}
          className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 disabled:opacity-60"
        />

        <button
          onClick={handleSend}
          disabled={loading || !question.trim()}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send"}
        </button>

      </div>
    </div>
  );
};

export default ChatWithDocument;