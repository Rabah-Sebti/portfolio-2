"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="bg-slate-800 min-h-screen text-white  flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-6xl font-semibold">Something went wrong!</h2>
        <button
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 disabled:shadow-none disabled:pointer-events-none disabled:opacity-50 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  );
}
