import Appbar from "../components/Appbar";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* App Bar */}
      <div className="lg:w-2/3 w-full flex items-center justify-center flex-col">
        <Appbar />

        {/* Features Section */}
        <div className="w-full max-w-4xl mt-6 p-6 flex flex-col justify-center items-center text-white shadow-lg rounded-lg border border-red">
          <h1 className="text-3xl font-bold text-center mb-4">
            Conversational AI Chatbot
          </h1>
          <p className="text-gray-600 text-center">
            Powered by LangChain.js & Gemini LLM
          </p>

          <div className="mt-6 space-y-4">
            <div className="p-4 border-l-4 border-blue-500 ">
              <h2 className="text-xl font-semibold">Multiple Chatbots</h2>
              <p>
                Engage with different AI personalities for various conversation
                experiences.
              </p>
            </div>

            <div className="p-4 border-l-4 border-green-500 ">
              <h2 className="text-xl font-semibold">Secure Authentication</h2>
              <p>
                Clerk is used for authentication, ensuring a secure user
                experience.
              </p>
            </div>

            <div className="p-4 border-l-4 border-purple-500 ">
              <h2 className="text-xl font-semibold">AI-Powered Responses</h2>
              <p>
                Leveraging LangChain.js and Gemini LLM for intelligent and
                dynamic conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
