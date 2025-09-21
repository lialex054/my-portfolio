'use client'

import React, { useState, useEffect } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { projects } from '@/lib/projects';

// Helper function to get month number from month name
const getMonthNumber = (monthName: string) => {
  const months = {
    'January': 1, 'February': 2, 'March': 3, 'April': 4,
    'May': 5, 'June': 6, 'July': 7, 'August': 8,
    'September': 9, 'October': 10, 'November': 11, 'December': 12
  };
  return months[monthName as keyof typeof months] || 0;
};

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState('center');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const windowWidth = window.innerWidth;
      
      setMousePosition({ x, y: e.clientY });
      
      if (x < windowWidth * 0.10) {
        setCurrentSection('left');
      } else if (x > windowWidth * 0.90) {
        setCurrentSection('right');
      } else {
        setCurrentSection('center');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Get most recent project based on year and month
  const getMostRecentProject = () => {
    return projects.sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      return getMonthNumber(b.month) - getMonthNumber(a.month);
    })[0];
  };

  const mostRecentProject = getMostRecentProject();

  // Transform functions
  const getLeftPanelTransform = () => {
    return currentSection === 'left' ? 'translateX(0px)' : 'translateX(-100%)';
  };

  const getCenterPanelTransform = () => {
    if (currentSection === 'left') return 'translateX(33.333333%)';
    if (currentSection === 'right') return 'translateX(-33.333333%)';
    return 'translateX(0px)';
  };

  const getRightPanelTransform = () => {
    return currentSection === 'right' ? 'translateX(0px)' : 'translateX(100%)';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      color: 'white',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Logo */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '24px',
        zIndex: 50
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s'
        }}>
          <span style={{
            color: '#0f172a',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>AL</span>
        </div>
      </div>

      {/* Left Section - Contact Form */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.95) 0%, rgba(30, 58, 138, 0.8) 100%)',
        backdropFilter: 'blur(16px)',
        zIndex: 30,
        transform: getLeftPanelTransform(),
        transition: 'transform 0.7s ease-out'
      }}>
        <div style={{
          padding: '32px',
          paddingTop: '80px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          maxWidth: '384px',
          marginLeft: '32px'
        }}>
          <div>
            <h2 className="gradient-text-blue text-3xl font-bold mb-6">
              Get In Touch
            </h2>
            
            <div className="mb-8">
              <input
                type="text"
                placeholder="Your Name"
                className="contact-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="contact-input"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="contact-input resize-none"
              />
              <button className="btn-primary w-full py-3">
                Send Message
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <a 
                href="https://linkedin.com/in/alexli429" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group mb-3"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>lialex96@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Section - Main Content */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        transform: getCenterPanelTransform(),
        transition: 'transform 0.7s ease-out'
      }}>
        <div className="text-center px-8 max-w-4xl">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center relative">
            <div className="profile-container">
              <div className="profile-image">
                👨‍💻
              </div>
              <div className="profile-status animate-pulse-green" />
            </div>
          </div>

          {/* Main Header */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-main leading-tight">
            Welcome to My Portfolio
          </h1>

          {/* About Paragraph */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-gradient px-8 py-3">
              View Projects
            </button>
            <button className="btn-outline px-8 py-3">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Recent Project */}
      <div style={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(270deg, rgba(88, 28, 135, 0.95) 0%, rgba(88, 28, 135, 0.8) 100%)',
        backdropFilter: 'blur(16px)',
        zIndex: 30,
        transform: getRightPanelTransform(),
        transition: 'transform 0.7s ease-out'
      }}>
        <div style={{
          padding: '32px',
          paddingTop: '80px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            maxWidth: '512px',
            marginRight: '32px'
          }}>
            <h3 className="text-sm font-semibold text-purple-300 mb-2 tracking-wide uppercase">
              Most Recent Project
            </h3>
            
            <h2 className="text-4xl font-bold mb-6 gradient-text-purple">
              {mostRecentProject?.title}
            </h2>

            <div className="mb-6">
              <div className="w-full h-48 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/20 overflow-hidden">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-4xl">
                  🚀
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              {mostRecentProject?.description}
            </p>

            <div className="flex gap-3 mb-6">
              <button className="btn-secondary px-6 py-2">
                View Project
              </button>
              <button className="btn-secondary-outline px-6 py-2">
                Live Demo
              </button>
            </div>

            <div className="text-sm text-gray-400">
              <span>Completed: {mostRecentProject?.month} {mostRecentProject?.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Position Indicators */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        <div 
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === 'left' ? 'bg-blue-400 scale-125' : 'bg-gray-600'
          }`}
        />
        <div 
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === 'center' ? 'bg-purple-400 scale-125' : 'bg-gray-600'
          }`}
        />
        <div 
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === 'right' ? 'bg-pink-400 scale-125' : 'bg-gray-600'
          }`}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/5 top-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping-slow" />
        <div className="absolute right-1/3 top-3/5 w-1 h-1 bg-pink-400 rounded-full animate-ping-slower" />
        <div className="absolute left-2/3 bottom-2/5 w-1 h-1 bg-blue-400 rounded-full animate-ping-slowest" />
      </div>
    </div>
  );
};

export default Page;