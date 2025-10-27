import { sendMessageContact } from "@/actions/actions";
import SubmitButton from "@/components/submit-button";
import React from "react";

function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-900 py-20"
    >
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
          Contact
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          Have a project in mind or want to collaborate? I’d love to hear from
          you.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md mx-auto">
          <form className="space-y-6" action={sendMessageContact}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                required
              ></textarea>
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
