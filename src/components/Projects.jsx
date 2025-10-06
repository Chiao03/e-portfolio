import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: "Clinical Reasoning Simulations",
      description: "AI-powered medical education platform simulating high-pressure clinical scenarios.",
      tags: [
        { name: "React", bg: "blue", text: "blue" },
        { name: "Typescript", bg: "green", text: "green" },
        { name: "LLaMA 3", bg: "purple", text: "purple" },
        { name: "PostgreSQL", bg: "red", text: "red" },
      ],
      iconClass: "bg-gradient-to-br from-purple-500 to-blue-600",
      iconFAClass: "fas fa-brain",
      demoLink: "https://github-production-user-asset-6210df.s3.amazonaws.com/84591143/454716633-e5287edf-f655-490e-9021-dc6590f62f63.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251005%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251005T152928Z&X-Amz-Expires=300&X-Amz-Signature=0e3960b2017288290a279176de68c419afd028222885e88ba99cb560fdf6b330&X-Amz-SignedHeaders=host",
    },
    {
      title: "AI Agent in Board Game",
      description: "Intelligent agents for Splendor using MCTS, Minimax, and Q-learning.",
      tags: [
        { name: "Python", bg: "blue", text: "blue" },
        { name: "Machine Learning", bg: "yellow", text: "yellow" },
        { name: "AI", bg: "red", text: "red" },
      ],
      iconClass: "bg-gradient-to-br from-green-500 to-teal-600",
      iconFAClass: "fas fa-robot",
      codeLink: "https://github.com/Chiao03/ai-agent-splendor",
    },
    {
      title: "Face Verification Model",
      description: "Face recognition system using SVM, CNN, and Hybrid Vision Transformer models.",
      tags: [
        { name: "Python", bg: "blue", text: "blue" },
        { name: "Deep Learning", bg: "green", text: "green" },
        { name: "Machine Learning", bg: "purple", text: "purple" },
      ],
      iconClass: "bg-gradient-to-br from-orange-500 to-red-600",
      iconFAClass: "fas fa-user-check",
      codeLink: "https://github.com/Chiao03/face-verification-model?tab=readme-ov-file",
    },
  ];
  

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
