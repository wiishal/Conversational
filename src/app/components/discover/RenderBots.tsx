import { useEffect, useState } from "react";
import { bots } from "@/app/types/type";
import BotCard from "./BotCard";
import { getBotController } from "@/app/controllers/controller.bot";

export default function RenderBots() {
  const [botsData, setBotsData] = useState<BotsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBots() {
      try {
        const data = await getBotController();
        setBotsData(data);
      } catch (err) {
        setError("Failed to load bots. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBots();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-blue-400 rounded-full animate-spin mb-4"></div>
          <p className="text-accent">Loading bots...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700 font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 font-medium"
        >
          Try Again
        </button>
      </div>
    );
  }

  const categories = [
    {
      id: "interview",
      title: "Interview Bots",
      description: "Practice for your next job interview",
    },
    {
      id: "personality",
      title: "Personality Bots",
      description: "Chat with different personality types",
    },
    {
      id: "mythology",
      title: "Mythology Bots",
      description: "Learn from legendary figures",
    },
    {
      id: "communication",
      title: "Communication Bots",
      description: "Improve your communication skills",
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-12 py-6">
      {botsData &&
        categories.map(
          (category) =>
            botsData[category.id as keyof BotsData]?.length > 0 && (
              <section key={category.id} className="space-y-4">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">
                    {category.title}
                  </h2>
                  <p className="">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {botsData[category.id as keyof BotsData].map((bot) => (
                    <BotCard key={bot.id} bot={bot} />
                  ))}
                </div>
              </section>
            )
        )}
    </div>
  );
}

interface BotsData {
  communication: bots[];
  interview: bots[];
  personality: bots[];
  mythology: bots[];
}
