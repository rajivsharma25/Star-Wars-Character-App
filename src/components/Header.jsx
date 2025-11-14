import React from "react";
import logo from "../assets/logo.png";
import { Github, Linkedin, BriefcaseBusiness } from "lucide-react";

function Header() {
  return (
    //  header 
    <header className="w-full fixed top-0 left-0 z-30 bg-black/60 backdrop-blur-md backdrop-saturate-150 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 md:w-28 h-auto mr-3" />
        </div>
        {/* Social and portfolio links */}
        <nav className="flex items-center gap-5">
          <a
            href="https://github.com/rajivsharma25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            title="GitHub"
          >
            <Github className="w-6 h-6 text-white hover:text-blue-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/rajivsharma25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-white hover:text-blue-500 transition" />
          </a>

          <a
            href="https://rajivsharma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my portfolio website"
            title="Portfolio Website"
          >
            <BriefcaseBusiness className="w-6 h-6 text-white hover:text-violet-400 transition" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
