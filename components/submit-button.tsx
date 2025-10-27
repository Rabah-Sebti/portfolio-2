"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 disabled:shadow-none disabled:pointer-events-none disabled:opacity-50 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 cursor-pointer"
    >
      Send Message
    </button>
  );
}

export default SubmitButton;
