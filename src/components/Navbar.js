import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <span className="font-bold text-xl">TUM LLM Evaluator</span>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#how" className="hover:underline">How It Works</a>
          <a href="#examples" className="hover:underline">Examples</a>
          <a href="#upload" className="hover:underline">Upload</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
