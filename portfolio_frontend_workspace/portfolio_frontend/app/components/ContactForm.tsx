import { useState } from "react";

// PUBLIC_INTERFACE
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Placeholder submit handler (can be replaced with real Remix action)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-900 p-8 rounded-xl border border-gray-800 shadow">
      <h2 className="text-2xl font-bold mb-4 text-primary">Contact Me</h2>
      {submitted ? (
        <div className="text-green-400 font-semibold">
          Thank you for your message! I&apos;ll get back to you soon.
        </div>
      ) : (
        <>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
              Name
            </label>
            <input
              className="w-full bg-gray-950 border border-gray-800 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:border-primary"
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              className="w-full bg-gray-950 border border-gray-800 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:border-primary"
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
              Message
            </label>
            <textarea
              className="w-full bg-gray-950 border border-gray-800 rounded-md px-3 py-2 text-gray-100 min-h-[100px] focus:outline-none focus:border-primary"
              id="message"
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full font-bold bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition"
          >
            Send
          </button>
          {error && <div className="mt-3 text-red-400">{error}</div>}
        </>
      )}
    </form>
  );
}
