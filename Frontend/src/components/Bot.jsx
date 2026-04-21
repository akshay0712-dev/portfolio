import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import BotResponse from "./BotResponse.js";
import ReactMarkdown from "react-markdown";

const Bot = () => {
  const messagesEndRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm Akshay's AI assistant. Ask me anything about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const bot_replay = await BotResponse(input);

      const botMessage = {
        role: "bot",
        text: bot_replay || "Hmm... I couldn't understand that.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Error connecting to server." },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 font-semibold">
            <div className="">🤖 Ask Akshay</div>
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:scale-110 transition"
            >
              {open ? <X /> : <MessageCircle />}
            </button>
            
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] overflow-hidden ${
                  msg.role === "user"
                    ? "bg-purple-500 text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}

            {loading && <div className="text-sm text-gray-500">Typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg px-2 py-1 outline-none"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-purple-500 text-white p-2 rounded-lg"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Bot;
