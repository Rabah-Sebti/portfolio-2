import React from "react";
import { timeline } from "@/constants/resume";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { socials } from "@/constants/socials";
import Link from "next/link";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-900 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              My professional journey and experience
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {item.company}
                    </p>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                    {item.date}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {item.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                          •
                        </span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12">
            <div className="flex flex-row gap-3">
              {socials.map((item) => (
                <Link key={item.label} href={item.href}>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={52}
                    height={52}
                  />
                </Link>
              ))}
            </div>
            <a
              href="/files/Rabah_Sebti_CV.pdf"
              download="Rabah_Sebti_CV.pdf"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
