import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export default function UserInputForm({
  sendMessage,
  input,
  setInput,
  isLoading,
}: {
  sendMessage: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}) {
  return (
    <form onSubmit={sendMessage} className="border-t p-4 flex">
      <input
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder="Type your message..."
        className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
        disabled={isLoading}
      >
        Send
      </button>
    </form>
  );
}
