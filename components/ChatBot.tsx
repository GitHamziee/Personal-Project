"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Data Mentor Labs assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Placeholder response — swap back to API call once Grok credits are active
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "This feature is coming soon! Stay tuned." },
    ]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg text-white shadow-lg shadow-accent/30 flex items-center justify-center hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10 flex flex-col glass"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="gradient-bg px-5 py-4 flex items-center gap-3">
              <Bot className="w-6 h-6 text-white" />
              <p className="text-white font-semibold text-sm">DML Assistant</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "gradient-bg text-white rounded-br-md"
                        : "bg-white/10 text-white rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-3 border-t border-white/10 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="contact-input flex-1 !rounded-full !px-4 !py-2.5 text-sm"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
