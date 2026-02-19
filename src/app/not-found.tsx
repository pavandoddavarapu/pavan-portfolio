"use client";
import React from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            This page can&apos;t be found
          </h2>
        </div>

        <p className="text-gray-500 mb-6 text-lg">
          Looks like the information you&apos;re searching for doesn&apos;t
          exist or has been moved.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Go Back Home
            </a>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            <FaCode className="inline-block mr-2" />
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}