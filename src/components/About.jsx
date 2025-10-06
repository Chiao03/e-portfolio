import React, { useEffect } from "react";
import "./fadein.css"; 

function About() {
  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Animate skill bars
            const skillBars = entry.target.querySelectorAll(".skill-bar");
            skillBars.forEach((bar) => {
              const width = bar.getAttribute("data-width"); 
              bar.style.setProperty("--skill-width", width / 100); 
              bar.classList.add("animate");
            });
            

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  const skills = [
    { name: "Python", level: 85 },
    { name: "Node.js/Backend APIs", level: 85 },
    { name: "React / Frontend Development", level: 80 },
    { name: "SQL & Databases", level: 80 },
  ];

  const techTags = [
    { name: "React", bg: "bg-purple-100", text: "text-purple-800" },
    { name: "Node.js", bg: "bg-blue-100", text: "text-blue-800" },
    { name: "Python", bg: "bg-green-100", text: "text-green-800" },
    { name: "Java", bg: "bg-yellow-100", text: "text-yellow-800" },
    { name: "SQL", bg: "bg-red-100", text: "text-red-800" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Me */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I’m a recent <span className="font-semibold">Master of Information Technology (Artificial Intelligence)</span> graduate from the{" "}
            <span className="text-indigo-600">University of Melbourne</span>, with a foundation in <span className="font-semibold">Finance and Economics</span>.
            I’m a passionate software engineer with hands-on experience building <span className="font-semibold">scalable web applications, data-driven solutions, and AI projects</span>.
            <br /><br />
            My portfolio includes projects in <span className="font-semibold">deep learning, intelligent agents, and full-stack development</span>, alongside professional experience in <span className="font-semibold">data analysis, automation, and backend systems</span>.
            I thrive at the intersection of technology and problem-solving, and I’m eager to contribute innovative solutions that create real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* My Journey */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I began my academic journey studying <span className="font-semibold">Finance and Economics</span>, where I developed strong analytical and problem-solving skills. My curiosity for technology and data led me to pursue a <span className="font-semibold">Master of Information Technology (Artificial Intelligence)</span> at the University of Melbourne.
              <br /><br />
              Along the way, I’ve built projects in <span className="font-semibold">machine learning, intelligent agents, and full-stack web development</span>, applying both technical and analytical expertise.
              Today, I specialize in <span className="font-semibold">Python, Java, React, Node.js, and data-driven solutions</span>, with a focus on creating impactful applications that bridge the gap between business insight and cutting-edge technology.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, walking my dog, or exploring new areas with my camera.
            </p>

            <div className="flex flex-wrap gap-3">
              {techTags.map((tag, index) => (
                <span key={index} className={`${tag.bg} ${tag.text} px-4 py-2 rounded-full text-sm font-medium`}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="skill-bar" data-width={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
