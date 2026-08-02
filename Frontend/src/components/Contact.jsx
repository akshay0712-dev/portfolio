import React from "react";
import { 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiHome, 
  FiUser, 
  FiCode, 
  FiFolder, 
  FiArrowUp,
  FiTerminal,
  FiSend
} from "react-icons/fi";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full mt-24 ">
      {/* Outer Glassmorphism Container */}
      <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 transition-all duration-300 relative overflow-hidden">
        
        {/* Subtle Accent Glow Pill in Background */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
          
          {/* Brand & Dev Info (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold tracking-wide">
                <FiTerminal className="text-sm" />
                <span>Full-Stack & Web Developer</span>
              </div>
              
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                Let's Build Something Great Together.
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                I'm always open to discussing new web development projects, creative ideas, or opportunities to contribute to exciting applications.
              </p>
            </div>

            {/* Direct Mail CTA Button */}
            <div>
              <a
                href="mailto:akshayrishu4@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all duration-300 shadow-md shadow-indigo-500/20 active:scale-95"
              >
                <FiSend className="text-base" />
                <span>Say Hello</span>
              </a>
            </div>
          </div>

          {/* Connect Cards & Quick Links (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-200/60">
            
            {/* Social / Direct Channels */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Connect With Me
              </h3>
              
              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:akshayrishu4@gmail.com"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50/80 hover:bg-indigo-50/80 border border-slate-200/50 hover:border-indigo-200/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <FiMail className="text-slate-500 group-hover:text-indigo-600 transition-colors text-base" />
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      akshayrishu4@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/akshay0712-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50/80 hover:bg-indigo-50/80 border border-slate-200/50 hover:border-indigo-200/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <FiGithub className="text-slate-500 group-hover:text-indigo-600 transition-colors text-base" />
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      GitHub
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold group-hover:text-indigo-500">
                    /akshay0712-dev
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50/80 hover:bg-indigo-50/80 border border-slate-200/50 hover:border-indigo-200/80 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <FiLinkedin className="text-slate-500 group-hover:text-indigo-600 transition-colors text-base" />
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      LinkedIn
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold group-hover:text-indigo-500">
                    /akshay-kumar
                  </span>
                </a>
              </div>
            </div>

            {/* Portfolio Links */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Navigation
              </h3>

              <div className="grid grid-cols-1 gap-2">
                {[
                  { name: "Home", href: "#home", icon: FiHome },
                  { name: "About", href: "#about", icon: FiUser },
                  { name: "Skills", href: "#skills", icon: FiCode },
                  { name: "Projects", href: "#projects", icon: FiFolder },
                ].map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50/50 hover:bg-indigo-50/50 border border-slate-200/40 hover:border-indigo-200/60 transition-all duration-200"
                    >
                      <Icon className="text-slate-400 group-hover:text-indigo-600 transition-colors text-sm" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-indigo-600 transition-colors">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Akshay Kumar. Crafted with React & Tailwind CSS.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200/50 transition-all duration-200 active:scale-95"
          >
            <span>Back to top</span>
            <FiArrowUp className="text-sm" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Contact;