"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import {
  initializeChatController,
  sendMsgController,
} from "../controllers/controller.user";
import ChatLoading from "./ui/ChatLoading";
import UserInputForm from "./UserInputForm";
import AnalysisChat from "./AnalysisChat";
import { ebotType } from "../types/enum";
import { Button } from "./ui/button";
import { Message } from "../types/type";

interface ChatInterfaceProps {
  botId: string;
}

export default function ChatInterface({ botId }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analysisData, setAnalysisData] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [bot, setBot] = useState<{ name: string; type: ebotType }>({
    name: "",
    type: ebotType.interviewer,
  });

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
      setBot(response.data.bot);
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
      const reply = response.data.aiMsg.replace(/\*/g, "");
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
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
    <div className="flex flex-row  h-full  gap-4 lg:p-4 max-w-7xl mx-auto justify-center transition-all ease-in-out">
      <div className="flex flex-col lg:w-2/3 w-full h-full border rounded-lg shadow-md text-sm">
        <div className="p-2 border flex flex-row justify-between items-center">
          <p className="font-medium p-2">{bot?.name}</p>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => setAnalysisData(true)}
            >
              Get Analysis
            </Button>
        </div>
        <div className="overflow-y-auto p-4 lg:space-y-4 flex-grow">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
                className={`max-w-[70%] px-4 py-2 rounded-lg cursor-pointer hover:outline-none hover:ring-2 hover:ring-blue-300 ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-accent  rounded-bl-none"
                }`}
                onClick={() => {
                  setAnalysisData(true);
                }}
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
      {analysisData ? (
        <div className="w-1/3 h-full border ">
          <AnalysisChat messages={messages} setAnalysisData={setAnalysisData} />
        </div>
      ) : null}
    </div>
  );
}
