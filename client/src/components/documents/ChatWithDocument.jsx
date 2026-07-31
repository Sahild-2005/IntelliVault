import { useState } from "react";
import axios from "axios";

const ChatWithDocument = ({ documentId }) => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:5000/api/documents/${documentId}/chat`,
        {
          question,
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
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
      setQuestion("");
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
            <p className="text-muted-foreground">
              Hello! How can I help you with the uploaded document?
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
              className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "border border-border bg-muted text-foreground"
              }`}
            >
              <p className="whitespace-pre-wrap leading-7">
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
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              handleSend();
            }
          }}
          className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send
        </button>

      </div>
    </div>
  );
};

export default ChatWithDocument;