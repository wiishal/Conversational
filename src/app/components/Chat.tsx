"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import {
  initializeChatController,
  sendMsgController,
} from "../controllers/controller.user";
import ChatLoading from "./ui/ChatLoading";
import UserInputForm from "./UserInputForm";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  botId: string;
}

export default function ChatInterface({ botId }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    initializeChat();
  }, []);

  async function initializeChat(): Promise<void> {
    setIsLoading(true);
    try {
      const response = await initializeChatController(botId);
      if (!response) return alert("something went wrong");
      setConversationId(response.data.conversationId);
      setMessages([{ role: "assistant", content: response.data.aiMsg }]);
    } catch (error) {
      console.error("Error initializing chat:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function sendMessage(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    if (!conversationId) return alert("your id missing");

    try {
      const response = await sendMsgController(
        botId,
        userMessage,
        conversationId
      );
      if (!response) return alert("something went wrong");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data.aiMsg },
      ]);

    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-row h-[85vh] h-full  gap-4 lg:p-4 max-w-7xl mx-auto justify-center">
      {/* Chat Section - Left Side */}
      <div className="flex flex-col lg:w-2/3 w-full h-full border rounded-lg shadow-md text-sm">
        <div className="overflow-y-auto p-4 lg:space-y-4 flex-grow">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-accent  rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Loading Animation */}
          {isLoading && <ChatLoading />}
          <div ref={messagesEndRef} />
        </div>

        {/* user input field */}
        <UserInputForm
          sendMessage={sendMessage}
          input={input}
          setInput={setInput}
          isLoading={isLoading}
        />
        
      </div>

      {/* Analysis Section - Right Side */}
      {/* <div className="w-1/3 h-full border rounded-lg shadow-md bg-white p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
          Conversation Analysis
        </h2>

        {analysisData ? (
          <div className="space-y-6">hii</div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No analysis data available</p>
          </div>
        )}
      </div> */}
    </div>
  );
}
