import Appbar from "../components/Appbar";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* App Bar */}
      <div className="lg:w-2/3 w-full flex items-center justify-center flex-col">
        <Appbar />

        {/* Docs Section */}
        <div className="w-full max-w-4xl mt-6 p-6 flex flex-col justify-center items-center text-white shadow-lg rounded-lg border border-red">
          <h1 className="text-3xl font-bold text-center mb-4">
            AI Writing Evaluation Platform
          </h1>

          <p className="text-gray-600 text-center">
            Improve writing clarity, confidence, and communication using AI
            feedback
          </p>

          <div className="mt-6 space-y-4">
            {/* Feature 1 */}
            <div className="p-4 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold">
                Structured Writing Practice
              </h2>
              <p>
                Practice real-world writing such as emails, essays, reflections,
                and interview answers in a focused, distraction-free
                environment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 border-l-4 border-green-500">
              <h2 className="text-xl font-semibold">
                AI-Based Writing Evaluation
              </h2>
              <p>
                Your writing is evaluated by AI for clarity, structure, grammar,
                tone, and vocabulary, helping you understand exactly where you
                need to improve.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 border-l-4 border-purple-500">
              <h2 className="text-xl font-semibold">
                Actionable Feedback & Suggestions
              </h2>
              <p>
                Instead of generic scores, you receive clear suggestions and
                corrections that you can apply immediately to improve your
                communication skills.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-4 border-l-4 border-fuchsia-500">
              <h2 className="text-xl font-semibold">
                Writing That Improves Speaking
              </h2>
              <p>
                Writing acts as a rehearsal space. As your writing becomes more
                organized and expressive, your spoken communication becomes
                clearer and more confident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
