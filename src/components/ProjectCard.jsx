import React from "react";

function ProjectCard({ title, description, tags, iconClass, iconFAClass, demoLink, codeLink }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in">
      {/* Icon */}
      <div className={`h-48 flex items-center justify-center ${iconClass}`}>
        {iconFAClass && <i className={`${iconFAClass} text-white text-4xl`}></i>}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className={`bg-${tag.bg}-100 text-${tag.text}-800 px-2 py-1 rounded text-xs`}>
              {tag.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
              <i className="fas fa-external-link-alt mr-1"></i>Live Demo
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <button className="text-gray-600 hover:text-gray-800 font-medium">
                <i className="fab fa-github mr-1"></i>Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
