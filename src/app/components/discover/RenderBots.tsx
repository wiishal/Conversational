import { useEffect, useState } from "react";
import BotCard from "./BotCard";
import { getBotController } from "@/app/controllers/controller.bot";
import Loading from "../ui/Loading";
import { BotsData } from "@/app/types/type";

const categories = [
  {
    id: "interview",
    title: "🎯 Interview Practice",
    description: "Sharpen your skills for your next job interview.",
  },
  {
    id: "personality",
    title: "🎭 Personality Types",
    description: "Engage with bots embodying various character traits.",
  },
  {
    id: "mythology",
    title: "✨ Legendary Figures",
    description: "Learn and gain insights from mythological and historical figures.",
  },
  {
    id: "communication",
    title: "🗣️ Communication Skills",
    description: "Practice and improve your conversational and social abilities.",
  },
];

export default function RenderBots() {
  const [botsData, setBotsData] = useState<BotsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBotsData = async () => {
    setIsLoading(true); 
    setError(null);    
    try {
      const data = await getBotController();
      setBotsData(data);
    } catch (err) {
      setError("Failed to load bots. Please check your connection and try again.");
      console.error("Bot Fetch Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBotsData();
  }, []); 


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 bg-red-50 border-2 border-red-300 rounded-xl shadow-lg transition-all">
        <h3 className="text-xl font-semibold text-red-800 mb-2">🚨 Error Loading Content</h3>
        <p className="text-red-600 mb-5">{error}</p>
        
        <button
          onClick={fetchBotsData} 
          className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          <span className="text-lg">↻</span> 
          <span className="font-medium">Try Again</span>
        </button>
      </div>
    );
  }


  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto space-y-16 py-8 sm:py-12 px-4">
      <h1 className="text-4xl font-extrabold  border-b pb-4 mb-4">
        Explore AI Bots
      </h1>
      
      {botsData &&
        categories.map((category) => {
          const categoryBots = botsData[category.id as keyof BotsData];
          
          if (!categoryBots || categoryBots.length === 0) {
            return null;
          }

          return (
            <section 
              key={category.id} 
              className="space-y-6"
            >
              <div className="border-l-4 border-indigo-500 pl-4">
                <h2 className="text-3xl font-bold  mb-1">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-500">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryBots.map((bot) => (
                  <BotCard key={bot.id} bot={bot} />
                ))}
              </div>
            </section>
          );
        })}
        
      {botsData && Object.keys(botsData).length === 0 && (
          <div className="p-10 text-center text-gray-500">
              <p className="text-xl">No bots found at the moment. Please check back later!</p>
          </div>
      )}
    </div>
  );
}