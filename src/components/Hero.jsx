import { useEffect, useState } from "react";
import BubbleBackground from "./BubbleBackground";

/* Updated Roles */
const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "React Developer",
  "Web Developer"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [projectCount, setProjectCount] = useState(1);

  /* Typing Animation */
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentRole(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentRole("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  /* Count Up Effect */
  useEffect(() => {
    let current = 1;
    const target = 10;

    const interval = setInterval(() => {
      current++;
      setProjectCount(current);

      if (current >= target) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen bg-[#020617]
        flex items-center justify-center text-center
        pt-24 px-6 overflow-hidden
      "
    >
      {/* Aurora */}
      <div className="aurora-bg" />

      {/* Bubbles */}
      <BubbleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">

        {/* Badge */}
        <span className="
          inline-block mb-6 px-4 py-1 text-sm rounded-full
          bg-cyan-500/10 text-cyan-400
          border border-cyan-500/30
          animate-fade-up
        ">
          🚀 Open to Full Stack, Frontend & Backend Roles
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-400 to-blue-500
          ">
            {currentRole}
          </span>
          <span className="blinking-cursor">|</span>
        </h1>

        {/* Subtitle */}
       <p className="
  mt-6 text-lg md:text-xl text-gray-400
  leading-relaxed max-w-xl mx-auto
  animate-fade-up
">
  I develop scalable and high-performance web applications using{" "}
  <span className="text-gray-200 font-medium">
    Node.js, Express.js, MongoDB & React.
  </span>{" "}
  Passionate about building efficient APIs, clean UI, and real-world solutions.
</p>

        {/* Buttons */}
        <div className="
          mt-10 flex flex-col sm:flex-row
          justify-center gap-4 animate-fade-up
        ">
          <a
            href="#contact"
            className="
              px-8 py-3 bg-cyan-500 text-black rounded-lg
              font-semibold transition
              hover:bg-cyan-400
              hover:shadow-[0_0_28px_rgba(34,211,238,0.6)]
            "
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="
              px-8 py-3 border border-cyan-500 text-cyan-400
              rounded-lg transition
              hover:bg-cyan-500 hover:text-black
              hover:shadow-[0_0_24px_rgba(34,211,238,0.4)]
            "
          >
            View Projects
          </a>
        </div>

        {/* Stats */}
        <div className="
          mt-14 flex justify-center gap-10
          text-sm text-gray-400 animate-fade-up
        ">
          <div>
            <p className="text-white font-bold text-2xl">
              {projectCount}+
            </p>
            <p>Projects</p>
          </div>

          <div>
            <p className="text-white font-bold text-2xl">SIH 2025</p>
            <p>Hackathon</p>
          </div>

          <div>
            <p className="text-white font-bold text-2xl">Internships</p>
            <p>Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}
