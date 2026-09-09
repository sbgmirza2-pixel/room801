"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="container nav-container">
        {/* Brand Logo without Pulse Dot */}
        <Link href="#home" className="brand-logo">
          <div className="logo-symbol">
            <Image 
              src="/room-801-apk-logo (1).webp" 
              alt="Room 801 Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a href="#download" className="btn btn-primary btn-nav">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download APK</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`bar ${mobileMenuOpen ? "bar-open-1" : ""}`}></span>
            <span className={`bar ${mobileMenuOpen ? "bar-open-2" : ""}`}></span>
            <span className={`bar ${mobileMenuOpen ? "bar-open-3" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <div className="container mobile-nav-links">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#download"
              className="btn btn-primary mobile-btn-download"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download APK (48.2 MB)
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(32, 35, 40, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid #30363D;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-symbol {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #30363D;
          border: 1px solid #59616D;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease;
        }

        .brand-logo:hover .logo-symbol {
          border-color: #A9433E;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: #59616D;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .nav-link:hover {
          background: #30363D;
          color: #E8E9E7;
          border: 1px solid rgba(169, 67, 62, 0.3);
        }

        .nav-link-active {
          color: #E8E9E7;
          background: #30363D;
          border: 1px solid rgba(169, 67, 62, 0.4);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-primary {
          background: #A9433E;
          color: #E8E9E7;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .btn-primary:hover {
          background: #953a37;
        }

        .btn-nav {
          padding: 8px 18px;
          font-size: 0.88rem;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .bar {
          width: 22px;
          height: 2px;
          background: #E8E9E7;
          transition: all 0.2s ease;
        }

        .bar-open-1 {
          transform: translateY(7px) rotate(45deg);
        }

        .bar-open-2 {
          opacity: 0;
        }

        .bar-open-3 {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-dropdown {
          background: #202328;
          border-bottom: 1px solid #30363D;
          padding: 20px 0;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .mobile-nav-link {
          font-size: 1rem;
          color: #59616D;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .mobile-nav-link-active {
          background: #30363D;
          color: #E8E9E7;
          border-left: 3px solid #A9433E;
        }

        .mobile-btn-download {
          margin-top: 10px;
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .btn-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}