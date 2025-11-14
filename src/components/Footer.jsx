import React from "react";
import { Github, Linkedin, BriefcaseBusiness } from "lucide-react";

function Footer() {
  return (
    // footer section 
    <footer className="w-full bg-gray-800/60 backdrop-blur-md backdrop-saturate-150 border-t border-white/10 py-5 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright text */}
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <span className="text-xs text-gray-400">
            © {new Date().getFullYear()} Rajiv Sharma. All rights reserved.
          </span>
        </div>
        {/* Social and portfolio links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rajivsharma25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            title="GitHub"
          >
            <Github className="w-5 h-5 text-white hover:text-blue-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/rajivsharma25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white hover:text-blue-500 transition" />
          </a>

          <a
            href="https://rajivsharma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my portfolio website"
            title="Portfolio Website"
          >
            <BriefcaseBusiness className="w-5 h-5 text-white hover:text-violet-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
