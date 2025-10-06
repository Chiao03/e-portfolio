import React from 'react';
import "../App.css";

function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6">
            CY
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">Chiao Yang</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Full-Stack Software Engineer passionate about creating innovative solutions and beautiful user experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              View My Work
            </button>
          </a>
          <a href="#contact">
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
