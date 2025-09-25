"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ThemeToggleButton from './components/ThemeToggleButton';
import Typewriter from './components/Typewriter'; 
import SkillAccordion from './components/SkillAccordion';

// --- SVG Icons (as components for easy use) ---
const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);


// --- Main Portfolio Component ---
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // New state for accordion

  // Function to handle accordion clicks
  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // --- Data for your portfolio ---
  const portfolioData = {
    name: "Bhavya Patel",
    title: "Computer Science Student & Aspiring Software Engineer",
    about: "I am a passionate computer science student with a strong foundation in software development and problem-solving. I enjoy building applications that are scalable, efficient, and user-friendly. Currently exploring opportunities in cloud computing and machine learning.",
    skills: [
      {
        category: "Languages & Frameworks",
        icon: "code", // A simple string to represent the icon
        level: "More than 4 years of experience",
        items: [
          { name: "JavaScript", percentage: "90%" },
          { name: "React / Next.js", percentage: "85%" },
          { name: "Node.js", percentage: "80%" },
          { name: "Python", percentage: "75%" },
        ],
      },
      {
        category: "Databases & Tools",
        icon: "database",
        level: "More than 2 years of experience",
        items: [
          { name: "SQL", percentage: "80%" },
          { name: "MongoDB", percentage: "75%" },
          { name: "Git / GitHub", percentage: "90%" },
          { name: "Docker", percentage: "65%" },
        ],
      },
      {
        category: "Cloud & DevOps",
        icon: "server",
        level: "More than 1 year of experience",
        items: [
          { name: "AWS", percentage: "60%" },
          { name: "CI/CD", percentage: "55%" },
          { name: "Jenkins", percentage: "40%" },
        ],
      },
    ],
    projects: [
      {
        title: "Project One: E-commerce Platform",
        description: "A full-stack e-commerce website built with the MERN stack, featuring product listings, a shopping cart, user authentication, and a Stripe integration for payments.",
        imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Project+One",
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        title: "Project Two: Machine Learning Model",
        description: "Developed a Python-based machine learning model to predict housing prices using Scikit-learn, Pandas, and Matplotlib for data visualization.",
        imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Project+Two",
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        title: "Project Three: Mobile App",
        description: "A cross-platform mobile application using React Native for tracking personal fitness goals. Integrated with Firebase for real-time data synchronization.",
        imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Project+Three",
        liveUrl: "#",
        githubUrl: "#",
      },
       {
        title: "Project Four: DevOps Pipeline",
        description: "Designed and implemented a CI/CD pipeline using Jenkins and Docker to automate the testing and deployment of a web application on AWS.",
        imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Project+Four",
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
    contact: {
      email: "bhavya.patel@torontomu.ca",
      github: "bcp579",
      linkedin: "bhavya-patel-32541b222",
    },
  };

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <div className="font-sans leading-normal tracking-wider text-[var(--foreground)] bg-[var(--background)]">
      
      {/* --- Header & Navigation --- */}
     <header className="fixed top-0 w-full z-30 bg-[var(--background)] bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center p-4 px-35">
          <a href="#" className="text-2xl font-bold text-[hsl(225,69%,61%)] hover:text-[hsl(225,69%,79%)] transition-colors">
            {portfolioData.name}
          </a>
          <nav className="hidden md:flex space-x-6 items-center item-end ml-auto">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[var(--foreground)] hover:text-[hsl(225,69%,61%)] transition-colors font-medium">
                {link}
              </a>
            ))}
            <ThemeToggleButton />
          </nav>
          <button className="md:hidden text-[var(--foreground)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[var(--background)] p-4">
            {navLinks.map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="block py-2 text-center text-[var(--foreground)] hover:text-[hsl(225,69%,61%)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex justify-center mt-4">
              <ThemeToggleButton />
            </div>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-35">

         {/* Left Sidebar for Social Icons */}
          <div className="hidden lg:flex fixed bottom-0 left-20 z-20 text-[var(--foreground)]">
            <div className="flex flex-col items-center space-y-4">
              <a href={`https://github.com/${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(225,69%,61%)] transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href={`https://linkedin.com/in/${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(225,69%,61%)] transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <div className="h-40 w-px bg-[var(--foreground)] opacity-50"></div>
            </div>
          </div>

          {/* Right Sidebar for Email */}
          <div className="hidden lg:flex fixed bottom-0 right-20 z-20 text-[var(--foreground)]">
            <div className="flex flex-col items-center space-y-1">
              <a href={`mailto:${portfolioData.contact.email}`} className="[writing-mode:vertical-lr] mb-3 hover:text-[hsl(225,69%,61%)] transition-colors font-mono">
                {portfolioData.contact.email}
              </a>
              <div className="h-40 w-px bg-[var(--foreground)] opacity-50"></div>
            </div>
          </div>  

        {/* --- Hero Section --- */}
        <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-13 text-left ">
          <div className="max-w-3xl">
            <p className="text-[var(--foreground)] text-3xl font-bold mb-1">
              Hi! <span className="wave">👋</span>, I&apos;m {portfolioData.name.split(' ')[0]}
            </p>
            <h3 className="text-[var(--foreground)] opacity-70 text-2xl mb-4 font-bold">
              and I&apos;m <Typewriter/>
            </h3>
            <p className="text-[var(--foreground)] opacity-70 text-lg max-w-xl mb-8">
              I build things for the web. I&apos;m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="bg-[hsl(225,69%,61%)] hover:bg-[hsl(225,69%,79%)] text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
                View My Work
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-[hsl(225,69%,61%)] hover:bg-[hsl(225,69%,61%)] text-[hsl(225,69%,61%)] hover:text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                Download Resume
              </a>
            </div>
        
          </div>
          
          {/* Image Container */}
          <div className="w-84 h-84 mx-auto">
            <svg viewBox="0 0 200 200" className="w-full h-full">

              <path 
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 
                  21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
                  10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 
                  10.857 190.312 36.4879Z"
                fill="hsl(224,93%,88%)"
              />

              <defs>
                <clipPath id="aviator-mask">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 
                          21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
                          10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 
                          10.857 190.312 36.4879Z" />
                </clipPath>
              </defs>

              <image 
                href="/image.png" 
                width="100%" 
                height="100%" 
                clipPath="url(#aviator-mask)" 
              />
            </svg>
          </div>

          
          <a href="#about" className="absolute bottom-20 left-1/2 transform -translate-x-1/2 group">
            <div className="flex flex-row items-center justify-center gap-1 hover:animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--foreground)] opacity-70">
                <rect x="5" y="2" width="14" height="20" rx="7" ry="7" />
                <path d="M12 6v4" />
              </svg>
              <p>Scroll Down</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--foreground)] opacity-70 transition-transform duration-300">
                <path d="M12 5v14"/>
                <path d="m19 12-7 7-7-7"/>
              </svg>
            </div>
          </a>

          
        </section>  
        

        {/* --- About Section --- */}
        <section id="about" className="py-20 md:py-22">
          <h2 className="text-4xl font-bold text-center mb-3 text-[var(--foreground)]">
            <span className="text-[hsl(225,69%,61%)]">01.</span> About Me
          </h2>
          <h2 className="text-1xl text-center mb-12 text-[var(--foreground)] opacity-70">
             My Introduction
          </h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="shadow-2xl ... rounded-xl mx-auto relative w-64 h-64">
              <Image 
                src="/Avatar.png" 
                alt="Bhavya Patel" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="md:w-2/3 text-lg text-[var(--foreground)] opacity-70 space-y-4">
              <p>{portfolioData.about}</p>
               <div className="flex justify-center space-x-25 mt-8">
                <div className='flex flex-col items-center'>
                  <p className='text-2xl font-extrabold text-[var(--foreground)]'>02+ </p>
                  <p className='text-sm text-[var(--foreground)] opacity-70'> Years <br/> Experience</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p className='text-2xl font-extrabold text-[var(--foreground)]'> 10+ </p>
                  <p className='text-sm text-[var(--foreground)] opacity-70'> Completed <br/> Projects </p>
                </div>
               </div>
            </div>
            
          </div>
         

        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20 md:py-22">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
            <span className="text-[hsl(225,69%,61%)]">02.</span> My Skills
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.skills.map((skillGroup, index) => (
              <SkillAccordion 
                key={index} 
                skillGroup={skillGroup}
                isOpen={openIndex === index} // Check if this accordion should be open
                onClick={() => handleAccordionClick(index)} // Pass a function to handle clicks
              />
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 md:py-22">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">
            <span className="text-[hsl(225,69%,61%)]">03.</span> My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioData.projects.map((project, index) => (
           
              <div key={index} className="flex flex-col gap-6 p-6 rounded-lg shadow-xl bg-[var(--project_background)] transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-indigo-200">
                {/* Project image can be optional or removed for a cleaner look */}
                {/* <img ... /> */}

                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">{project.title}</h3>
                  <div className="flex space-x-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] opacity-70 hover:text-[hsl(225,69%,61%)] transition-colors">
                      <GithubIcon className="w-6 h-6" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] opacity-70 hover:text-[hsl(225,69%,61%)] transition-colors">
                      <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="text-[var(--foreground)] opacity-70">{project.description}</p>
              </div>

            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
      <section id="contact" className="py-20 md:py-32">
        <h2 className="text-4xl font-bold text-center mb-3 text-[var(--foreground)]">
          <span className="text-[hsl(225,69%,61%)]">04.</span> Contact Me
        </h2>
        <h2 className="text-1xl text-center mb-19 text-[var(--foreground)] opacity-70">
          Get In Touch
        </h2>

        <div className=" px-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 ">
         
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MailIcon className="w-9 h-9 text-[hsl(225,69%,61%)] mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Email</h3>
                  <a href={`mailto:${portfolioData.contact.email}`} target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-[var(--foreground)] opacity-70 hover:underline">{portfolioData.contact.email}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <GithubIcon className="w-9 h-9 text-[hsl(225,69%,61%)] mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Github</h3>
                  <a href={`https://github.com/${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-[var(--foreground)] opacity-70 hover:underline">https://github.com/{portfolioData.contact.github}</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <LinkedinIcon className="w-9 h-9 text-[hsl(225,69%,61%)] mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">LinkedIn</h3>
                  <a href={`https://linkedin.com/in/${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-[var(--foreground)] opacity-70 hover:underline">https://linkedin.com/in/{portfolioData.contact.linkedin}</span>
                  </a>
                </div>
              </div>
            </div>
      </div>
      </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-8 bg-[hsl(225,69%,75%)]">
        <div className="text-center text-[var(--foreground)] mt-4">
          <p className="text-sm mt-10">&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
          <p className="text-xs mt-2">Designed & Built by {portfolioData.name}</p>
        </div>
      </footer>
  </div>
  );
}